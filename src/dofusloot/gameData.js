export var gameData = {
	player: {
		name: null,
		class: null,
		gold: null,
		stat: {
			vit: null,
			arm: null,
			pa: null,
			pm: null,
			pot: null,
			str: null,
			int: null,
			agi: null,
			cha: null,	
			crt: null,
			dmg: null,
			strDmg: null,
			intDmg: null,
			agiDmg: null,
			chaDmg: null,
			crtDmg: null,	
			speDmg: null,
			wepDmg: null,
			res: null,
			cur: null,
			wis: null,
			pp: null
		},
		spell: []
	},
	location: {
		map: null,
		zone: null,
		room: null
	},
	inventory: {
		bag: [],
		gear: {
			hat: null,
			amulet: null,
			cloack: null,
			weapon: null,
			belt: null,
			shield: null,
			boots: null,
			ring: null,
		},
		set: [],
	},
	enemy: null,
	shop: {
		rerollPrice: null,
		stock: [],
		lock: false
	},
}
