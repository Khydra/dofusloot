export class Consumable {
    constructor(baseConsumable, consumableData) {
        if (consumableData == undefined) {
        	this.data = JSON.parse(JSON.stringify(baseConsumable));
            this.id = this.data.id;
			this.name = this.data.name;
			this.img = this.data.img;
			this.description = this.data.description;
			this.uses = this.data.uses;
			this.price = this.priceModifier(this.data.price);
			this.type = this.data.type;
			this.typeId = this.data.typeId;
        } else {
            this.id = consumableData.id;
			this.name = consumableData.name;
			this.img = consumableData.img;
			this.description = consumableData.description;
			this.uses = consumableData.uses;
			this.price = consumableData.price;
			this.type = consumableData.type;
			this.typeId = consumableData.typeId;  
    	}
	}

    priceModifier(price) {
	    let per = 0.1; 
	    let variation = (Math.random() * (2 * per)) - per;
	    let priceModified = price * (1 + variation);
	    return Math.floor(priceModified);
	}
}
