import * as uiInventory from '../ui/inventory.js';
import {textStat} from '../../data/text.js';
import {Panel} from '../global/Panel.js'
import {player} from '../game.js';

export class Familiar {
    constructor(familiarData) {
        this.data = JSON.parse(JSON.stringify(familiarData));
    	this.name = this.data.name;
        this.itemImg = this.data.itemImg;
    	this.stat = this.data.stat;
    	this.scale = this.data.scale;
        this.create(); 
    }

    create() {
        uiInventory.dofam[0].style.backgroundImage = `url("${this.itemImg}")`;
        uiInventory.dofam[0].style.backgroundSize = '100%';
    }

    defeatEnemy(enemy, cookie = false) {

        if (!cookie) Panel.addLine(`<br><span class="blue">${this.name}</span> ha absorbido el alma de <span class="red">${enemy.name}</span>.`);
        
        if (!enemy.isBoss || cookie) {
            if (this.scale.normal.type == 'fix') {
                this.scale.normal.value.forEach((value, i)=> {
                    Panel.addLine(`<br><span class="blue">${this.name}</span> +${value} ${textStat[this.scale.normal.stat[i]]}`);
                    this.stat[this.scale.normal.stat[i]] += value; 
                    player.stat[this.scale.normal.stat[i]][1] += value; 
                })
            } else {
                this.scale.normal.value.forEach((value, i)=> {
                    let n = Math.floor(Math.random() * this.scale.normal.stat.length);
                    let stat = this.scale.normal.stat[n];
                    Panel.addLine(`<br><span class="blue">${this.name}</span> +${value} ${textStat[stat]}`);
                    this.stat[stat] += value; 
                    player.stat[stat][1] += value; 
                })
            }
        } else {
            if (this.scale.boss.type == 'fix') {
                this.scale.boss.value.forEach((value, i)=> {
                    Panel.addLine(`<br><span class="blue">${this.name}</span> +${value} ${textStat[this.scale.boss.stat[i]]}`);
                    this.stat[this.scale.boss.stat[i]] += value; 
                    player.stat[this.scale.boss.stat[i]][1] += value; 
                })
            } else {
                this.scale.boss.value.forEach((value, i)=> {
                    let n = Math.floor(Math.random()*this.scale.boss.stat.length);
                    let stat = this.scale.boss.stat[n];
                    Panel.addLine(`<br><span class="blue">${this.name}</span> +${value} ${textStat[stat]}`);
                    this.stat[stat] += value; 
                    player.stat[stat][1] += value; 
                })
            }
        }
    }

    upgrade() {

    }
}