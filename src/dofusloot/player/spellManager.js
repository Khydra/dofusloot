import {Panel} from '../global/Panel.js';
import {inventory, player, enemy} from '../game.js';
import {summonAction, callSummon} from './summonManager.js';
import {summonData} from './summonData.js';

export function directSpell(spell) {
	let crt = isCritical(player.stat.crt[0]);
	if (spell.sv != undefined && spell.sv.activate == 'before') statVariation(spell.sv);

	if (spell.source == 'weapon') weaponDamage(crt);
	else if (spell.source == 'spell') calcDamage(spell, crt);
	
	if (spell.sv != undefined && spell.sv.activate == 'after') statVariation(spell.sv);
}

export function sideSpell(spell) {
	if (spell.source == 'consumable') useConsumable();
	if (spell.healType != undefined) spellHeal(spell);
	if (spell.armorRegenType != undefined) spellArmor(spell);
	if (spell.autoDamage != undefined) spellAutoDamage(spell);
	if (spell.sv != undefined) statVariation(spell.sv);
	if (spell.addEffect != undefined) addPlayerEffect(spell);
	if (spell.trap != undefined) plantTrap(spell.trap);
	if (spell.activeTraps != undefined) activateTrap(spell.activeTraps);
	if (spell.arsenic != undefined) enemy.addArsenic();
	if (spell.bombCharge != undefined) bombCharge(spell);

	if (spell.id == 79) massGrave();
	if (spell.id == 115) getBluff();
	if (spell.id == 117) spinRoulette();
	if (spell.id == 118) spinWoF();
	if (spell.id == 126) applyParalysingPoison();
	if (spell.id == 129) applyPoisonedWind();
	if (spell.id == 157) detonate();
	if (spell.id == 159) kabum();
}

function isCritical(crt) {
	let n = Math.floor(Math.random() * 100);
	if (crt > n) {
		Panel.addLine(` ¡Golpe crítico!`);
		return true;
	}
	return false;
}

function weaponDamage(crt) {
	let weapon = inventory.gear.weapon;
	if (weapon == null) return attack('earth', [4, 5], crt);
	else return calcDamage(weapon, crt);	
}

function calcDamage(src, crt) {
	Object.keys(src.power).forEach((element)=> {
		src.power[element].forEach((hit)=> { 
			attack(element, hit, crt, src);
		});
	})
}

function attack(element, hit, crt, spell) {
	let damageEffect;
	if (spell != null && spell.damageEffect != undefined) damageEffect = spell.damageEffect;
	if (damageEffect == null) damageEffect = {};

	let pureDmg;
	let realDmg;
	let crtDmg = 0;
	let base = Math.floor(Math.random() * (hit[1] - hit[0] + 1)) + hit[0];
	
	if (spell != null && spell.id == 123) player.summon.forEach((summ) => { if (summ.id === 5) base += base * 0.25 });
	if (damageEffect.name == 'baseDamageIncrement') base += Math.floor(eval(damageEffect.bonus));
	if (damageEffect.name == 'baseDamageIncrementPm') base += (player.stat.pm[0] * damageEffect.value);
	if (damageEffect.name == 'baseDamageIncrementTraps') base += Math.floor(damageEffect.bonus * player.effect.activatedTraps);
	if (damageEffect.name == 'autoDamage') spellAutoDamage(spell);

	if (damageEffect.name == 'enemyBurning') {
		switch(damageEffect.bonus) {
			case 'power':
				base += Math.floor(base*(damageEffect.power/100)); //type per
			break
		}
	}
			
	if (damageEffect.name == 'sismobombaBuff' && player.summon.length > 0) {
		player.summon.forEach((summ) => {
			if (summ.name == 'Sismobomba') {
				summonData.sismobomba.attack.bonus[0] += 1;
				if (summonData.sismobomba.attack.bonus[0] > summonData.sismobomba.attack.bonus[1]) summonData.sismobomba.attack.bonus[0] = summonData.sismobomba.attack.bonus[1];
			}
		})
	}

	if (damageEffect.name == 'desinvocation' && player.summon.length > 0) {
		let n = player.summon.length;
		player.summonDestroy();
		Panel.addLine(`<br> Mueren todas tus invocaciones.`);
		if (spell.id = 134) {
			player.stat.cha[0] += (50*n);
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> <span class="water">+${(50*n)} Suerte</span>`);
		}
	}

	if (damageEffect.name == 'finisher' && (enemy.health[0] <= (enemy.health[1]/4))) {
		base *= 5;
		Panel.addLine(` (Aumentado)`);
	}

	if (damageEffect.name == 'powerBuff') {
		base += spell.powerBuff[0];
		spell.powerBuff[0] += spell.powerBuff[1];
	}

	if (!crt && damageEffect.name == 'armorCrit' && enemy.armor[0] > 0) {
		Panel.addLine(` (¡Crítico convertido!)`);
		crt = true;
	}

	if (crt) {
		if (damageEffect.name == 'criticalPower') base *= 3;
		else base *= 1.75;
		crtDmg = player.stat.crtDmg[0];
	}

	switch (element) {
	  	case 'earth':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.str[0] + player.stat.pot[0]) / 100))) + (player.stat.strDmg[0] + player.stat.dmg[0] + crtDmg));
	    	break
	  	case 'fire':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.int[0] + player.stat.pot[0]) / 100))) + (player.stat.intDmg[0] + player.stat.dmg[0] + crtDmg));
	    	break
	  	case 'air':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.agi[0] + player.stat.pot[0]) / 100))) + (player.stat.agiDmg[0] + player.stat.dmg[0] + crtDmg));
	    	break
	  	case 'water':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.cha[0] + player.stat.pot[0]) / 100))) + (player.stat.chaDmg[0] + player.stat.dmg[0] + crtDmg));
	    	break
	}

	realDmg = Math.floor(pureDmg - (pureDmg * enemy.res[element] / 100));
	if (spell == undefined) realDmg = Math.floor(realDmg + (realDmg * player.stat.wepDmg[0] / 100));
	else realDmg = Math.floor(realDmg + (realDmg * player.stat.speDmg[0] / 100));

	if (damageEffect.name == 'bankruptcy') {
		Panel.addLine(`<br> Has perdido todas tus Kamas.`);
		player.gold = 0;
		player.changeGold(-1);
	}

	if (crt && damageEffect.name == 'criticalRestorePA') {
		player.stat.pa[0] += 2;
		Panel.addLine(`<br><span class="yellow"> ${player.name}</span> <span class="blue">+2PA</span>`);
	}

	if (crt && damageEffect.name == 'loseAllCritical') {
		player.stat.crt[0] = 0;
		Panel.addLine(`<br>Pero <span class="yellow"> ${player.name}</span> pierde todo su <span class="neutral">Crítico</span>.`);
	}

	if (crt && damageEffect.name == 'dagasBumeran') enemy.getDamaged(realDmg, element, damageEffect);
	if (crt && damageEffect.name == 'trapOnCritical') plantTrap(damageEffect.trap);

	enemy.getDamaged(realDmg, element, damageEffect);

	if (damageEffect.name == 'metralla' && player.summon.length > 0) {
		player.summon.forEach((summ) => {
			if (summ.name == 'Tornabomba') {
				enemy.getDamaged(realDmg, element, damageEffect);
			}
		})
	}

	if (damageEffect.name == 'stealKamas') stealKamas(realDmg, damageEffect.percentage);

	if (enemy.health[0] == 0) return;

	if (damageEffect.name == 'perdigonazo' && player.summon.length > 0) {
		player.summon.forEach((summ) => {
			if (summ.name == 'Bomba de Agua') {
				player.stat.pa[0] += 1;
				Panel.addLine(`<br><span class="yellow"> ${player.name}</span> ha recuperado <span class="blue">1 PA</span>.`);
			}
		})
	}

	if (crt && damageEffect.name == 'criticalPot') {
		player.stat.pot[0] += damageEffect.value
		Panel.addLine(`<br><span class="yellow"> ${player.name}</span> <span class="neutral">+${damageEffect.value} Potencia</span>`);
	}

	if (crt) {
		player.summon.forEach((summon) => {
			if (summon.activation == 'onCriticalHit') summonAction(summon);
		})
	}

	if (damageEffect.name == 'bombardeo' && player.summon.length < 4 && enemy.health[0] > 0) callSummon(spell);

	if (damageEffect.name == 'bramble') {
		player.summon.forEach((summ)=> {
			if (summ.activation == 'onBramble') summonAction(summ);
		})
		if (player.summon.length < 4 && enemy.health[0] > 0) callSummon(spell);
	}

	if (damageEffect.name == 'trapActivate') activateTrap(damageEffect.n);
	if (damageEffect.name == 'activateArsenic' && enemy.arsenic > 0) arsenicDamage();

	if (hit[2]) player.getHealed(Math.floor(realDmg/2)); 
	if (spell != undefined && spell.armorRegen != null) spellArmor(spell);
}

function statVariation(sv) {
 	if (eval(sv.condition)) {
 		sv.path.forEach((p, i)=>{
 			eval(`${p} += ${sv.value[i]}`);
 		})

	 	if (sv.foe == 'enemy') {
	 		Panel.addLine(`<br><span class="red"> ${enemy.name}</span> enemigo ${sv.msg}`);
	 		enemy.update();
	 	}
	 	 else {
	 	 	Panel.addLine(`<br><span class="yellow"> ${player.name}</span> ${sv.msg}`);
	 	 	player.statusUpdate();
        	player.statsUpdate();
	    }
    }

    if (player.stat.pa[0] > player.stat.pa[1]) player.stat.pa[0] = player.stat.pa[1];
 	if (player.stat.pm[0] > player.stat.pm[1]) player.stat.pm[0] = player.stat.pm[1];
 	if (player.stat.vit[0] > player.stat.vit[1]) player.stat.vit[0] = player.stat.vit[1];
 	if (player.stat.arm[0] > player.stat.arm[1]) player.stat.arm[0] = player.stat.arm[1];
}

function spellHeal(spell) {
	if (spell.healType == 'percentage') {
		player.getHealed(Math.floor(player.stat.vit[1] * (spell.heal/100)));
	} else if (spell.healType == 'scale') {
		Object.keys(spell.powerHeal).forEach((el)=>{
			spell.powerHeal[el].forEach((power)=> {
				healFormula(el, power)				
			})
		})
	}
}

function healFormula(element, power) {
	let heal = 0;
	let base = Math.floor(Math.random() * (power[1] - power[0] + 1)) + power[0];
	switch (element) {
	  	case 'earth':
	    	heal = Math.floor((base * (1 + ((player.stat.str[0]) / 100))) + (player.stat.cur[0]));
	    	break;
	  	case 'fire':
	    	heal = Math.floor((base * (1 + ((player.stat.int[0]) / 100))) + (player.stat.cur[0]));
	    	break;
	  	case 'air':
	    	heal = Math.floor((base * (1 + ((player.stat.agi[0]) / 100))) + (player.stat.cur[0]));
	    	break;
	  	case 'water':
	    	heal = Math.floor((base * (1 + ((player.stat.cha[0]) / 100))) + (player.stat.cur[0]));
	    	break;
	}

	player.getHealed(heal, element);
}

function spellArmor(spell) {
	if (spell.armorRegenType == 'percentage') player.getArmored(Math.ceil(player.stat.arm[1] * (spell.armorRegen/100)));
	if (spell.armorRegenType == 'allLost') {
		Panel.addLine(`<br><span class="yellow"> ${player.name}</span> pierde toda su <span class="grey">Armadura</span>.`);
		player.stat.arm[0] = 0;
		player.update();
	}

	if (spell.id == 176) {
		Panel.addLine(`<br><span class="yellow"> ${player.name}</span> reduce su <span class="red">Vitalidad</span> a 1.`);
		player.stat.vit[0] = 1;
		player.update();
	}
}

function spellAutoDamage(spell) {
	if (spell.autoDamageType == 'percentage') {
		player.getDamaged(Math.floor(player.stat.vit[1] * (spell.autoDamage/100)), true);
	} else if (spell.autoDamageType == 'base') {
		let realDmg, pureDmg;
		let base =  Math.floor(Math.random() * (spell.autoDamage[1] - spell.autoDamage[0] + 1)) + spell.autoDamage[0];
		
		switch (spell.autoDamage[2]) {
		  	case 'earth':
		    	pureDmg = Math.floor((base * (1 + ((player.stat.str[0] + player.stat.pot[0]) / 100))) + (player.stat.strDmg[0] + player.stat.dmg[0]));
		    	break
		  	case 'fire':
		    	pureDmg = Math.floor((base * (1 + ((player.stat.int[0] + player.stat.pot[0]) / 100))) + (player.stat.intDmg[0] + player.stat.dmg[0]));
		    	break
		  	case 'air':
		    	pureDmg = Math.floor((base * (1 + ((player.stat.agi[0] + player.stat.pot[0]) / 100))) + (player.stat.agiDmg[0] + player.stat.dmg[0]));
		    	break
		  	case 'water':
		    	pureDmg = Math.floor((base * (1 + ((player.stat.cha[0] + player.stat.pot[0]) / 100))) + (player.stat.chaDmg[0] + player.stat.dmg[0]));
		    	break	
		}
		realDmg = Math.floor(pureDmg - (pureDmg * player.stat.res[0] / 100));
		player.getDamaged(realDmg);
	}
}

export function burnDamage() {
	Panel.addLine(`<br><span class="red"> ${enemy.name}</span> sufre quemadura.`);
	let base = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
	let burnDmg = Math.floor((base * (1 + ((player.stat.int[0] + player.stat.pot[0]) / 100))) + (player.stat.intDmg[0] + player.stat.dmg[0]));
	let realDmg = Math.floor(burnDmg - (burnDmg * enemy.res['fire'] / 100));
	enemy.getDamaged(realDmg, 'fire', {name: 'indirect'});
}

export function arsenicDamage() {
	Panel.addLine(`<br><span class="red"> ${enemy.name}</span> se resiente del veneno insidioso.`);
	let base = Math.floor(Math.random() * ((2 * enemy.arsenic) - (1 * enemy.arsenic) + 1)) + (1 * enemy.arsenic);
	let burnDmg = Math.floor((base * (1 + ((player.stat.agi[0] + player.stat.pot[0]) / 100))) + (player.stat.agiDmg[0] + player.stat.dmg[0]));
	let realDmg = Math.floor(burnDmg - (burnDmg * enemy.res['air'] / 100));
	enemy.getDamaged(realDmg, 'air', {name: 'indirect'});
}

function addPlayerEffect(spell) {
	player.effect[spell.addEffect.name] = spell.addEffect.value;
	Panel.addLine(`<br><span class="yellow"> ${player.name}</span> ${spell.addEffect.msg}`);
}

function plantTrap(trap) {
	Panel.addLine(`<br><span class="yellow"> ${player.name}</span> coloca una <span class="${trap.element}">${trap.name}</span>.`);
	enemy.addTrap(trap)
}

function massGrave() {
	let gc = 0;
	Object.keys(enemy.traps).forEach(trap => {
		let nTrap = enemy.traps[trap].n;
		for (let i = 0; i < nTrap; i++) {
			gc += 2;
		}
	})
	Panel.addLine(`<br><span class="yellow"> ${player.name}</span> gana <span class="neutral">${gc}% Crítico</span>.`);
	player.stat.crt[0] += gc;
}

function activateTrap(n) {
	if (Object.keys(enemy.traps).length === 0) return Panel.addLine(`<br>No hay trampas que activar.`);
	if (n == 1) {
		player.effect.activatedTraps ++;
		//selecciona una trampa aleatoria:
		let keys = Object.keys(enemy.traps);
	    let randomKey = keys[Math.floor(Math.random() * keys.length)]; 
	    let trap = enemy.traps[randomKey];
	    //activa una trampa
	    trapDamage(trap);
	    enemy.removeTrap(trap);
	} else {
		let heal = false;
		if (n == 'heal') heal = true;
		//activa todas las trampas
		Object.keys(enemy.traps).forEach(trap => {
			let nTrap = enemy.traps[trap].n;
			for (let i = 0; i < nTrap; i++) {
				player.effect.activatedTraps ++;
				trapDamage(enemy.traps[trap], heal);
	   			enemy.removeTrap(enemy.traps[trap]);
			}
		})
	}
}

function trapDamage(trap, heal) {
	Panel.addLine(`<br><span class="yellow"> ${player.name}</span> activa una <span class="${trap.element}">${trap.name}</span>.`);
	let base = Math.floor(Math.random() * (trap.power[1] - trap.power[0] + 1)) + trap.power[0];
	let pureDmg;

	switch (trap.element) {
	  	case 'earth':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.str[0] + player.stat.pot[0]) / 100))) + (player.stat.tpDmg[0] + player.stat.strDmg[0] + player.stat.dmg[0]));
	    	break
	  	case 'fire':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.int[0] + player.stat.pot[0]) / 100))) + (player.stat.tpDmg[0] + player.stat.intDmg[0] + player.stat.dmg[0]));
	    	break
	  	case 'air':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.agi[0] + player.stat.pot[0]) / 100))) + (player.stat.tpDmg[0] + player.stat.agiDmg[0] + player.stat.dmg[0]));
	    	break
	  	case 'water':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.cha[0] + player.stat.pot[0]) / 100))) + (player.stat.tpDmg[0] + player.stat.chaDmg[0] + player.stat.dmg[0]));
	    	break
	}

	let realDmg = Math.floor(pureDmg - (pureDmg * enemy.res[trap.element] / 100));
	realDmg = Math.floor(realDmg + (realDmg * player.stat.speDmg[0] / 100));
	enemy.getDamaged(realDmg, trap.element, {name: 'indirect'});
	if (heal) player.getHealed(Math.floor(realDmg*0.2));
}

function stealKamas(damage, percentage) {
	let kamas = Math.ceil(damage*(percentage/100));
	Panel.addLine(`<br><span class="yellow"> ${player.name}</span> recoge <span class="yellow">${kamas} Kamas</span>.`);
	player.changeGold(kamas);
} 

function getBluff() {
	let crt = isCritical(player.stat.crt[0]);
	if (crt) {
		attack('air', [17, 21], crt, null);
		attack('water', [17, 21], crt, null);
	} else {
		let n = Math.floor(Math.random()*2);
		if (n == 0) attack('air', [17, 21], crt, null);
		else attack('water', [17, 21], crt, null)
	}
}

function spinRoulette() {
	let n = Math.floor(Math.random()*9);
	switch(n) {
		case 0:
			player.stat.str[0] += 100;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="earth">100 Fuerza</span>.`);
		break;
		case 1:
			player.stat.int[0] += 100;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="fire">100 Inteligencia</span>.`);
		break;
		case 2:
			player.stat.agi[0] += 100;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="air">100 Agilidad</span>.`);
		break;
		case 3:
			player.stat.cha[0] += 100;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="water">100 Suerte</span>.`);
		break;
		case 4:
			player.stat.crt[0] += 10;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="neutral">10% Crítico</span>.`);
		break;
		case 5:
			player.stat.pot[0] += 60;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="neutral">60 Potencia</span>.`);
		break;
		case 6:
			player.changePA(2);
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="blue">2 PA</span>.`);
		break;
		case 7:
			player.changePM(2);
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="green">2 PM</span>.`);
		break;
		case 8:
			player.stat.dmg[0] += 15;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="neutral">15 Daños</span>.`);
		break;
	}
}

function spinWoF() {
	if (player.stat.crt[0] >= 100) {
		player.stat.pot[0] += 500;
		player.stat.crt[0] = 0;
		Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="neutral">500 Potencia</span>.
						<br><span class="yellow"> ${player.name}</span> pierde todo su <span class="neutral">Crítico</span>.`);
	} else {
		let n = Math.floor(Math.random()*250)+1;
		player.stat.pot[0] += n;
		Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="neutral">${n} Potencia</span>.`);
	}
}

function applyParalysingPoison() {
	if (enemy.paralysingPoison) return;
	enemy.paralysingPoison = true;
	enemy.addAction({ type: 'paralysingPoison', active: false });
}

export function paralysingPoisonDamage() {
	Panel.addLine(`<br><span class="red"> ${enemy.name}</span> sufre veneno paralizante.`);
	let base = Math.floor(Math.random() * (15 - 12 + 1)) + 12;
	let burnDmg = Math.floor((base * (1 + ((player.stat.int[0] + player.stat.pot[0]) / 100))) + (player.stat.intDmg[0] + player.stat.dmg[0]));
	let realDmg = Math.floor(burnDmg - (burnDmg * enemy.res['fire'] / 100));
	enemy.getDamaged(realDmg, 'fire', {name: 'indirect'});
}

function applyPoisonedWind() {
	if (enemy.poisonedWind) return;
	enemy.poisonedWind = true;
	enemy.addAction({ type: 'poisonedWind', active: false });
}

export function poisonedWindEffect() {
	Panel.addLine(`<br><span class="red"> ${enemy.name}</span> sufre los efectos de <span class="air">Viento enveneado</span>.`);
	Panel.addLine(`<br><span class="red"> ${enemy.name}</span> -4% resistencia <span class="air">(Aire)</span>.`);
	enemy.res.air -= 4;
	if (enemy.paralysingPoison) {
		enemy.res.fire -= 4;
		Panel.addLine(`<br><span class="red"> ${enemy.name}</span> -4% resistencia <span class="fire">(Fuego)</span>.`);
	}

	enemy.update();
}

function bombCharge(spell) {
	player.summon.forEach(summ => {
		if (summ.id === 11) {
			summonData.sismobomba.attack.bonus[0] += spell.bombCharge;
			if (summonData.sismobomba.attack.bonus[0] > summonData.sismobomba.attack.bonus[1]) summonData.sismobomba.attack.bonus[0] = summonData.sismobomba.attack.bonus[1];
		} else if (summ.id === 12) {
			summonData.explobomba.attack.bonus[0] += spell.bombCharge;
			if (summonData.explobomba.attack.bonus[0] > summonData.explobomba.attack.bonus[1]) summonData.explobomba.attack.bonus[0] = summonData.explobomba.attack.bonus[1];
		} else if (summ.id === 13) {
			summonData.tornabomba.attack.bonus[0] += spell.bombCharge;
			if (summonData.tornabomba.attack.bonus[0] > summonData.tornabomba.attack.bonus[1]) summonData.tornabomba.attack.bonus[0] = summonData.tornabomba.attack.bonus[1];
		} else if (summ.id === 14) {
			summonData.hidrobomba.attack.bonus[0] += spell.bombCharge;
			if (summonData.hidrobomba.attack.bonus[0] > summonData.hidrobomba.attack.bonus[1]) summonData.hidrobomba.attack.bonus[0] = summonData.hidrobomba.attack.bonus[1];
		}
	})
	if (spell.id == 160) {
		Panel.addLine(`<br><span class="yellow"> ${player.name}</span> gasta gasta su <span class="neutral">último aliento</span>.`);
		player.stat.vit[0] = 1;
	}
	player.update();
}

function kabum() {
	player.summon.forEach(summ => {
		if (summ.id === 11)  {
			player.stat.str[0] += 50;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> <span class="earth">+50 Fuerza</span>.`)
		}
		if (summ.id === 12) {
			player.stat.int[0] += 50;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> <span class="fire">+50 Inteligencia</span>.`)
		}
		if (summ.id === 13) {
			player.stat.agi[0] += 50;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> <span class="air">+50 Agilidad</span>.`)
		}
		if (summ.id === 14)	 {
			player.stat.cha[0] += 50;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> <span class="water">+50 Suerte</span>.`)
		}
	})
}

function detonate() {
	let base;
	let pureDmg;
	let realDmg;
	player.summon.forEach(summ => {
		if (summ.id === 11)  {
			base = Math.floor(Math.random() * ((summonData.sismobomba.attack.power[1] + summonData.sismobomba.attack.bonus[0]) - 
												(summonData.sismobomba.attack.power[0] + summonData.sismobomba.attack.bonus[0]) + 1)) + 
												(summonData.sismobomba.attack.power[0] + summonData.sismobomba.attack.bonus[0]);
			pureDmg = Math.floor((base * (1 + ((player.stat.str[0] + player.stat.pot[0]) / 100))) + (player.stat.strDmg[0] + player.stat.dmg[0]));
			realDmg = Math.floor(pureDmg - (pureDmg * enemy.res['earth'] / 100));
			realDmg = Math.floor(realDmg + (realDmg * player.stat.speDmg[0] / 100));
			enemy.getDamaged(realDmg, 'earth', {name: 'indirect'});
		}
		if (summ.id === 12) {
			base = Math.floor(Math.random() * ((summonData.explobomba.attack.power[1] + summonData.explobomba.attack.bonus[0]) - 
												(summonData.explobomba.attack.power[0] + summonData.explobomba.attack.bonus[0]) + 1)) + 
												(summonData.explobomba.attack.power[0] + summonData.explobomba.attack.bonus[0]);
			pureDmg = Math.floor((base * (1 + ((player.stat.int[0] + player.stat.pot[0]) / 100))) + (player.stat.intDmg[0] + player.stat.dmg[0]));
			realDmg = Math.floor(pureDmg - (pureDmg * enemy.res['fire'] / 100));
			realDmg = Math.floor(realDmg + (realDmg * player.stat.speDmg[0] / 100));
			enemy.getDamaged(realDmg, 'fire', {name: 'indirect'});
		}
		if (summ.id === 13) {
			base = Math.floor(Math.random() * ((summonData.tornabomba.attack.power[1] + summonData.tornabomba.attack.bonus[0]) - 
												(summonData.tornabomba.attack.power[0] + summonData.tornabomba.attack.bonus[0]) + 1)) + 
												(summonData.tornabomba.attack.power[0] + summonData.tornabomba.attack.bonus[0]);
			pureDmg = Math.floor((base * (1 + ((player.stat.agi[0] + player.stat.pot[0]) / 100))) + (player.stat.agiDmg[0] + player.stat.dmg[0]));
			realDmg = Math.floor(pureDmg - (pureDmg * enemy.res['air'] / 100));
			realDmg = Math.floor(realDmg + (realDmg * player.stat.speDmg[0] / 100));
			enemy.getDamaged(realDmg, 'air', {name: 'indirect'});
		}
		if (summ.id === 14)	 {
			base = Math.floor(Math.random() * ((summonData.hidrobomba.attack.power[1] + summonData.hidrobomba.attack.bonus[0]) - 
												(summonData.hidrobomba.attack.power[0] + summonData.hidrobomba.attack.bonus[0]) + 1)) + 
												(summonData.hidrobomba.attack.power[0] + summonData.hidrobomba.attack.bonus[0]);
												console.log(base)
			pureDmg = Math.floor((base * (1 + ((player.stat.cha[0] + player.stat.pot[0]) / 100))) + (player.stat.chaDmg[0] + player.stat.dmg[0]));
			realDmg = Math.floor(pureDmg - (pureDmg * enemy.res['water'] / 100));
			realDmg = Math.floor(realDmg + (realDmg * player.stat.speDmg[0] / 100));
			enemy.getDamaged(realDmg, 'water', {name: 'indirect'});
		}
	})

	player.summonDestroy();
}

function useConsumable() {
	if (inventory.gear.consumable == null) {
		Panel.addLine(`<br>Pero no tiene ningún consumible equipado...`)
		return;
	}
	
	switch(inventory.gear.consumable.id) {
		case 0:
			player.getHealed(30);
			break;
		case 1:
			player.getHealed(75);
			player.stat.vit[1] += 5;
			player.stat.vit[0] += 5;
			break;
		case 2:
			player.getHealed(150);
			break;
		case 3:
			player.getHealed(300);
			break;
		case 4:
			player.stat.str[0] += 100;
			Panel.addLine(`<br><span class="earth">+100 Fuerza</span>.`)
			break;
		case 5:
			player.stat.int[0] += 100;
			Panel.addLine(`<br><span class="fire">+100 Inteligencia</span>.`)
			break;
		case 6:
			player.stat.agi[0] += 100;
			Panel.addLine(`<br><span class="air">+100 Agilidad</span>.`)
			break;
		case 7:
			player.stat.cha[0] += 100;
			Panel.addLine(`<br><span class="water">+100 Suerte</span>.`)
			break;
		case 8:
			player.getHealed(300);
			player.getArmored(100);
			break;
		case 9:
			player.getHealed(800);
			break;
		case 10:
			player.effect.poison = 0;
			Panel.addLine(`<br><span class="yellow">${player.name}</span> se deshace del veneno acumulado.`)
			break;
		case 11:
			player.getArmored('all');
			break;
		case 12:
			player.changePA(6);
			Panel.addLine(`<br><span class="yellow">${player.name}</span> recupera <span class="blue">PA</span>.`)
			break;
		case 13:
			enemy.res['air'] = 0;
			Panel.addLine(`<br><span class="red">${enemy.name}</span> su resistencia a Aire se vuelve 0%.`)
			break;
		case 14:
			enemy.res['fire'] = 0;
			Panel.addLine(`<br><span class="red">${enemy.name}</span> su resistencia a Fuego se vuelve 0%.`)
			break;
		case 15:
			enemy.res['water'] = 0;
			Panel.addLine(`<br><span class="red">${enemy.name}</span> su resistencia a Agua se vuelve 0%.`)
			break;
		case 16:
			enemy.res['earth'] = 0;
			Panel.addLine(`<br><span class="red">${enemy.name}</span> su resistencia a Tierra se vuelve 0%.`)
			break;
	}

	inventory.gear.consumable.uses[0]--;
	if (inventory.gear.consumable.uses[0] == 0) {
		Panel.addLine(`<br><span class="neutral">${inventory.gear.consumable.name}</span> se ha consumido.`);
		inventory.gear.consumable = null;
	}
	
	inventory.gearUpdate();
	enemy.update();
	player.update();
}