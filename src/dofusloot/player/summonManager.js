import {inventory, player, enemy, shop, location} from '../game.js';
import {Panel} from '../global/Panel.js';
import {itemData} from '../inventory/itemData.js';
import {Item} from '../inventory/Item.js';
import {summonData} from './summonData.js';
import {playSound} from '../../data/audio.js'
import * as uiPanel from '../ui/panel.js';

export function callSummon(spell) {
	let summon = spell.summon;
	let summonPos = player.summon.length

	uiPanel.summonImage[summonPos].style.backgroundImage = `url("${summon.image}")`;
	player.summon[summonPos] = summon;

	player.summonUpdate();
}

export function summonAction(summon) {
	if (summon.audio != undefined) playSound(summon.audio, 'sfx')
	switch(summon.effect) {
		case 'attack': 
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> lanza <span class="neutral">${summon.attack.name}</span>.`);
			attackFormula(summon); 
		break;
		case 'heal': 
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> lanza <span class="neutral">${summon.attack.name}</span>.`);
			healFormula(summon); 
		break;
		case 'digUp': 
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> lanza <span class="neutral">Excavación</span>`);
			shop.newStock();
			let n = Math.floor(Math.random()*10);
			if (n == 0 && inventory.bag.length < 20) {
				let min = location.zone.itemPool[0];
				let max = location.zone.itemPool[1];
				let n = Math.floor(Math.random() * (max - min + 1)) + min;
				let item = new Item(itemData[n]);
				shop.tryExo(item);
				inventory.obtainItem(item)
				Panel.addLine(`<br><span class="yellow">${summon.name}</span> ha desenterrado ${item.name}.`);
			}
		break;
		case 'armor':
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> lanza <span class="neutral">${summon.attack.name}</span>.`);
			armorFormula(summon); 
		break
		case 'inflatable':
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> lanza <span class="neutral">Soplo primaveral</span>`);
			player.changePM(1);
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> obtiene <span class="green">1 PM</span>.`);
			healFormula(summon); 
			break;
		case 'cunejo':
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> lanza <span class="neutral">${summon.attack.name}</span>`);
			player.stat.cur[0] += 2;
			Panel.addLine(`<br><span class="yellow"> ${player.name}</span> +2 Curas.`);
			healFormula(summon); 
			break;
		case 'madoll': 
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> lanza <span class="neutral">Molestia</span>.`);
			Panel.addLine(`<br><span class="red"> ${enemy.name}</span> -2% resistencia <span class="air">(Aire)</span>.`);
			enemy.res.air -= 2;
			enemy.update();
		break;
		case 'sacrificialDoll': 
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> lanza <span class="neutral">${summon.attack.name}</span>.`);
			let baseBuff = 11 * (player.summon.length - 1);
			let base = Math.floor(Math.random() * ((summon.attack.power[1] + baseBuff) - (summon.attack.power[0] + baseBuff) + 1)) + (summon.attack.power[0] + baseBuff);
			let pureDmg = Math.floor((base * (1 + ((player.stat.cha[0] + player.stat.pot[0]) / 100))) + (player.stat.chaDmg[0] + player.stat.dmg[0]));
			let realDmg = Math.floor(pureDmg - (pureDmg * enemy.res[summon.attack.element] / 100));
			enemy.getDamaged(realDmg, summon.attack.element, {name: 'indirect'});
			player.summonDestroy();
			Panel.addLine(`<br> Mueren todas tus invocaciones.`);
		break;
		case 'bombCharge': 
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> lanza <span class="neutral">${summon.attack.name}</span>.`);
			Panel.addLine(`<br><span class="yellow">${summon.name}</span> Aumenta sus daños.`);
			if (summon.id == 11) summonData.sismobomba.attack.bonus[0] += 1;
			if (summon.id == 12) summonData.explobomba.attack.bonus[0] += 1;
			if (summon.id == 13) summonData.tornabomba.attack.bonus[0] += 1;
			if (summon.id == 14) summonData.hidrobomba.attack.bonus[0] += 1;
			if (summonData.sismobomba.attack.bonus[0] > 39) summonData.sismobomba.attack.bonus[0] = 39;
			if (summonData.explobomba.attack.bonus[0] > 39) summonData.explobomba.attack.bonus[0] = 39;
			if (summonData.tornabomba.attack.bonus[0] > 39) summonData.tornabomba.attack.bonus[0] = 39;
			if (summonData.hidrobomba.attack.bonus[0] > 39) summonData.hidrobomba.attack.bonus[0] = 39;
		break;
	}
}

function attackFormula(summon) {
	let pureDmg;
	let realDmg;
	let base = Math.floor(Math.random() * (summon.attack.power[1] - summon.attack.power[0] + 1)) + summon.attack.power[0];

	switch (summon.attack.element) {
	  	case 'earth':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.str[0] + player.stat.pot[0]) / 100))) + (player.stat.strDmg[0] + player.stat.dmg[0]));
	    	break;
	  	case 'fire':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.int[0] + player.stat.pot[0]) / 100))) + (player.stat.intDmg[0] + player.stat.dmg[0]));
	    	break;
	  	case 'air':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.agi[0] + player.stat.pot[0]) / 100))) + (player.stat.agiDmg[0] + player.stat.dmg[0]));
	    	break;
	  	case 'water':
	    	pureDmg = Math.floor((base * (1 + ((player.stat.cha[0] + player.stat.pot[0]) / 100))) + (player.stat.chaDmg[0] + player.stat.dmg[0]));
	    	break;
	}

	realDmg = Math.floor(pureDmg - (pureDmg * enemy.res[summon.attack.element] / 100));
	enemy.getDamaged(realDmg, summon.attack.element, {name: 'indirect'});
}

function healFormula(summon) {
	let base = Math.floor(Math.random() * (summon.attack.power[1] - summon.attack.power[0] + 1)) + summon.attack.power[0];

	switch (summon.attack.element) {
	  	case 'earth':
	    	base = Math.floor((base * (1 + ((player.stat.str[0]) / 100))) + (player.stat.cur[0]));
	    	break;
	  	case 'fire':
	    	base = Math.floor((base * (1 + ((player.stat.int[0]) / 100))) + (player.stat.cur[0]));
	    	break;
	  	case 'air':
	    	base = Math.floor((base * (1 + ((player.stat.agi[0]) / 100))) + (player.stat.cur[0]));
	    	break;
	  	case 'water':
	    	base = Math.floor((base * (1 + ((player.stat.cha[0]) / 100))) + (player.stat.cur[0]));
	    	break;
	}

	player.getHealed(base);
}

function armorFormula(summon) {
	if (summon.attack.shield[1] == 'per') {
		player.getArmored(Math.ceil((player.stat.arm[1] * summon.attack.shield[0])/100));
	} else if (summon.attack.shield[1] == 'fix') {
		return;
	}
}