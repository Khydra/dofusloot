import * as uiShop from '../ui/shop.js';
import {itemData} from './itemData.js';
import {Item} from './Item.js';
import {consumableData} from './consumableData.js';
import {Consumable} from './Consumable.js';
import {player, inventory, location} from '../game.js';
import {playSound} from '../../data/audio.js';
import {Battle} from '../global/Battle.js';
import {summonAction} from '../player/summonManager.js';

export class Shop {
	constructor(shopData) {
		this.stock = [];
		this.rerollPrice = shopData.rerollPrice;
		this.lock = shopData.lock;
		if (shopData.stock != null) this.stock = shopData.stock;
		else this.newStock();
		this.update();
		(this.lock) ? uiShop.buttonLock.style.backgroundImage = 'url("./res/image/icon/lock.png")' : uiShop.buttonLock.style.backgroundImage = 'url("./res/image/icon/unlock.png")'
	}

	update() {
		for (let i = 0; i < 6; i++) {
			if (this.stock[i] != undefined) {
				uiShop.item[i].style.backgroundImage = `url("${this.stock[i].img}")`;
				uiShop.item[i].style.pointerEvents = 'all';
				if (this.stock[i].type != 'consumable' && Object.values(this.stock[i].exo).length > 0) uiShop.item[i].style.backgroundColor = 'var(--yellow)';
            	else uiShop.item[i].style.backgroundColor = 'var(--bg1)';
			} else {
				uiShop.item[i].style.backgroundImage = '';
				uiShop.item[i].style.pointerEvents = 'none';
				uiShop.item[i].style.backgroundColor = 'var(--bg1)';
			}	
		}
	}

	newStock() { 
		for (let i = 0; i < 6; i++) this.newItem(i);

		if (Battle.status == 'active') {
			player.summon.forEach((summon) => {
				if (summon.activation == 'onRerollShop') summonAction(summon);
			})
		}
		
		this.update();
	};

	newItem(pos) {
		let consumibleOdd = Math.floor(Math.random() * 80);
		if (consumibleOdd == 0) {
			let min = location.zone.consumablePool[0];
			let max = location.zone.consumablePool[1];
			let n = Math.floor(Math.random() * (max - min + 1)) + min;
			let consumable = new Consumable(consumableData[n]);
			this.stock[pos] = consumable;
		} else {
			let min = location.zone.itemPool[0];
			let max = location.zone.itemPool[1];
			let n = Math.floor(Math.random() * (max - min + 1)) + min;
			let item = new Item(itemData[n]);
			this.tryExo(item);
			this.stock[pos] = item;
		}
	}

	reroll(bubble = false) {
		if (player.gold < this.rerollPrice) return;
		playSound('reroll', 'ui');
		player.changeGold(-this.rerollPrice);
		this.rerollPrice = Math.floor(this.rerollPrice * 1.35);
		this.newStock();
		if (bubble) bubble.draw();
	}

	restart() {
		this.rerollPrice = 20;
		if (!this.lock) this.newStock();
	}
 
	buyItem(pos) {
		let item = this.stock[pos];
		if (player.gold < item.price || inventory.bag.length == 20) return;
		playSound('pucharse', 'ui');
		this.stock[pos] = null;
		this.update();
		player.changeGold(-item.price);
		inventory.obtainItem(item);
	}	

	lockStock() {
		this.lock = !this.lock;
		if (this.lock) {
			uiShop.buttonLock.style.backgroundImage = 'url("./res/image/icon/lock.png")' ;
			playSound('lock', 'ui')
		} else {
			uiShop.buttonLock.style.backgroundImage = 'url("./res/image/icon/unlock.png")';
			playSound('unlock', 'ui')
		}
	}

	tryExo(item) {
		let n = Math.floor(player.stat.pp[0]/10)
		let v = Math.floor(Math.random()*2000);
		if (n > v) item.getExo();
	}
}
