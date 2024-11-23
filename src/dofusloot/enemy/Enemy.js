import * as uiBattle from '../ui/battle.js';
import {textStat} from '../../data/text.js';
import {player, inventory, familiar} from '../game.js';
import {Panel} from '../global/Panel.js';
import {Battle} from '../global/Battle.js';
import {itemData} from '../inventory/itemData.js';
import {usableData} from '../inventory/usableData.js';
import {consumableData} from '../inventory/consumableData.js';
import {Item} from '../inventory/Item.js';
import {Usable} from '../inventory/Usable.js';
import {Consumable} from '../inventory/Consumable.js';
import {NumberAnim} from '../animation/NumberAnim.js';
import {statusData} from './statusData.js';
import {playSound} from '../../data/audio.js';
import {checkAchievement} from '../../global/achievementManager.js';

export class Enemy {
    constructor(enemyData) {this.new(enemyData)}

    new(enemyData) {
        this.data = JSON.parse(JSON.stringify(enemyData));
        this.name = this.data.name;
        this.img = this.data.img;
        this.health = this.data.health;
        this.armor = this.data.armor;
        this.res = this.data.res;
        this.dmg = this.data.dmg;
        this.ogrinas = this.data.ogrinas;
        this.gold = Math.floor(this.data.gold * (1 + ((Math.random() * (2 * 0.3)) - 0.3)));
        this.action = this.data.action;
        this.drop = this.data.drop;
        this.dropExo = this.data.dropExo;
        this.dropConsumable = this.data.dropConsumable;
        this.dropUsable = this.data.dropUsable;
        this.isBoss = this.data.isBoss;
        this.aura = this.data.aura;
        this.isBurned = false;
        this.arsenic = 0;
        this.incurable = 0;
        this.traps = {};
        this.paralysingPoison = false;
        this.poisonedWind = false;
        this.create(); 
        Battle.status = 'not-started';
    }

    create() {
        uiBattle.enemyName.innerHTML = this.name.toUpperCase();
        uiBattle.enemyImage.style.backgroundImage = `url("${this.img}")`;

        uiBattle.action.forEach((action) => {
            action.style.display = "none";
        })

        Object.values(this.action).forEach((action, indx) => this.setActionIcon(action, indx));

        this.update();
        Panel.deleteAll();
        Panel.addLine(`Aparece un <span class="red">${this.name}</span> enemigo.`)
        Panel.addLine(`<br>Prepara tu equipamiento antes del combate.`)
    }

    setActionIcon(action, indx) {
        uiBattle.action[indx].style.display = "block";
        uiBattle.action[indx].style.backgroundImage = `url("${statusData[action.type].image}")`
    }

    addAction(act) {
        let n = Object.keys(this.action).length;
        this.action[n] = act;
        Object.values(this.action).forEach((action, indx) => this.setActionIcon(action, indx));
    }

    removeAction(act) {
        for (let key in this.action) {
            let action = this.action[key];
            let isMatch = Object.keys(act).every(
                prop => act[prop] === action[prop]
            );

            if (isMatch) {
                delete this.action[key]
                uiBattle.action[key].style.display = "none";
            }
        }
    }

    update() {
        uiBattle.healthLabel.innerHTML = `${this.health[0]}/${this.health[1]}`;
        uiBattle.armorLabel.innerHTML = `${this.armor[0]}/${this.armor[1]}`;

        uiBattle.healthBar.style.width = `${this.health[0] / this.health[1] * 100}%`;
        uiBattle.armorBar.style.width = `${this.armor[0] / this.armor[1] * 100}%`;

        Object.values(this.res).forEach((res, indx) => uiBattle.resisLabel[indx].innerHTML = `${res}%`);
    }

    getDamaged(value, element, damageEffect) {
        if (this.health[0] == 0) return;
        if (damageEffect == null) damageEffect = {};

        if (value <= 0) value = 0;

        let totalDamage = value;
        let remeaningDamage = value;
        let armorDamage = null;

        if (totalDamage == 0) Panel.addLine(`<br><span class="red"> ${this.name}</span> enemigo no sufre daños.`);

        new NumberAnim(totalDamage, element);

        if (damageEffect.name == 'antiheal') {
            if (this.incurable > 0) {
                this.incurable += damageEffect.stack;
                Panel.addLine(`<br><span class="red"> ${this.name}</span> sigue incurable.`); 
            } else {
                this.addAction({ type: 'antiheal', active: false }); 
                this.incurable += damageEffect.stack;
                Panel.addLine(`<br><span class="red"> ${this.name}</span> entra en el estado incurable.`); 
            }
        }

        if (damageEffect.name == 'burn' && !this.isBurned) {
            this.addAction({ type: 'burn', active: false });
            this.isBurned = true;   
            Panel.addLine(`<br><span class="red"> ${this.name}</span> arde en llamas.`); 
        }

        if (damageEffect.name == 'retireBurn' && this.isBurned) {
            this.removeAction({type: 'burn', active: false});
            this.isBurned = false;    
            Panel.addLine(`<br><span class="red"> ${this.name}</span> ya no está quemado.`);
        }

        if (this.armor[0] > 0 && damageEffect.name !== 'armorPen') {
            let iArm = this.armor[0];
            remeaningDamage = totalDamage - this.armor[0];
            this.armor[0] -= totalDamage;
            if (this.armor[0] < 0) this.armor[0] = 0;
            armorDamage =  iArm - this.armor[0];
            Panel.addLine(`<br><span class="red"> ${this.name}</span> enemigo sufre <span class="grey">-${armorDamage} PDE</span> <span class="${element}">(${textStat[element]})</span>.`)
        }

        if (remeaningDamage > 0) {
            this.health[0] -= remeaningDamage;
            Panel.addLine(`<br><span class="red"> ${this.name}</span> enemigo sufre <span class="${element}">-${remeaningDamage} PDV (${textStat[element]})</span>.`);
        }

        if (damageEffect.name === 'powerBuff') Panel.addLine(`<br>Aumentarón los daños del hechizo.`)
            
        if (this.health[0] <= 0) {
            this.health[0] = 0;
            this.die();
        } else {
            if (damageEffect.name != 'indirect') {
                for (let key in this.action) {
                    if (this.action[key].type === 'caparazonAlas') this.caparazonAlas(totalDamage);
                    if (this.action[key].type === 'fury') this.fury(key);
                    if (this.action[key].type === 'spikes') this.spikes(key, totalDamage);
                    if (this.action[key].type === 'raspadura') this.raspadura(element);
                    if (this.action[key].type === 'despedazamiento') this.despedazamiento();
                }    
            }
        }

        if (damageEffect.name === 'erosion') { 
            this.health[1] -= Math.floor(value/2);
            if (this.health[1] < 1) this.health[1] = 1;
            if (this.health[0] > this.health[1]) this.health[0] = this.health[1];
            Panel.addLine(`<br>El ataque redució la vida máxima de <span class="red">${this.name}</span>.`)
        }

        this.update();
    }

    getHealed(value) {
        this.health[0] += value;
        if (this.health[0] > this.health[1]) this.health[0] = this.health[1];
        Panel.addLine(`<br><span class="yellow">${this.name}</span> ha recuperado <span class="green">${value} PDV</span>.`);
        this.update();
    }

    getShielded(value) {
        this.armor[0] += value;
        if (this.armor[0] > this.armor[1]) this.armor[0] = this.armor[1];
        Panel.addLine(`<br><span class="yellow">${this.name}</span> ha recuperado <span class="grey">${value} PDE</span>.`);
        this.update();
    }

    doAction(action) {
        switch(action.type) {
            case 'attack':
                playSound('enemyattack', 'sfx');
                Panel.addLine(`<br><span class="red"> ${this.name}</span> lanza su ataque.`);
                for (let i = 0; i < action.hits; i++) {
                    let pureDmg = Math.floor(Math.random() * (action.power[1] - action.power[0] + 1)) + action.power[0] + this.dmg;
                    let res = player.stat.res[0];
                    if (res > 50) res = 50;
                    let realDamage = Math.floor(pureDmg - (pureDmg * res / 100));
                    player.getDamaged(realDamage);

                    if (player.stat.reDmg[0] > 0) {
                        let re = Math.ceil(realDamage * player.stat.reDmg[0] / 100); 
                        Panel.addLine(`<br><span class="yellow"> ${player.name}</span> reenvia <span class="red">${re}</span> daños.`);
                        this.getDamaged(re, 'neutral', {name: 'indirect'})
                    }

                    if (this.aura.rabiaMaxilubo && (this.health[0] < this.health[1] * 0.2)) {
                        Panel.addLine(`<br><span class="red"> ${this.name}</span> se cura por su sed de sangre.`);
                        this.getHealed(Math.floor(realDamage));
                    }
                }
                break;
            case 'lifeSteal':
                playSound('enemylifesteal', 'sfx');
                Panel.addLine(`<br><span class="red"> ${this.name}</span> lanza su ataque.`);
                for (let i = 0; i < action.hits; i++) {
                    let pureDmg = Math.floor(Math.random() * (action.power[1] - action.power[0] + 1)) + action.power[0] + this.dmg;
                    let res = player.stat.res[0];
                    if (res > 50) res = 50;
                    let realDamage = Math.floor(pureDmg - (pureDmg * res / 100));
                    player.getDamaged(realDamage);
                    this.getHealed(Math.floor(realDamage/2));
                }
                break;
            case 'heal':
                playSound('enemyheal', 'sfx');
                for (let i = 0; i < action.hits; i++) {
                    if (this.incurable > 0) {
                        Panel.addLine(`<br><span class="red"> ${this.name}</span> intenta curarse pero no puede.`);
                        this.incurable--;
                        if (this.incurable == 0) {
                            this.removeAction({type: 'antiheal', active: false});
                            Panel.addLine(`<br><span class="red"> ${this.name}</span> sale del estado incurable.`);
                        }
                    } else {
                    if (this.health[0] == this.health[1]) Panel.addLine(`<br><span class="red"> ${this.name}</span> amaga con curarse.`);
                    else {
                        Panel.addLine(`<br><span class="red"> ${this.name}</span> realiza una curación.`);
                            let heal = Math.floor(Math.random() * (action.power[1] - action.power[0] + 1)) + action.power[0];
                            this.getHealed(heal)
                        } 
                    }
                }
                break;
            case 'shield':
                playSound('enemyshield', 'sfx');
                Panel.addLine(`<br><span class="red"> ${this.name}</span> regenera su escudo.`);
                for (let i = 0; i < action.hits; i++) {
                    let shield = Math.floor(Math.random() * (action.power[1] - action.power[0] + 1)) + action.power[0];
                    this.getShielded(shield)
                }
                break;
            case 'retPa':
                playSound('enemyretire', 'sfx');
                for (let i = 0; i < action.hits; i++) {
                    Panel.addLine(`<br><span class="red"> ${this.name}</span> prueba a retirar <span class="blue">PA</span>.`);
                    let pa = Math.floor(Math.random() * (action.power[1] - action.power[0] + 1)) + action.power[0];
                    if (pa > 0 ) Panel.addLine(`<br><span class="yellow"> ${player.name}</span> <span class="blue">-${pa}PA</span>.`);
                    else Panel.addLine(`<br>Pero no consigue retirar ningun PA.`);
                    player.changePA(-pa);
                }
                break;
            case 'retPm':
                playSound('enemyretire', 'sfx');
                for (let i = 0; i < action.hits; i++) {
                    Panel.addLine(`<br><span class="red"> ${this.name}</span> prueba a retirar <span class="green">PM</span>.`);
                    let pm = Math.floor(Math.random() * (action.power[1] - action.power[0] + 1)) + action.power[0];
                    if (pm > 0 ) Panel.addLine(`<br><span class="yellow"> ${player.name}</span> <span class="green">-${pm}PM</span>.`);
                    else Panel.addLine(`<br>Pero no consigue retirar ningun PM.`);
                    player.changePM(-pm);
                }
                break;
            case 'stealKamas':
                playSound('monedasonante', 'sfx');
                let steal = Math.floor(Math.random() * (action.power[1] - action.power[0] + 1)) + action.power[0];
                Panel.addLine(`<br><span class="red"> ${this.name}</span> te ha robado <span class="yellow">${steal} Kamas</span>.`);
                player.changeGold(-steal);               
                break;
            case 'fury':
            case 'dmgUp':
                if (action.type === 'dmgUp') playSound('enemydmgup', 'sfx');
                let dmgUp = Math.floor(Math.random() * (action.power[1] - action.power[0] + 1)) + action.power[0];
                Panel.addLine(`<br><span class="red"> ${this.name}</span> aumenta su daño.`);
                this.dmg += dmgUp;             
                break;
            case 'debuff':
                playSound('enemydebuff', 'sfx');
                Panel.addLine(`<br><span class="red"> ${this.name}</span> aplica sus mermas.`);
                action.stat.forEach((stat, i) => {
                    player.stat[stat][0] += action.value[i];
                    Panel.addLine(`<br><span class="red"> ${player.name}</span> ${action.value[i]} ${textStat[stat]}.`);
                })            
                break;
            case 'poison':
                playSound('enemypoison', 'sfx');
                if (player.effect.poison == 0) Panel.addLine(`<br><span class="red"> ${this.name}</span> te ha envenenado.`);
                else Panel.addLine(`<br><span class="red"> ${this.name}</span> continua acumulando venenos.`);
                player.effect.poison += Math.floor(Math.random() * (action.power[1] - action.power[0] + 1)) + action.power[0];        
                break;
        }
    }

    die() {
        Panel.addLine(`<br><span class="red"> ${this.name}</span> ha muerto.`);
        if (this.drop != undefined && inventory.bag.length < 20) this.dropItem();
        if (this.dropExo != undefined && inventory.bag.length < 20) this.dropItem(true);
        if (this.dropConsumable != undefined && inventory.bag.length < 20) this.dropItemConsumable();
        if (this.dropUsable != undefined && inventory.bag.length < 20) this.dropItemUsable();
        familiar.defeatEnemy(this);
        Battle.end();

        if (this.isBoss) checkAchievement(this.data.bossId);
    }

    dropItemUsable() {
        let indx;
        let usable;
        indx = this.dropUsable[Math.floor(Math.random() * this.dropUsable.length)];
        usable = new Usable(usableData[indx]);

        inventory.obtainItem(usable);
        Panel.addLine(`<br><span class="red"> ${this.name}</span> ha dejado caer el consumible <span class="yellow">${usable.name}</span>.`);
    }

    dropItemConsumable() {
        let indx;
        let consumable;
        indx = this.dropConsumable[Math.floor(Math.random() * this.dropConsumable.length)];
        consumable = new Consumable(consumableData[indx]);

        inventory.obtainItem(consumable);
        Panel.addLine(`<br><span class="red"> ${this.name}</span> ha dejado caer el consumible <span class="yellow">${consumable.name}</span>.`);
    }

    dropItem(exo = false) {
        let indx;
        let item;
        if (exo) {
            indx = this.dropExo[Math.floor(Math.random() * this.dropExo.length)];
            item = new Item(itemData[indx]);
            item.getExo()
        } else {
            indx = this.drop[Math.floor(Math.random() * this.drop.length)];
            item = new Item(itemData[indx]);
        } 
        inventory.obtainItem(item);
        Panel.addLine(`<br><span class="red"> ${this.name}</span> ha dejado caer el objeto <span class="yellow">${item.name}</span>.`);
    }

    spikes(key, dmg) {
        Panel.addLine(`<br><span class="red"> ${this.name}</span> devuelve parte del daño recibido.`);
        let damage = Math.floor(dmg * (this.action[key].power/100));
        return player.getDamaged(damage);
    }

    caparazonAlas(dmg) {
        if (!this.aura.caparazonAlas) return;
        Panel.addLine(`<br><span class="red"> ${this.name}</span> devuelve el daño recibido y pierde su caparazón.`);
        this.aura.caparazonAlas = false;
        return player.getDamaged(dmg);
    }

    fury(key) { this.doAction(this.action[key]) }

    raspadura(element) {
        Panel.addLine(`<br><span class="red"> ${this.name}</span> altera sus resistencias.`);
        Object.keys(this.res).forEach((key)=> this.res[key] -= 5)
        this.res[element] += 15;
        this.update();
    }

    despedazamiento() {
        let n = Math.floor(Math.random()*3);
        if (n == 0 && player.stat.pm[0] > 0) {
            Panel.addLine(`<br><span class="yellow"> ${player.name}</span> pierde <span class="green">1 PM</span> a causa de <span class="neutral">Despedazamiento</span>.`);
            player.changePM(-1)
        }
    }

    addTrap(trap) {
        if (Object.keys(this.traps).length === 0) {
            this.addAction({ type: 'trap', active: false });
        }

        for (const key in this.traps) {
            if (JSON.stringify(this.traps[key]) === JSON.stringify(trap)) {
                this.traps[key].n ++;
                return true; 
            }
        }

        const newKey = `trap${Object.keys(this.traps).length + 1}`;
        this.traps[newKey] = trap;

        return false;
    }

    removeTrap(trap) {
        for (const key in this.traps) {
            if (JSON.stringify(this.traps[key]) === JSON.stringify(trap)) {
                if (this.traps[key].n == 1) delete this.traps[key]
                else this.traps[key].n --;      
            }
        }

        if (Object.keys(this.traps).length === 0) {
            this.removeAction({ type: 'trap', active: false });
        }
    }

    addArsenic() {
        if (this.arsenic < 10) {
            this.arsenic++;
            if (this.arsenic == 1) this.addAction({ type: 'arsenic', active: false });
            Panel.addLine(`<br><span class="red"> ${this.name}</span> acumula veneno.`); 
        } else if (this.arsenic == 10) Panel.addLine(`<br><span class="red"> ${this.name}</span> no puede acumular mas veneno.`); 

    }

    desblopizacion() {
        let setBlopId = [26, 27, 28, 29];
        Panel.addLine(`<br><span class="red"> ${this.name}</span> entra en estado de <span class="neutral">Desblopización</span>.`); 
        for (let i = 0; i < setBlopId.length; i++) {
            if (inventory.gear.amulet != null && inventory.gear.amulet.setId == setBlopId[i]) Object.keys(this.res).forEach((key) => this.res[key] -= 15);
            if (inventory.gear.belt != null && inventory.gear.belt.setId == setBlopId[i]) Object.keys(this.res).forEach((key) => this.res[key] -= 15);
            if (inventory.gear.ring != null && inventory.gear.ring.setId == setBlopId[i]) Object.keys(this.res).forEach((key) => this.res[key] -= 15);
            if (inventory.gear.ringAlter != null && inventory.gear.ringAlter.setId == setBlopId[i]) Object.keys(this.res).forEach((key) => this.res[key] -= 15);
            if (inventory.gear.boots != null && inventory.gear.boots.setId == setBlopId[i]) Object.keys(this.res).forEach((key) => this.res[key] -= 15);
        }
        this.update();
    }
}
