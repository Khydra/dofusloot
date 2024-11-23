import * as uiInventory from '../ui/inventory.js';
import {player} from '../game.js';

export class Stash {
    constructor(stashData) {
        this.data = JSON.parse(JSON.stringify(stashData));
    	this.active = this.data.active;
        this.item = this.data.item;
        this.create(); 
    }

    create() {
        for (let i = 1; i < 8; i++) uiInventory.dofam[i].style.backgroundImage = ``;
        this.item.forEach((it, i)=>{
            uiInventory.dofam[i+1].style.backgroundImage = `url("${it.image}")`;
            uiInventory.dofam[i+1].style.backgroundSize = '100%';
        })
        if (!this.active) this.applyStats();
    }

    applyStats() {
        this.active = true;
        this.item.forEach((item)=> {
            Object.keys(item.stat).forEach((stat)=>{
                player.stat[stat][0] += item.stat[stat];
                player.stat[stat][1] += item.stat[stat];
            })
        })
        player.statsUpdate();
        player.statusUpdate();
    }
}