import {exoData} from './exoData.js';

export class Item {
    constructor(baseItem, itemData) {
    	if (baseItem.typeId == 3) this.power = baseItem.power;

        if (itemData == undefined) {
            this.id = baseItem.id;
			this.name = baseItem.name;
			this.img = baseItem.img;
			this.typeId = baseItem.typeId;
			this.type = baseItem.type;
			this.set = baseItem.set;
			this.setId = baseItem.setId;
			this.price = this.priceModifier(baseItem.price);
			this.stat = {};
			this.exo = {};

			Object.keys(baseItem.stat).forEach((stat)=> {
				let min = baseItem.stat[stat][0];
				let max = baseItem.stat[stat][1];
				this.stat[stat] = Math.floor(Math.random() * (max - min + 1)) + min;
			})
        } else {
            this.id = itemData.id;
			this.name = itemData.name;
			this.img = itemData.img;
			this.typeId = itemData.typeId;
			this.type = itemData.type;
			this.set = itemData.set;
			this.setId = itemData.setId;
			this.price = pitemData.price;
			this.stat = itemData.stat;
			this.exo = itemData.exo;
        }
    }

    priceModifier(price) {
	    let per = 0.1; 
	    let variation = (Math.random() * (2 * per)) - per;
	    let priceModified = price * (1 + variation);
	    return Math.floor(priceModified);
	}

	getExo() {
		let n = Math.floor(Math.random()*Object.keys(exoData).length);
		let stat = Object.keys(exoData)[n];
		let value = Math.floor(Math.random() * (exoData[stat][1] - exoData[stat][0] + 1)) + exoData[stat][0]; 
		this.exo = {
			[stat]: value
		}
	}
}
