import * as uiInventory from '../ui/inventory.js';
import {setData} from '../inventory/setData.js';
import {Battle} from '../global/Battle.js';
import {Popup} from '../global/Popup.js';
import {location, player, familiar} from '../game.js';
import {playSound} from '../../data/audio.js';
import {summonAction} from '../player/summonManager.js';
import {RewardItem, RewardSpell} from '../global/Reward.js';
import {Panel} from '../global/Panel.js';

export class Inventory {
	constructor(inventoryData) {
		this.bag = inventoryData.bag;
        this.gear = inventoryData.gear;
        this.set = inventoryData.set;
        this.update();
	}

	update() {
		this.bagUpdate();
		this.gearUpdate();
	}

	bagUpdate() {
        for (let i = 0; i < 20; i++) {
            uiInventory.bag[i].style.backgroundImage = ``;
            uiInventory.bag[i].style.pointerEvents = 'none';
            uiInventory.bag[i].style.backgroundColor = 'var(--bg1)';
        }
        this.bag.forEach((item, indx) => {
            uiInventory.bag[indx].style.backgroundImage = `url("${item.img}")`;
            uiInventory.bag[indx].style.pointerEvents = 'all';
            if (item.type != 'usable' && item.type != 'consumable' && Object.values(item.exo).length > 0) {
                uiInventory.bag[indx].style.backgroundColor = 'var(--yellow)';
            } else uiInventory.bag[indx].style.backgroundColor = 'var(--bg1)';
        });
    }

    gearUpdate() {
        for (let i = 0; i < 10; i++) {
            uiInventory.gear[i].style.backgroundImage = ``;
            uiInventory.gear[i].style.pointerEvents = 'none';
            uiInventory.gear[i].style.backgroundColor = 'var(--bg1)';
        }
        Object.values(this.gear).forEach((item, indx)=> {
            if (item != null) {
                uiInventory.gear[indx].style.backgroundImage = `url("${item.img}")`;
                uiInventory.gear[indx].style.pointerEvents = 'all';
                if (item.type != 'usable' && item.type != 'consumable' && Object.values(item.exo).length > 0) {
                    uiInventory.gear[indx].style.backgroundColor = 'var(--yellow)';
                } else uiInventory.gear[indx].style.backgroundColor = 'var(--bg1)';
            }
        })
    }

    obtainItem(item) {
        this.bag.push(item);
        this.bagUpdate();

        if (Battle.status == 'active') {
            player.summon.forEach((summon) => {
                if (summon.activation == 'onGetItem') summonAction(summon);
            })
        }
    }

    dropItem(pos, bubble = false) {
        playSound('itemDestroy', 'ui');

        if (this.bag[pos].type != 'consumable' && this.bag[pos].type != 'usable') {
            let sellPrice = Math.floor(this.bag[pos].price/2);
            player.changeGold(sellPrice);
        }
        
        this.bag.splice(pos, 1);
        this.bagUpdate();

        if (bubble) bubble.destroy();
    }

    equipItem(pos, player, bubble = false) {
    	if (Battle.status == 'active') return new Popup('ERROR EN EL EQUIPAMIENTO', 'No puedes equipar ni desequipar objetos en medio de un combate.', 'ACEPTAR');
        
        let item = this.bag[pos];

        if (item.type == 'usable') return this.useUsableItem(item, pos, bubble);

        playSound('itemEquip', 'ui');
        let sameSet = false;
        this.bag.splice(pos, 1);

        if (item.type == 'consumable') {
            if (this.gear[item.type] != null) {this.bag.splice(pos, 0, this.gear[item.type]);}
            uiInventory.gear[item.typeId].style.backgroundImage = `url("${item.img}")`;
            this.gear[item.type] = item;
            if (bubble) bubble.destroy();
            return this.update();
        }

        if (item.type == 'ring') {
            let ringPos;

            if (this.gear['ring'] != null) {
                if (this.gear['ring'].id === item.id) { //mismo anillo ya equipado se sustituye
                    //sustituir anillo
                    this.bag.splice(pos, 0, this.gear['ring']);
                    this.unequipItemStats(this.gear['ring'], player);
                    this.unequipItemSet(this.gear['ring'].setId, player);
                    ringPos = 6;
                    this.gear['ring'] = item;
                }
                else { //primer anillo ocupado -> se equipa en el 2 o lo sustituye
                    if (this.gear['ringAlter'] != null) {
                        this.bag.splice(pos, 0, this.gear['ringAlter']);
                        this.unequipItemStats(this.gear['ringAlter'], player);
                        this.unequipItemSet(this.gear['ringAlter'].setId, player)
                    }
                    ringPos = 7;
                    this.gear['ringAlter'] = item;
                }
            } else { // primer anillo sin ocupar
                if (this.gear['ringAlter'] != null && this.gear['ringAlter'].id === item.id) { //mismo anillo ya equipado se sustituye
                    //sustituir anillo
                    this.bag.splice(pos, 0, this.gear['ringAlter']);
                    this.unequipItemStats(this.gear['ringAlter'], player);
                    this.unequipItemSet(this.gear['ringAlter'].setId, player);
                    ringPos = 7;
                    this.gear['ringAlter'] = item;
                }
                else {
                    ringPos = 6; 
                    this.gear['ring'] = item;
                }         
            }

            uiInventory.gear[ringPos].style.backgroundImage = `url("${item.img}")`;
           
            if (!sameSet) this.equipItemSet(item.setId, player);

            this.equipItemStats(item, player);
            if (bubble) bubble.destroy();
            return;
        }

        if (this.gear[item.type] != null) {
            this.bag.splice(pos, 0, this.gear[item.type]);
            this.unequipItemStats(this.gear[item.type], player);
            if (this.gear[item.type].setId === item.setId) sameSet = true;
        }

        uiInventory.gear[item.typeId].style.backgroundImage = `url("${item.img}")`;
    
        if (this.gear[item.type] != null && !sameSet) this.unequipItemSet(this.gear[item.type].setId, player);
        if (!sameSet) this.equipItemSet(item.setId, player);
        
        this.gear[item.type] = item;
        this.equipItemStats(item, player);

        if (bubble) bubble.destroy();
    }

    unequipItem(typeId, player) {
    	if (Battle.status == 'active') return new Popup('ERROR EN EL EQUIPAMIENTO', 'No puedes equipar ni desequipar objetos en medio de un combate.', 'ACEPTAR');
        if (this.bag.length == 20) return;
        let item = this.gear[(Object.keys(this.gear)[typeId])];
        if (item == null) return;
        playSound('itemUnequip', 'ui');

        uiInventory.gear[typeId].style.backgroundImage = ``;

        if (item.type == 'consumable') {
            this.gear['consumable'] = null;
            return this.obtainItem(item);
        }

        if (item.type == 'ring' && typeId == 7) {
            this.gear['ringAlter'] = null;
        } else this.gear[item.type] = null;

        this.obtainItem(item);
        this.unequipItemSet(item.setId, player);
        this.unequipItemStats(item, player);
    }

    equipItemStats(item, player) {
        Object.keys(item.stat).forEach((stat)=> player.changeStat(stat, item.stat[stat]));
        Object.keys(item.exo).forEach((exo)=> player.changeStat(exo, item.exo[exo]));
        this.update();
    }

    unequipItemStats(item, player) {
        Object.keys(item.stat).forEach((stat)=> player.changeStat(stat, -item.stat[stat]));
        Object.keys(item.exo).forEach((exo)=> player.changeStat(exo, -item.exo[exo]));
        this.update();
    }

    equipItemSet(setId, player) {
        let newSet = true;

        this.set.forEach((set)=>{
            if (set[0] == setId) {
                newSet = false
                set[1]++;
            }
        })

        if (newSet) this.set.push([setId, 1]);

        this.updateSetBonus(setId, true, player);
    }

    unequipItemSet(setId, player) {
        let indx = this.set.findIndex(set => set[0] === setId);
        this.set[indx][1]--;

        if (this.set[indx][1] == 0) this.set.splice(indx, 1);

        this.updateSetBonus(setId, false, player);
    }

    updateSetBonus(setId, e, player) {
        let indx = this.set.findIndex(set => set[0] === setId);

        if (e) { //equipar
            if (this.set[indx][1] <= 1) return;
            Object.keys(setData[setId].bonus).forEach((key)=>{
                player.changeStat(key, setData[setId].bonus[key][this.set[indx][1]-2])
                if (this.set[indx][1]-3 >= 0) player.changeStat(key, -setData[setId].bonus[key][this.set[indx][1]-3])
            })
        } else { //desequipar
            if (indx < 0) return;
            Object.keys(setData[setId].bonus).forEach((key)=> {
                player.changeStat(key, - setData[setId].bonus[key][this.set[indx][1]-1]);
                if (this.set[indx][1]-2 >= 0) player.changeStat(key, setData[setId].bonus[key][this.set[indx][1]-2]);
            })
        }
    }

    useUsableItem(item, pos, bubble) {
        switch(item.id) {
            case 0:
                if (player.spell.length == 12) {
                    Panel.addLine(`<br><span class="yellow">${player.name}</span> no puede aprender mas hechizos.`);
                    return;
                };
                Panel.addLine(`<br><span class="yellow">${player.name}</span> utiliza el <span class="neutral">${item.name}</span>.`);
                new RewardSpell(player.class, false);
                break;
            case 1:
                Panel.addLine(`<br><span class="yellow">${player.name}</span> se abre el <span class="neutral">${item.name}</span>.`);
                new RewardItem(location.zone, false);
                break;
            case 2:
                Panel.addLine(`<br><span class="blue">${familiar.name}</span> se come la <span class="neutral">${item.name}</span>.`);
                let n = Math.floor(Math.random()*5)+1;
                for (let i=0; i<n; i++) familiar.defeatEnemy({isBoss: false}, true);
                break;
            case 3:
                Panel.addLine(`<br><span class="yellow">${player.name}</span> se bebe el <span class="neutral">${item.name}</span>.`);
                Panel.addLine(`<br>Pero <span class="green">Adrián</span> tenía demasiado sueño para programar <span class="neutral">${item.name}</span>.`);
                Panel.addLine(`<br><span class="green">Adrián</span> tampoco esparaba que llegases tan lejos.`);
                Panel.addLine(`<br>Felicidades de parte de <span class="green">Adrián</span>.`);
                break;
            case 4:
                Panel.addLine(`<br><span class="yellow">${player.name}</span> se come el <span class="neutral">${item.name}</span>.`);
                for (let i=0; i<2; i++) {
                    player.stat.str[i] += 25;
                    player.stat.int[i] += 25;
                    player.stat.agi[i] += 25;
                    player.stat.cha[i] += 25;
                }

                player.update();
                break;
        }
        this.dropItem(pos, bubble)
    }
}