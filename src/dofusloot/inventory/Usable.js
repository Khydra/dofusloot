export class Usable {
    constructor(baseUsable, usableData) {
        if (usableData == undefined) {
        	this.data = JSON.parse(JSON.stringify(baseUsable));
            this.id = this.data.id;
			this.name = this.data.name;
			this.img = this.data.img;
			this.description = this.data.description;
			this.price = this.priceModifier(this.data.price);
			this.type = this.data.type;
			this.typeId = this.data.typeId;
        } else {
            this.id = usableData.id;
			this.name = usableData.name;
			this.img = usableData.img;
			this.description = usableData.description;
			this.price = usableData.price;
			this.type = usableData.type;
			this.typeId = usableData.typeId;  
    	}
	}

    priceModifier(price) {
	    let per = 0.1; 
	    let variation = (Math.random() * (2 * per)) - per;
	    let priceModified = price * (1 + variation);
	    return Math.floor(priceModified);
	}


}
