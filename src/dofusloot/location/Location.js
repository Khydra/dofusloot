import * as uiStatus from '../ui/status.js';
import {enemy, shop, player, location} from '../game.js';
import {enemyData} from '../enemy/enemyData.js';
import {Reward} from '../global/Reward.js';
import {saveGameData} from '../../data/data.js';

export class Location {
    constructor(locationData) {
        this.data = JSON.parse(JSON.stringify(locationData));
    	this.map = this.data.map;
        this.zone = this.data.zone;
        this.zoneNum = this.data.zoneNum;
        this.pathNum = this.data.pathNum;
        this.roomNum = this.data.roomNum;
        this.update();
    }
    
    update() {
        uiStatus.location.innerHTML = `${this.zone.name} (${this.roomNum}/${this.zone.room})`;
    }

    next() {
        shop.restart();
        this.roomNum++;
        if (this.roomNum < this.zone.room) {
            this.update();
            enemy.new(enemyData[this.zone.enemyPool[Math.floor(Math.random() * this.zone.enemyPool.length)]]);
            player.update();
            saveGameData();
        } 
        else if (this.roomNum === this.zone.room) {
            this.update();
            enemy.new(enemyData[this.zone.bossPool[Math.floor(Math.random() * this.zone.bossPool.length)]]);
            player.update();
            saveGameData();
        } 
        else if (this.roomNum > this.zone.room) {
            if (this.zoneNum < this.map.zone.length) {
                Reward.inReward = true;
                new Reward(location.zone);
            } else {
                return //win run
            }
        }
    }

    nextZone() {
        Reward.inReward = false;
        this.zoneNum++;
        this.roomNum = 1;
        this.pathNum = Math.floor(Math.random() * this.map.zone[this.zoneNum].length);
        this.zone = this.map.zone[this.zoneNum][this.pathNum];
        this.update();
        enemy.new(enemyData[this.zone.enemyPool[Math.floor(Math.random() * this.zone.enemyPool.length)]]);
        player.update();
    }
}