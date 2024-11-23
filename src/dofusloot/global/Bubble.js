import {itemData} from '../inventory/itemData.js';
import {setData} from '../inventory/setData.js';
import {textStat, descriptionStat} from '../../data/text.js';
import {inventory, shop, player} from '../game.js';
import {playSound} from '../../data/audio.js';
import {summonData} from '../player/summonData.js';

export class BubbleItem {
	constructor(father, data, origin) {
		this.father = father;
		this.data = data;
		this.origin = origin;
		this.container;
		this.create();
	}

	create() {
		this.container = document.createElement('div');
        this.container.id = 'bubble-item-container';
        this.father.appendChild(this.container);
        this.father.addEventListener('mouseout', ()=>this.destroy());

        this.itemName = document.createElement('div');
        this.itemName.className = 'bubble-item-name';
        this.container.appendChild(this.itemName);

        this.itemSet = document.createElement('div');
        this.itemSet.className = 'bubble-item-set';
        this.container.appendChild(this.itemSet);

        this.itemStatContainer = document.createElement('div');
		this.itemStatContainer.className = 'bubble-item-stat-container';
		this.container.appendChild(this.itemStatContainer);

		this.itemStat = document.createElement('div');
		this.itemStat.className = 'bubble-item-stat';
		this.itemStatContainer.appendChild(this.itemStat);

		this.itemLabel = document.createElement('div');
		this.container.appendChild(this.itemLabel);

        this.draw();
        if (this.data.typeId != 9 && this.data.typeId != 10) new BubbleSet(this.container, this.data.set);
	}

	draw() {
		playSound('itemHover', 'ui');
		this.itemName.innerHTML = this.data.name;
		
		if (this.data.typeId == 9) {
			this.itemSet.innerHTML = 'Consumible de combate';
			this.itemStat.innerHTML = `
				${this.data.description}
				<br><span class="neutral">Usos restantes: ${this.data.uses[0]} / ${this.data.uses[1]}.</span>
			`;

			switch(this.origin) {
			case 'bag':
				this.itemLabel.className = 'bubble-item-destroy';
				this.itemLabel.innerHTML = `Click derecho: Destruir`;
				break;
			case 'gear': 
				this.itemLabel.className = 'bubble-item-bonus';
				this.itemLabel.innerHTML = `Objeto solo utilizable en combate`;
				break;
			case 'shop':
				this.itemLabel.className = 'bubble-item-price';
				this.itemLabel.innerHTML = `${this.data.price} Kamas`;
				break;
			}

			return;
		} 	

		if (this.data.typeId == 10) {
			this.itemSet.innerHTML = 'Objeto usable';
			this.itemStat.innerHTML = `
				${this.data.description}
				<br><span class="neutral">Click para utilizar.</span>
			`;

			switch(this.origin) {
			case 'bag':
				this.itemLabel.className = 'bubble-item-destroy';
				this.itemLabel.innerHTML = `Click derecho: Destruir`;
				break;
			case 'shop':
				this.itemLabel.className = 'bubble-item-price';
				this.itemLabel.innerHTML = `${this.data.price} Kamas`;
				break;
			}
			return;
		} 		

		this.itemSet.innerHTML = this.data.set.name;

		if (this.data.typeId == 3) {
			Object.keys(this.data.power).forEach((key)=> {
				this.data.power[key].forEach((hit, indx)=> {	
					if (this.data.power[key][indx][2]) {
						this.itemStat.innerHTML += `<span class="${key}">Robo de ${this.data.power[key][indx][0]} a ${this.data.power[key][indx][1]} ${textStat[key]}</span><br>`;
					} else this.itemStat.innerHTML += `<span class="${key}">Daños de ${this.data.power[key][indx][0]} a ${this.data.power[key][indx][1]} ${textStat[key]}</span><br>`;
				})
			})
		} 		
		
		Object.keys(this.data.stat).forEach((key)=> {
			this.itemStat.innerHTML += `${this.data.stat[key]} ${textStat[key]} (${itemData[this.data.id].stat[key][0]} a ${itemData[this.data.id].stat[key][1]})<br>`;
		})
		
		Object.keys(this.data.exo).forEach((key)=> {
			this.itemStat.innerHTML += `<span class="yellow">${this.data.exo[key]} ${textStat[key]} </span><br>`;
		})
		
		switch(this.origin) {
			case 'reward':
				this.itemLabel.className = 'bubble-item-price';
				this.itemLabel.innerHTML = `¡Gratis!`;
				this.container.style.left = '40px';
				break;
			case 'bag':
				this.itemLabel.className = 'bubble-item-destroy';
				this.itemLabel.innerHTML = `Click derecho: <span class="neutral">Vender (${Math.floor(this.data.price/2)} Kamas)</span>`;
				break;
			case 'gear': 
				this.itemLabel.className = 'bubble-item-bonus';
				let indx = inventory.set.findIndex(set => set[0] === this.data.setId);
				this.itemLabel.innerHTML = `Bonus de set ${inventory.set[indx][1]}/${setData[this.data.setId].parts}`;
				break;
			case 'shop':
				this.itemLabel.className = 'bubble-item-price';
				this.itemLabel.innerHTML = `${this.data.price} Kamas`;
				break;
		}
	}

	destroy() { this.container.remove() }
}

class BubbleSet {
	constructor(father, data) {
		this.father = father;
		this.data = data;
		this.container;
		this.create();
	}

	create() {
		this.container = document.createElement('div');
        this.container.id = 'bubble-set-container';
       	this.container.style.bottom = '0px';
       	this.container.style.left = '225px'
        this.father.appendChild(this.container);

        this.setName = document.createElement('div');
        this.setName.className = 'bubble-set-name';
        this.container.appendChild(this.setName);

        this.setParts = document.createElement('div');
        this.setParts.className = 'bubble-set-parts';
        this.container.appendChild(this.setParts);

        this.setStatContainer = document.createElement('div');
		this.setStatContainer.className = 'bubble-set-stat-container';
		this.container.appendChild(this.setStatContainer);

		this.setStat = document.createElement('div');
		this.setStat.className = 'bubble-set-stat';
		this.setStatContainer.appendChild(this.setStat);

        this.draw();

        addEventListener("wheel", (event) => {
			this.setStatContainer.scrollTop += event.deltaY/5;
		});
	}

	draw() {
		let indx = inventory.set.findIndex(set => set[0] === this.data.id);
		let set = setData[this.data.id];

		this.setName.innerHTML = this.data.name;
		this.setParts.innerHTML = `Set de ${this.data.parts} partes`;
		this.setStat.innerHTML = ``;

		for (let i = 1; i < this.data.parts; i++) {
			this.setStat.innerHTML += `<span class="bubble-set-stat-part">${i+1} partes:</span><br>`;

			Object.keys(this.data.bonus).forEach((key)=> {
				if (this.data.bonus[key][i-1] != 0) {
					if (inventory.set[indx] != undefined) {
						if (inventory.set[indx][1]-1 == i) this.setStat.innerHTML += `<span class="bubble-set-equiped-bonus">${this.data.bonus[key][i-1]} ${textStat[key]}</span> <br>`;
						else this.setStat.innerHTML += `${this.data.bonus[key][i-1]} ${textStat[key]} <br>`;
					} else this.setStat.innerHTML += `${this.data.bonus[key][i-1]} ${textStat[key]} <br>`;
				}	
			})
		}
	}
}

export class BubbleStat {
	constructor(father, pos) {
		this.father = father;
		this.pos = pos;
		this.container;
		this.create();
	}

	create() {
		this.container = document.createElement('div');
        this.container.className = 'bubble-stat-container';
        this.father.appendChild(this.container);
        this.father.addEventListener('mouseout', ()=>this.destroy());
        this.draw();
        playSound('hover', 'ui')
	}

	draw() { this.container.innerHTML = `${Object.values(descriptionStat)[this.pos]}` }

	destroy() { this.container.remove() }
}

export class BubbleShop {
	constructor(father, btn) {
		this.father = father;
		this.btn = btn;
		this.container;
		this.create();
	}

	create() {
		this.container = document.createElement('div');
        this.container.className = 'bubble-shop-container';
        this.father.appendChild(this.container);
        this.father.addEventListener('mouseout', ()=>this.destroy());
        this.draw();
	}

	draw() { 
		switch(this.btn) {
			case 'reroll':
				this.container.style.left = '-230px';
				this.container.innerHTML = `Busca nuevos objetos a cambio de <span class="yellow">${shop.rerollPrice} Kamas</span>. 
											<br>El Precio aumenta por cada cambio.`;
				break;
			case 'lock': 
				this.container.style.left = '-20px';
				this.container.innerHTML = `Bloquea los objetos de la tienda para el siguiente combate.`;
				break;
		} 
	}

	destroy() { this.container.remove() }
}

export class BubbleSpell {
	constructor(father, data) {
		this.father = father;
		this.data = data;
		this.container;
		this.create();
	}

	create() {
		this.container = document.createElement('div');
        this.container.className = 'bubble-spell-container';
        this.father.appendChild(this.container);

        this.name = document.createElement('div');
        this.name.className = 'bubble-spell-name';
 		this.container.appendChild(this.name);

		this.description = document.createElement('div');
		this.description.className = 'bubble-spell-description';
		this.container.appendChild(this.description);

		this.damage = document.createElement('div');
		this.damage.className = 'bubble-spell-damage';
		this.container.appendChild(this.damage);

		this.cd = document.createElement('div');
		this.cd.className = 'bubble-spell-cd';
		this.container.appendChild(this.cd);

		this.uses = document.createElement('div');
		this.uses.className = 'bubble-spell-uses';
		this.container.appendChild(this.uses);

		this.cost = document.createElement('div');
		this.cost.className = 'bubble-spell-cost';
		this.container.appendChild(this.cost);

        this.father.addEventListener('mouseout', ()=>this.destroy());

        playSound('hover', 'ui')
        this.draw();
	}

	draw() { 
		this.name.innerHTML = `${this.data.name}`;
		this.description.innerHTML = `${this.data.description}`;
		if (this.data.source === 'weapon') this.cost.innerHTML = "Sin coste";
		else this.cost.innerHTML = `${this.data.cost[1]} ${this.data.cost[0].toUpperCase()}`;
		if (this.data.cd != undefined) this.cd.innerHTML = `Enfriamiento: ${this.data.cd[1]} turnos`;
		else this.cd.innerHTML = `Sin enfriamiento`;

		this.uses.innerHTML = `Usos por turno: ${this.data.uses[0]} / ${this.data.uses[1]}`;
		this.damage.innerHTML = "";

		if (this.data.source === 'weapon' && inventory.gear['weapon'] != undefined) {
			Object.keys(inventory.gear['weapon'].power).forEach((key)=>{
				inventory.gear['weapon'].power[key].forEach((value)=> {
					if (!value[2]) this.damage.innerHTML += `Daños de ${value[0]} a ${value[1]} ${textStat[key]}<br>`;
					else this.damage.innerHTML += `Robo de ${value[0]} a ${value[1]} ${textStat[key]}<br>`;
				})
			})
		}

		else if (this.data.power != undefined) {
			Object.keys(this.data.power).forEach((key)=>{
				this.data.power[key].forEach((value)=> {
					if (!value[2]) {
						if (this.data.id == 62 && player != undefined) this.damage.innerHTML += 
							`Daños de ${value[0] + (3 * player.effect.activatedTraps)} a ${value[1] + (3 * player.effect.activatedTraps)} ${textStat[key]}<br>`;
						else if (this.data.powerBuff != null && this.data.powerBuff[0] > 0) 
							this.damage.innerHTML += `Daños de ${value[0] + this.data.powerBuff[0]} a ${value[1] + this.data.powerBuff[0]} ${textStat[key]}<br>`;
						else this.damage.innerHTML += `Daños de ${value[0]} a ${value[1]} ${textStat[key]}<br>`;
					} else {
						if (this.data.powerBuff != null && this.data.powerBuff[0] > 0) 
							this.damage.innerHTML += `Robo de ${value[0] + this.data.powerBuff[0]} a ${value[1] + this.data.powerBuff[0]} ${textStat[key]}<br>`;
						else this.damage.innerHTML += `Robo de ${value[0]} a ${value[1]} ${textStat[key]}<br>`;
					}		
				})
			})
			if (this.data.otherDescription != null) this.damage.innerHTML += this.data.otherDescription;
		}

		if (this.data.powerHeal != undefined) {
			Object.keys(this.data.powerHeal).forEach((key)=>{
				this.data.powerHeal[key].forEach((value)=> {
						this.damage.innerHTML += `Curación de ${value[0]} a ${value[1]} ${textStat[key]}<br>`;
							
				})
			})
		}
	}

	destroy() { this.container.remove() }
}


export class BubbleEnemyAction {
	constructor(father, enemy, pos) {
		this.father = father;
		this.enemy = enemy;
		this.pos = pos;
		this.container;
		this.create();
	}

	create() {	
		this.container = document.createElement('div');
        this.container.className = 'bubble-enemy-action-container';
        this.father.appendChild(this.container);

		this.description = document.createElement('div');
		this.description.className = 'bubble-enemy-action-description';
		this.container.appendChild(this.description);

        this.father.addEventListener('mouseout', ()=> this.destroy());
        this.draw();
	}

	draw() {
		switch(this.enemy.action[this.pos].type) { 
			case 'attack':
				this.description.innerHTML = `${this.enemy.name} tiene intención de atacar en su siguiente turno.`;
				break;
			case 'lifeSteal':
				this.description.innerHTML = `${this.enemy.name} tiene intención de robar salud en su siguiente turno.`;
				break;
			case 'heal':
				this.description.innerHTML = `${this.enemy.name} tiene intención de regenerar salud en su siguiente turno.`;
				break;
			case 'shield':
				this.description.innerHTML = `${this.enemy.name} tiene intención de regenerar escudo en su siguiente turno.`;
				break;
			case 'spikes':
				this.description.innerHTML = `${this.enemy.name} renviará un ${this.enemy.action[this.pos].power}% de los daños recibidos.`;
				break;
			case 'retPa':
				this.description.innerHTML = `${this.enemy.name} tiene intención de retirar PA en su siguiente turno.`;
				break;
			case 'retPm':
				this.description.innerHTML = `${this.enemy.name} tiene intención de retirar PM en su siguiente turno.`;
				break;
			case 'drop':
				this.description.innerHTML = `${this.enemy.name} te otorgará un objeto tras derrotarlo si hay hueco en el inventario.`;
				break;
			case 'dropExo':
				this.description.innerHTML = `${this.enemy.name} te otorgará un objeto exomágico tras derrotarlo si hay hueco en el inventario.`;
				break;
			case 'dropConsumable':
				this.description.innerHTML = `${this.enemy.name} te otorgará un objeto consumible tras derrotarlo si hay hueco en el inventario.`;
				break;
			case 'dropUsable':
				this.description.innerHTML = `${this.enemy.name} te otorgará un objeto usable tras derrotarlo si hay hueco en el inventario.`;
				break;
			case 'stealKamas':
				this.description.innerHTML = `${this.enemy.name} quiere robarte tus Kamas.`;
				break;
			case 'burn':
				this.description.innerHTML = `${this.enemy.name} sufrirá Daños de 1 a 4 Fuego al inicio de cada turno.`;
				break;
			case 'arsenic':
				this.description.innerHTML = `${this.enemy.name} sufrirá Daños de ${this.enemy.arsenic*1} a ${this.enemy.arsenic*2} Aire al inicio de cada turno.`;
				break;
			case 'antiheal':
				this.description.innerHTML = `${this.enemy.name} no puede curarse (${this.enemy.incurable} curas restantes).`;
				break;
			case 'dmgUp':
				this.description.innerHTML = `${this.enemy.name} va a aumentar sus daños en su siguiente turno.`;
				break;
			case 'debuff':
				this.description.innerHTML = `${this.enemy.name} va a mermar tus estadísticas en su siguiente turno.`;
				break;
			case 'fury':
				this.description.innerHTML = `${this.enemy.name} aumentará su ataque al recibir daño.`;
				break;
			case 'poison':
				this.description.innerHTML = `${this.enemy.name} va a expulsar veneno en su siguiente turno.`;
				break;
			case 'trap':
				Object.keys(this.enemy.traps).forEach((trap) => {
					this.description.innerHTML += `x${this.enemy.traps[trap].n} <span class="${this.enemy.traps[trap].element}">${this.enemy.traps[trap].name}</span>. `
				})		
				break;
			case 'paralysingPoison':
				this.description.innerHTML = `${this.enemy.name} sufrirá Daños de 12 a 15 Fuego al inicio de cada turno.`;
				break;
			case 'poisonedWind':
				if (!this.enemy.paralysingPoison) this.description.innerHTML = `${this.enemy.name} bajará 8% su resistencia a Aire cuando llegue su turno.`;
				else this.description.innerHTML = `${this.enemy.name} bajará 8% su resistencia a Aire y Fuego cuando llegue su turno.`;
				break;
			case 'desblopizacion':
				this.description.innerHTML = `Desblopización: Al inicio del combate, reduce 15% todas sus resistencias por cada parte de set Blop equipada.`;
				break;
			case 'pestilenciaDragocerdo':
				this.description.innerHTML = `Pestilencia del Dragocerdo: Causa 5 de daño cada PA usado.`;
				break;
			case 'rabiaMaxilubo':
				this.description.innerHTML = `Rabia de Maxilubo: Cuando su salud es inferior al 20%, se cura el daño causado.`;
				break;
			case 'reconstitucionAncestral':
				this.description.innerHTML = `Reconstitución Ancestral: Regenera un 25% de su salud máxima si el jugador utiliza PM.`;
				break;
			case 'raspadura':
				this.description.innerHTML = `Raspadura: Al recibir daño gana 10% de resistencia al mismo elemento, pero reduce 5% las demás.`;
				break;
			case 'kakemata':
				this.description.innerHTML = `Kakemata: Sus daños oscilan entre 1 y 999.`;
				break;
			case 'caparazonAlas':
				this.description.innerHTML = `Caparazón Alas: Reenvía el 100% del primer golpe cada turno, aunque también recibe el daño.`;
				break;
			case 'despedazamiento':
				this.description.innerHTML = `Despedazamiento: Puede retirar 1 PM al recibir un golpe.`;
				break;
			case 'palabraRevigorizante':
				this.description.innerHTML = `Palabra revigorizante: Recupera 1% de su salud máxima por cada acción del jugador.`;
				break;
		}
	}

	destroy() { this.container.remove() }
}

export class BubbleDofam {
	constructor(father, data, type) {
		this.father = father;
		this.data = data;
		this.type = type;
		this.container;
		this.create();
	}

	create() {
		this.container = document.createElement('div');
        this.container.id = 'bubble-item-container';
        this.father.appendChild(this.container);
        this.father.addEventListener('mouseout', ()=>this.destroy());

        this.itemName = document.createElement('div');
        this.itemName.className = 'bubble-item-name';
        this.container.appendChild(this.itemName);

        this.itemSet = document.createElement('div');
        this.itemSet.className = 'bubble-item-set';    
        this.container.appendChild(this.itemSet);  

        this.itemStatContainer = document.createElement('div');
		this.itemStatContainer.className = 'bubble-item-stat-container';
		this.container.appendChild(this.itemStatContainer);

		this.itemStat = document.createElement('div');
		this.itemStat.className = 'bubble-item-stat';
		this.itemStatContainer.appendChild(this.itemStat);

		this.itemLabel = document.createElement('div');
		this.itemLabel.className = 'bubble-item-destroy';
		this.container.appendChild(this.itemLabel);

        this.draw();
	}

	draw() {
		playSound('itemHover', 'ui');
		this.itemName.innerHTML = this.data.name;
		
		
		Object.keys(this.data.stat).forEach((key)=> {
			this.itemStat.innerHTML += `${this.data.stat[key]} ${textStat[key]}<br>`;
		})

		switch(this.type) {
			case 'familiar':
				this.itemSet.innerHTML = 'Se alimenta de los enemigos'
				this.itemLabel.innerHTML = `${this.data.name} tiene sed de sangre`;
			break;
			case 'stash':
				this.itemSet.innerHTML = 'Tiene un brillo especial'
				this.itemLabel.innerHTML = `No se puede desequipar`;
			break;
			case 'preStash':
				this.itemSet.innerHTML = 'Tiene un brillo especial'
				this.itemLabel.innerHTML = `No se podrá desequipar`;
			break;
		}
	}

	destroy() { this.container.remove() }
}

export class BubbleName {
	constructor(father, text) {
		this.father = father;
		this.text = text;
		this.container;
		this.create();
	}

	create() {
		this.container = document.createElement('div');
        this.container.className = 'bubble-name-container';
        this.father.appendChild(this.container);
        this.father.addEventListener('mouseout', ()=> this.destroy());

        this.name = document.createElement('div');
        this.name.className = 'bubble-name-name';
        this.container.appendChild(this.name);

        this.draw();
	}

	draw() {
		playSound('itemHover', 'ui');
		this.name.innerHTML = this.text;
	}

	destroy() { this.container.remove() }
}

export class BubbleFamiliarNG {
	constructor(father, fam) {
		this.father = father;
		this.fam = fam;
		this.container;
		this.create();
	}

	create() {
		this.container = document.createElement('div');
        this.container.className = 'bubble-familiar-ng-container';
        this.father.appendChild(this.container);
        this.father.addEventListener('mouseout', ()=> this.destroy());

        this.text = document.createElement('div');
        this.text.className = 'bubble-familiar-ng-text';
        this.container.appendChild(this.text);

        this.draw();
	}

	draw() {
		playSound('itemHover', 'ui');
		this.text.innerHTML = this.fam.shortDescription;
	}

	destroy() { this.container.remove() }
}


export class BubbleSummon {
	constructor(father, data) {
		this.father = father;
		this.data = data;
		this.container;
		this.create();
	}

	create() {
		this.container = document.createElement('div');
        this.container.className = 'bubble-summon-container';
        this.father.appendChild(this.container);

        this.name = document.createElement('div');
        this.name.className = 'bubble-summon-name';
 		this.container.appendChild(this.name);

		this.description = document.createElement('div');
		this.description.className = 'bubble-summon-description';
		this.container.appendChild(this.description);

		this.activation = document.createElement('div');
		this.activation.className = 'bubble-summon-activation';
		this.container.appendChild(this.activation);

        this.father.addEventListener('mouseout', ()=> this.destroy());
        this.draw();
	}

	draw() { 
		this.name.innerHTML = `${this.data.name}`;
		this.description.innerHTML = `${this.data.description}`;
		
		switch(this.data.activation) {
			case 'onRerollShop':
				this.activation.innerHTML = `Activación: Al refrescar la tienda.`;
			break
			case 'onGetItem':
				this.activation.innerHTML = `Activación: Al obtener un objeto.`;
			break
			case 'onCriticalHit':
				this.activation.innerHTML = `Activación: Al ocasionar un crítico.`;
			break
			case 'onBramble':
				this.activation.innerHTML = `Activación: Al usar Zarza.`;
			break
			case 'onTurnStart':
				this.activation.innerHTML = `Activación: Al empezar tu turno.`;
			break
			default:
				this.activation.innerHTML = `Activación: ${this.data.activation} PM`;
			break;
		}

		if (this.data.id == 11) this.description.innerHTML += 
			`<br><br <span class="earth">Daño actual de ${summonData.sismobomba.attack.bonus[0]} a ${1 + summonData.sismobomba.attack.bonus[0]} Tierra</span>.`
		if (this.data.id == 12) this.description.innerHTML += 
			`<br><br <span class="fire">Daño actual de ${summonData.explobomba.attack.bonus[0]} a ${1 + summonData.explobomba.attack.bonus[0]} Fuego</span>.`
		if (this.data.id == 13) this.description.innerHTML += 
			`<br><br <span class="air">Daño actual de ${summonData.tornabomba.attack.bonus[0]} a ${1 + summonData.tornabomba.attack.bonus[0]} Aire</span>.`
		if (this.data.id == 14) this.description.innerHTML += 
			`<br><br <span class="water">Daño actual de ${summonData.hidrobomba.attack.bonus[0]} a ${1 + summonData.hidrobomba.attack.bonus[0]} Agua</span>.`
	}

	destroy() { this.container.remove() }
}