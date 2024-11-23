export const summonData = {
	livingShovel: {
		id: 0,
		name: 'Pala Animada',
		image: './res/image/summon/anutrof0.png',
		audio: 'palaanimada',
		activation: 2,
		effect: 'digUp',
		description: `
			La Pala Animada puede refrescar la tienda gratuitamente a cambio de 2 PM. Hay una pequeña probabilidad de conseguir un objeto al 
			activar esta invocación.`
	},
	livingSpade: {
		id: 1,
		name: 'Laya Animada',
		image: './res/image/summon/anutrof1.png',
		audio: 'layaanimada',
		activation: 'onRerollShop',
		effect: 'attack',
		attack: {
			name: 'Golpe de laya',
			element: 'air',
			power: [4, 7]
		},
		description: `La Laya Animada ocasiona daños con el elemento Aire cada vez que se refresca la tienda.`
	},
	livingChest: {
		id: 2,
		name: 'Cofre Animado',
		image: './res/image/summon/anutrof2.png',
		activation: 'onGetItem',
		effect: 'attack',
		attack: {
			name: 'Mordisco animado',
			element: 'water',
			power: [11, 16]
		},
		description: ` El Cofre Animado ocasiona daños con el elemento Agua cada vez que el jugador obtiene un objeto.`
	},
	livingTrunk: {
		id: 3,
		name: 'Arcón Animado',
		image: './res/image/summon/anutrof3.png',
		activation: 'onGetItem',
		effect: 'heal',
		attack: {
			name: 'Curación animado',
			element: 'fire',
			power: [11, 16]
		},
		description: `El Arcón Animado lanza curaciones con el elemento Fuego cada vez que el jugador obtiene un objeto.`
	},
	kitty: {
		id: 4,
		name: 'Gatito',
		image: './res/image/summon/zurcarak2.png',
		audio: 'gatito',
		activation: 'onCriticalHit',
		effect: 'attack',
		attack: {
			name: 'Arañazo',
			element: 'water',
			power: [2, 4]
		},
		description: `El gatito causa daños de agua cada vez que su dueño consiga un golpe crítico.`
	},
	bramble: {
		id: 5,
		name: 'Zarza Invocada',
		image: './res/image/summon/sadida0.png',
		activation: 'onBramble',
		effect: 'attack',
		attack: {
			name: 'Atizar',
			element: 'earth',
			power: [3, 4]
		},
		description: `La Zarza golpea cada vez que el jugador utiliza Zarza. También aumenta los daños del hechizo Zarzas Agresivas.`
	},
	ultraPowerful: {
		id: 6,
		name: 'La Superpoderosa',
		image: './res/image/summon/sadida1.png',
		audio: 'superpoderosa',
		activation: 3,
		effect: 'attack',
		attack: {
			name: 'Esqueje',
			element: 'earth',
			power: [12, 15]
		},
		description: `La Superpoderosa causa daños de Tierra a cambio de PM.`
	},
	inflatable: {
		id: 7,
		name: 'La Hinchable',
		image: './res/image/summon/sadida2.png',
		activation: 'onTurnStart',
		attack: {
			name: 'Brisa otoñal',
			element: 'fire',
			power: [24, 28]
		},
		effect: 'inflatable',
		description: `La Hinchable cura con inteligencia y otorga 1 PM al inicio de cada turno.`
	},
	madoll: {
		id: 8,
		name: 'La Loca',
		image: './res/image/summon/sadida3.png',
		activation: 'onTurnStart',
		effect: 'madoll',
		description: `La Loca reduce la resistencia a Aire del enemigo al inicio de cada turno.`
	},
	sacrificialDoll: {
		id: 9,
		name: 'La Sacrificada',
		image: './res/image/summon/sadida4.png',
		audio: 'sacrificada',
		activation: 1,
		effect: 'sacrificialDoll',
		attack: {
			name: 'Explosión muñequera',
			element: 'water',
			power: [11, 17]
		},
		description: `La Sacrificada causa daños de Agua. Muere al atacar y mata a tus invocaciones. Por cada desinvocación aumenta su daño base en 11.`
	},
	theBlock: {
		id: 10,
		name: 'La Bloqueadora',
		image: './res/image/summon/sadida5.png',
		activation: 'onTurnStart',
		effect: 'armor',
		attack: {
			name: 'Sustitución muñequera',
			shield: [8, 'per']
		},
		description: `La Bloqueadora regenera armadura al inicio de cada turno.`
	},
	sismobomba: {
		id: 11,
		name: 'Sismobomba',
		image: './res/image/summon/tymador0.png',
		activation: 'onTurnStart',
		effect: 'bombCharge',
		attack: {
			name: 'Tic-tac',
			power: [0, 1],
			bonus: [0, 39],
		},
		description: `Sismobomba aumenta en 1 su daño base en al inicio de cada turno. Tener varias Sismobombas invocadas
					  accelera la obtención de daños. Todas las Sismobombas comparten daños base. El daño base máximo es 40.
					  Sismobomba puede ser detonada con Detonador para causar daños.`
	},
	explobomba: {
		id: 12,
		name: 'Explobomba',
		image: './res/image/summon/tymador1.png',
		activation: 'onTurnStart',
		effect: 'bombCharge',
		attack: {
			name: 'Tic-tac',
			power: [0, 1],
			bonus: [0, 39],
		},
		description: `Explobomba aumenta en 1 su daño base en al inicio de cada turno. Tener varias Explobombas invocadas
					  accelera la obtención de daños. Todas las Explobombas comparten daños base. El daño base máximo es 40.
					  Explobomba puede ser detonada con Detonador para causar daños.`
	},
	tornabomba: {
		id: 13,
		name: 'Tornabomba',
		image: './res/image/summon/tymador2.png',
		activation: 'onTurnStart',
		effect: 'bombCharge',
		attack: {
			name: 'Tic-tac',
			power: [0, 1],
			bonus: [0, 39],
		},
		description: `Tornabomba aumenta en 1 su daño base en al inicio de cada turno. Tener varias Tornabombas invocadas
					  accelera la obtención de daños. Todas las Tornabombas comparten daños base. El daño base máximo es 40.
					  Tornabomba puede ser detonada con Detonador para causar daños.`
	},
	hidrobomba: {
		id: 14,
		name: 'Hidrobomba',
		image: './res/image/summon/tymador3.png',
		activation: 'onTurnStart',
		effect: 'bombCharge',
		attack: {
			name: 'Tic-tac',
			power: [0, 1],
			bonus: [0, 39],
		},
		description: `Hidrobomba aumenta en 1 su daño base en al inicio de cada turno. Tener varias Hidrobombas invocadas
					  accelera la obtención de daños. Todas las Hidrobombas comparten daños base. El daño base máximo es 40.
					  Hidrobomba puede ser detonada con Detonador para causar daños.`
	},
	tonel: {
		id: 15,
		name: 'Tonel',
		image: './res/image/summon/pandawa0.png',
		activation: 'onTurnStart',
		attack: {
			name: 'Brisa otoñal',
			element: 'fire',
			power: [24, 28]
		},
		effect: 'tonel',
		description: `El tonel cura un 7% de vida al inicio de cada turno.`
	},
	pandawasta: {
		id: 16,
		name: 'Pandawasta',
		image: './res/image/summon/pandawa1.png',
		activation: 'onTurnStart',
		attack: {
			name: 'Brisa otoñal',
			element: 'fire',
			power: [24, 28]
		},
		effect: 'pandawasta',
		description: `El Pandawasta otorga 15 puntos a una estadística elemental aleatoria cuando su invocador recibe un golpe.`
	},
	cunejo: {
		id: 17,
		name: 'Cunejo',
		image: './res/image/summon/aniripsa0.png',
		activation: 'onTurnStart',
		attack: {
			name: 'Beso mágico',
			element: 'fire',
			power: [8, 12]
		},
		effect: 'cunejo',
		description: `El cunejo cura con inteligencia y otorga +2 Curas al inicio de cada turno.`
	},
	syncro: {
		id: 18,
		name: 'Syncro',
		image: './res/image/summon/xelor0.png',
		//activation: 'onTurnStart',
		//attack: {
		//	name: 'Brisa otoñal',
		//	element: 'fire',
		//	power: [24, 28]
		//},
		//effect: 'pandawasta',
		//description: `El Pandawasta otorga 15 puntos a una estadística elemental aleatoria cuando su invocador recibe un golpe.`
	},
	esferaXelor: {
		id: 19,
		name: 'Esfera de Xelor',
		image: './res/image/summon/xelor1.png',
		//activation: 'onTurnStart',
		//attack: {
		//	name: 'Brisa otoñal',
		//	element: 'fire',
		//	power: [24, 28]
		//},
		//effect: 'pandawasta',
		//description: `El Pandawasta otorga 15 puntos a una estadística elemental aleatoria cuando su invocador recibe un golpe.`
	},
	gozteque: {
		id: 20,
		name: 'Gozteque',
		image: './res/image/summon/uginak0.png',
		//activation: 'onTurnStart',
		//attack: {
		//	name: 'Brisa otoñal',
		//	element: 'fire',
		//	power: [24, 28]
		//},
		//effect: 'pandawasta',
		//description: `El Pandawasta otorga 15 puntos a una estadística elemental aleatoria cuando su invocador recibe un golpe.`
	},
	dragun: {
		id: 21,
		name: 'Dragún',
		image: './res/image/summon/osamodas0.png',
		//activation: 'onTurnStart',
		//attack: {
		//	name: 'Brisa otoñal',
		//	element: 'fire',
		//	power: [24, 28]
		//},
		//effect: 'pandawasta',
		//description: `El Pandawasta otorga 15 puntos a una estadística elemental aleatoria cuando su invocador recibe un golpe.`
	},
	tofu: {
		id: 22,
		name: 'Tofu',
		image: './res/image/summon/osamodas1.png',
		//activation: 'onTurnStart',
		//attack: {
		//	name: 'Brisa otoñal',
		//	element: 'fire',
		//	power: [24, 28]
		//},
		//effect: 'pandawasta',
		//description: `El Pandawasta otorga 15 puntos a una estadística elemental aleatoria cuando su invocador recibe un golpe.`
	},
	jabali: {
		id: 23,
		name: 'Jabalí',
		image: './res/image/summon/osamodas2.png',
		//activation: 'onTurnStart',
		//attack: {
		//	name: 'Brisa otoñal',
		//	element: 'fire',
		//	power: [24, 28]
		//},
		//effect: 'pandawasta',
		//description: `El Pandawasta otorga 15 puntos a una estadística elemental aleatoria cuando su invocador recibe un golpe.`
	},
	jalato: {
		id: 24,
		name: 'Jalató',
		image: './res/image/summon/osamodas3.png',
		//activation: 'onTurnStart',
		//attack: {
		//	name: 'Brisa otoñal',
		//	element: 'fire',
		//	power: [24, 28]
		//},
		//effect: 'pandawasta',
		//description: `El Pandawasta otorga 15 puntos a una estadística elemental aleatoria cuando su invocador recibe un golpe.`
	},
	Crujidor: {
		id: 25,
		name: 'Crujidor',
		image: './res/image/summon/osamodas4.png',
		//activation: 'onTurnStart',
		//attack: {
		//	name: 'Brisa otoñal',
		//	element: 'fire',
		//	power: [24, 28]
		//},
		//effect: 'pandawasta',
		//description: `El Pandawasta otorga 15 puntos a una estadística elemental aleatoria cuando su invocador recibe un golpe.`
	},
}