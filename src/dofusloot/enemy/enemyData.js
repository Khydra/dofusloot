export const enemyData = {
	pioRojo: {
		name: 'Pío Rojo',
		img: './res/image/enemy/pio_rojo.png',
		isBoss: false,
		health: [150, 150],
		armor: [0, 0],
		res: {
			earth: 0,
			fire: 20,
			air: 0,
			water: -10
		},
		dmg: 0,
		gold: 20,
		ogrinas: 5,
		aura: { },
		action: {
			0: { type: 'attack', active: true, power: [5, 10], hits: 1 },
			1: { type: 'drop', active: false }, 
		},
		drop: [0, 1, 2, 3, 4, 5],
	},
	pioAzul: {
		name: 'Pío Azul',
		img: './res/image/enemy/pio_azul.png',
		isBoss: false,
		health: [150, 150],
		armor: [0, 0],
		res: {
			earth: 0,
			fire: -10,
			air: 0,
			water: 20
		},
		dmg: 0,
		gold: 20,
		ogrinas: 5,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [5, 10], hits: 1 },
			1: { type: 'drop', active: false }
		},
		drop: [6, 7, 8, 9, 10, 11]
	},
	pioVerde: {
		name: 'Pío Verde',
		img: './res/image/enemy/pio_verde.png',
		isBoss: false,
		health: [150, 150],
		armor: [0, 0],
		res: {
			earth: -10,
			fire: 0,
			air: 20,
			water: 0
		},
		dmg: 0,
		gold: 20,
		ogrinas: 5,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [5, 10], hits: 1 },
			1: { type: 'drop', active: false }
		},
		drop: [18, 19, 20, 21, 22, 23]
	},
	pioAmarillo: {
		name: 'Pío Amarillo',
		img: './res/image/enemy/pio_amarillo.png',
		isBoss: false,
		health: [150, 150],
		armor: [0, 0],
		res: {
			earth: 20,
			fire: 0,
			air: -10,
			water: 0
		},
		dmg: 0,
		gold: 20,
		ogrinas: 5,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [5, 10], hits: 1 },
			1: { type: 'drop', active: false }
		},
		drop: [24, 25, 26, 27, 28, 29]
	},
	pioVioleta: {
		name: 'Pío Violeta',
		img: './res/image/enemy/pio_violeta.png',
		isBoss: false,
		health: [120, 120],
		armor: [0, 0],
		res: {
			earth: 10,
			fire: 10,
			air: 10,
			water: 10
		},
		dmg: 0,
		gold: 20,
		ogrinas: 7,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [6, 12], hits: 1 },
			1: { type: 'drop', active: false }
		},
		drop: [12, 13, 14, 15, 16, 17]
	},
	pioRosa: {
		name: 'Pío Rosa',
		img: './res/image/enemy/pio_rosa.png',
		isBoss: false,
		health: [190, 190],
		armor: [0, 0],
		res: {
			earth: -5,
			fire: -5,
			air: -5,
			water: -5
		},
		dmg: 0,
		gold: 20,
		ogrinas: 4,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [4, 8], hits: 1 },
			1: { type: 'heal', active: true, power: [4, 8], hits: 1 },
			2: { type: 'drop', active: false }
		},
		drop: [30, 31, 32, 33, 34, 35]
	},
	peazoBellota: {
		name: 'Peazo Bellota',
		img: './res/image/enemy/peazo_bellota.png',
		isBoss: true,
		bossId: 0,
		health: [610, 610],
		armor: [0, 0],
		res: {
			earth: 6,
			fire: 12,
			air: -10,
			water: 3
		},
		dmg: 0,
		gold: 150,
		ogrinas: 25,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [10, 12], hits: 2 },
			1: { type: 'dropUsable', active: false }
		},
		dropUsable: [2]
	},
	dienteLeon: {
		name: 'Diente de Leon',
		img: './res/image/enemy/diente_leon.png',
		isBoss: false,
		health: [310, 310],
		armor: [0, 0],
		res: {
			earth: -14,
			fire: 10,
			air: -5,
			water: 6
		},
		dmg: 0,
		gold: 34,
		ogrinas: 8,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [18, 24], hits: 1 },
		}
	},
	champiChamp: {
		name: 'Champi Champ',
		img: './res/image/enemy/champi_champ.png',
		isBoss: false,
		health: [170, 170],
		armor: [30, 30],
		res: {
			earth: 15,
			fire: -14,
			air: 10,
			water: 11
		},
		dmg: 0,
		gold: 34,
		ogrinas: 9,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [4, 5], hits: 2 },
			1: { type: 'shield', active: true, power: [8, 10], hits: 1 },
			2: { type: 'spikes', active: false, power: 20 },
			3: { type: 'poison', active: true, power: [1, 2] }
		}
	},
	girasolSalvaje: {
		name: 'Girasol Salv.',
		img: './res/image/enemy/girasol_salvaje.png',
		isBoss: false,
		health: [290, 290],
		armor: [0, 0],
		res: {
			earth: 10,
			fire: -9,
			air: -12,
			water: 15
		},
		dmg: 0,
		gold: 34,
		ogrinas: 6,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [20, 40], hits: 1 },
			1: { type: 'dmgUp', active: true, power: [1, 3], hits: 1 },
		}
	},
	rosaDemoniaca: {
		name: 'Rosa Demoníaca',
		img: './res/image/enemy/rosa_demoniaca.png',
		isBoss: false,
		health: [270, 270],
		armor: [0, 0],
		res: {
			earth: 15,
			fire: 15,
			air: 10,
			water: -9
		},
		dmg: 0,
		gold: 34,
		ogrinas: 6,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [10, 17], hits: 2 },
		}
	},
	moskito: {
		name: 'Moskito',
		img: './res/image/enemy/moskito.png',
		isBoss: false,
		health: [195, 195],
		armor: [0, 0],
		res: {
			earth: -10,
			fire: -4,
			air: 9,
			water: 6
		},
		dmg: 0,
		gold: 34,
		ogrinas: 8,
		aura: {},
		action: {
			0: { type: 'lifeSteal', active: true, power: [15, 20], hits: 1 },
			1: { type: 'debuff', active: true, value: [-8], stat: ['res'] }
		}
	},
	girasolHambriento: {
		name: 'Girasol Hambr.',
		img: './res/image/enemy/girasol_hambriento.png',
		isBoss: true,
		bossId: 1,
		health: [920, 920],
		armor: [100, 100],
		res: {
			earth: 25,
			fire: 15,
			air: -15,
			water: -10
		},
		dmg: 0,
		gold: 257,
		ogrinas: 48,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [21, 28], hits: 1 },
			1: { type: 'fury', active: false, power: [1, 2] },
		}
	},
	ratonGris: {
		name: 'Ratón Gris',
		img: './res/image/enemy/raton_gris.png',
		isBoss: false,
		health: [310, 310],
		armor: [30, 30],
		res: {
			earth: -1,
			fire: -10,
			air: 4,
			water: -2
		},
		dmg: 0,
		gold: 31,
		ogrinas: 6,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [8, 11], hits: 4 },
			1: { type: 'fury', active: false, power: [1, 2] },
		}
	},
	rataEnferma: {
		name: 'Rata Enferma',
		img: './res/image/enemy/rata_enferma.png',
		isBoss: false,
		health: [270, 270],
		armor: [0, 0],
		res: {
			earth: -15,
			fire: 9,
			air: 6,
			water: -5
		},
		dmg: 0,
		gold: 31,
		ogrinas: 6,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [8, 11], hits: 2 },
			1: { type: 'poison', active: true, power: [1, 3] },
			2: { type: 'drop', active: false }
		},
		drop: [75, 76, 77, 78]
	},
	araknaEnferma: {
		name: 'Arak. Enferma',
		img: './res/image/enemy/arakna_enferma.png',
		isBoss: false,
		health: [180, 180],
		armor: [0, 0],
		res: {
			earth: 8,
			fire: 2,
			air: 1,
			water: -12
		},
		dmg: 0,
		gold: 31,
		ogrinas: 6,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [15, 20], hits: 2 },
			1: { type: 'debuff', active: true, value: [-5], stat: ['res'] },
			2: { type: 'dropExo', active: false }
		},
		dropExo: [67, 68, 69, 70]
	},
	rataman: {
		name: 'Ratamán',
		img: './res/image/enemy/rataman.png',
		isBoss: true,
		bossId: 2,
		health: [1025, 1025],
		armor: [50, 50],
		res: {
			earth: 9,
			fire: -10,
			air: -5,
			water: 8
		},
		dmg: 0,
		gold: 261,
		ogrinas: 52,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [5, 9], hits: 2 },
			1: { type: 'poison', active: true, power: [5, 9] },
			2: { type: 'retPa', active: true, power: [0, 1], hits: 2 },
			3: { type: 'dropExo', active: false }
		},
		dropExo: [75, 76, 77, 78]
	},
	prespic: {
		name: 'Prespic',
		img: './res/image/enemy/prespic.png',
		isBoss: false,
		health: [440, 440],
		armor: [0, 0],
		res: {
			earth: -6,
			fire: -16,
			air: -20,
			water: -13
		},
		dmg: 0,
		gold: 50,
		ogrinas: 9,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [40, 60], hits: 1 },
			1: { type: 'spikes', active: false, power: 35 },
			2: { type: 'retPa', active: true, power: [0, 2], hits: 2 },
			3: { type: 'drop', active: false }
		},
		drop: [63, 64, 65, 66]
	},
	mililubo: {
		name: 'Mililubo',
		img: './res/image/enemy/mililubo.png',
		isBoss: false,
		health: [880, 880],
		armor: [85, 85],
		res: {
			earth: 0,
			fire: -4,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 50,
		ogrinas: 15,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [30, 40], hits: 2 },
			1: { type: 'retPm', active: true, power: [0, 1], hits: 1 },
			2: { type: 'dmgUp', active: true, power: [1, 3], hits: 1 },
		}
	},
	jabali: {
		name: 'Jabali',
		img: './res/image/enemy/jabali.png',
		isBoss: false,
		health: [660, 660],
		armor: [0, 0],
		res: {
			earth: 9,
			fire: 0,
			air: 9,
			water: -2
		},
		dmg: 0,
		gold: 50,
		ogrinas: 11,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [20, 25], hits: 2 },
			1: { type: 'fury', active: false, power: [1, 2] },
		},
	},
	bandidoManco: {
		name: 'Bandido Manco',
		img: './res/image/enemy/bandido_manco.png',
		isBoss: false,
		health: [400, 400],
		armor: [120, 120],
		res: {
			earth: 8,
			fire: -3,
			air: 9,
			water: 9
		},
		dmg: 0,
		gold: 20,
		ogrinas: 7,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [8, 12], hits: 4 },
			1: { type: 'stealKamas', active: true, power: [20, 40] },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropUsable', active: false }
		},
		dropExo: [55, 56, 57, 58],
		dropUsable: [1]
	},
	arakna: {
		name: 'Arakna',
		img: './res/image/enemy/arakna.png',
		isBoss: false,
		health: [500, 500],
		armor: [0, 0],
		res: {
			earth: 12,
			fire: 1,
			air: -2,
			water: -8
		},
		dmg: 0,
		gold: 40,
		ogrinas: 5,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [58, 60], hits: 1 },
			1: { type: 'retPa', active: true, power: [0, 1], hits: 1 },
			2: { type: 'drop', active: false }
		},
		drop: [67, 68, 69, 70]
	},
	tofu: {
		name: 'Tofu',
		img: './res/image/enemy/tofu.png',
		isBoss: false,
		health: [705, 705],
		armor: [30, 30],
		res: {
			earth: 15,
			fire: 13,
			air: 10,
			water: -27
		},
		dmg: 0,
		gold: 38,
		ogrinas: 5,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [20, 45], hits: 2 },
			1: { type: 'drop', active: false }
		},
		drop: [90, 91, 92, 93, 94, 95, 96]
	},
	tofuna: {
		name: 'Tofuna',
		img: './res/image/enemy/tofuna.png',
		isBoss: false,
		health: [900, 900],
		armor: [0, 0],
		res: {
			earth: -7,
			fire: 15,
			air: -25,
			water: 15
		},
		dmg: 0,
		gold: 47,
		ogrinas: 4,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [20, 30], hits: 3 },
			1: { type: 'heal', active: true, power: [40, 90], hits: 1 },
			2: { type: 'drop', active: false }
		},
		drop: [90, 91, 92, 93, 94, 95, 96]
	},
	tofuNegro: {
		name: 'Tofu Negro',
		img: './res/image/enemy/tofu_negro.png',
		isBoss: false,
		health: [680, 680],
		armor: [0, 0],
		res: {
			earth: 18,
			fire: -24,
			air: -8,
			water: 7
		},
		dmg: 0,
		gold: 44,
		ogrinas: 8,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [30, 50], hits: 2 },
			1: { type: 'drop', active: false }
		},
		drop: [90, 91, 92, 93, 94, 95, 96]
	},
	tofuGordinflon: {
		name: 'Tofu Gordinfón',
		img: './res/image/enemy/tofu_gordinflon.png',
		isBoss: false,
		health: [1100, 1100],
		armor: [0, 0],
		res: {
			earth: 10,
			fire: -14,
			air: 20,
			water: 15
		},
		dmg: 0,
		gold: 48,
		ogrinas: 8,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [55, 70], hits: 1 },
			1: { type: 'retPm', active: true, power: [0, 1], hits: 1 },
			2: { type: 'drop', active: false }
		},
		drop: [90, 91, 92, 93, 94, 95, 96]
	},
	tofukaz: {
		name: 'Tofukaz',
		img: './res/image/enemy/tofukaz.png',
		isBoss: false,
		health: [600, 600],
		armor: [50, 50],
		res: {
			earth: -24,
			fire: 10,
			air: 13,
			water: -8
		},
		dmg: 0,
		gold: 51,
		ogrinas: 9,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [10, 12], hits: 4 },
			1: { type: 'fury', active: false, power: [2, 3] },
			2: { type: 'drop', active: false }
		},
		drop: [90, 91, 92, 93, 94, 95, 96]
	},
	tofuMutante: {
		name: 'Tofu Mutante',
		img: './res/image/enemy/tofu_mutante.png',
		isBoss: false,
		health: [845, 845],
		armor: [0, 0],
		res: {
			earth: -9,
			fire: -29,
			air: 38,
			water: -17
		},
		dmg: 0,
		gold: 51,
		ogrinas: 9,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [30, 50], hits: 2 },
			1: { type: 'retPa', active: true, power: [0, 1], hits: 1 },
			2: { type: 'drop', active: false }
		},
		drop: [90, 91, 92, 93, 94, 95, 96]
	},
	hombreOso: {
		name: 'Hombre Oso',
		img: './res/image/enemy/hombre_oso.png',
		isBoss: true,
		bossId: 3,
		health: [850, 850],
		armor: [1200, 1200],
		res: {
			earth: 25,
			fire: 9,
			air: -8,
			water: -2
		},
		dmg: 0,
		gold: 500,
		ogrinas: 86,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [55, 62], hits: 1 },
			1: { type: 'dmgUp', active: true, power: [2, 5], hits: 1 },
		}
	},
	batofu: {
		name: 'Batofu',
		img: './res/image/enemy/batofu.png',
		isBoss: true,
		bossId: 4,
		health: [1720, 1720],
		armor: [400, 400],
		res: {
			earth: 9,
			fire: -25,
			air: 37,
			water: -15
		},
		dmg: 0,
		gold: 480,
		ogrinas: 77,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [10, 17], hits: 3 },
			1: { type: 'dmgUp', active: true, power: [2, 4], hits: 1 },
			2: { type: 'dropExo', active: false }
		},
		dropExo: [90, 91, 92, 93, 94, 95, 96]
	},
	pischisAzul: {
		name: 'Pischis Azul',
		img: './res/image/enemy/pischis_azul.png',
		isBoss: false,
		health: [1250, 1250],
		armor: [110, 110],
		res: {
			earth: -5,
			fire: -18,
			air: 10,
			water: 55
		},
		dmg: 0,
		gold: 65,
		ogrinas: 13,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [35, 65], hits: 2 },
			1: { type: 'debuff', active: true, value: [-50], stat: ['cha'] }
		}
	},
	pischisVerde: {
		name: 'Pischis Verde',
		img: './res/image/enemy/pischis_verde.png',
		isBoss: false,
		health: [1250, 1250],
		armor: [110, 110],
		res: {
			earth: 55,
			fire: 10,
			air: -5,
			water: -18
		},
		dmg: 0,
		gold: 65,
		ogrinas: 13,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [35, 65], hits: 2 },
			1: { type: 'debuff', active: true, value: [-50], stat: ['str'] }
		}
	},
	pischisNaranja: {
		name: 'Pischis Nar.',
		img: './res/image/enemy/pischis_naranja.png',
		isBoss: false,
		health: [1250, 1250],
		armor: [110, 110],
		res: {
			earth: -18,
			fire: 55,
			air: -5,
			water: 10
		},
		dmg: 0,
		gold: 65,
		ogrinas: 13,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [35, 65], hits: 2 },
			1: { type: 'debuff', active: true, value: [-50], stat: ['int'] }
		}
	},
	pischisBlanco: {
		name: 'Pischis Blanco',
		img: './res/image/enemy/pischis_blanco.png',
		isBoss: false,
		health: [1250, 1250],
		armor: [110, 110],
		res: {
			earth: 10,
			fire: -5,
			air: 55,
			water: -18
		},
		dmg: 0,
		gold: 65,
		ogrinas: 13,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [35, 65], hits: 2 },
			1: { type: 'debuff', active: true, value: [-50], stat: ['agi'] }
		}
	},
	pischisPayaso: {
		name: 'Pischis Payaso',
		img: './res/image/enemy/pischis_payaso.png',
		isBoss: false,
		health: [1300, 1300],
		armor: [0, 0],
		res: {
			earth: 26,
			fire: 26,
			air: 26,
			water: 26
		},
		dmg: 0,
		gold: 80,
		ogrinas: 25,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [30, 60], hits: 3 },
			1: { type: 'debuff', active: true, value: [-25], stat: ['pot'] }
		}
	},
	estrellaMar: {
		name: 'Estrella Mar',
		img: './res/image/enemy/estrella_mar.png',
		isBoss: false,
		health: [800, 800],
		armor: [170, 170],
		res: {
			earth: -8,
			fire: 10,
			air: -12,
			water: 10
		},
		dmg: 0,
		gold: 50,
		ogrinas: 10,
		aura: {},
		action: {
			0: { type: 'poison', active: true, power: [4, 8] }
		}
	},
	raulMops: {
		name: 'Raúl Mops',
		img: './res/image/enemy/raul_mops.png',
		isBoss: true,
		bossId: 5,
		health: [3200, 3200],
		armor: [500, 500],
		res: {
			earth: -3,
			fire: 17,
			air: -8,
			water: 30
		},
		dmg: 0,
		gold: 940,
		ogrinas: 115,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [85, 105], hits: 1 },
			1: { type: 'dmgUp', active: true, power: [1, 3], hits: 1 },
			2: { type: 'dropUsable', active: false }
		},
		dropUsable: [0]
	},
	mobLaesponja: {
		name: 'Mob Laesponja',
		img: './res/image/enemy/mob_laesponja.png',
		isBoss: true,
		bossId: 6,
		health: [2700, 2700],
		armor: [0, 0],
		res: {
			earth: 14,
			fire: -5,
			air: -5,
			water: 14
		},
		dmg: 0,
		gold: 900,
		ogrinas: 67,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [40, 65], hits: 2 },
			1: { type: 'heal', active: true, power: [50, 250], hits: 1 },
			2: { type: 'dropUsable', active: false }
		},
		dropUsable: [0]
	},
	jalato: {
		name: 'Jalató',
		img: './res/image/enemy/jalato.png',
		isBoss: false,
		health: [2000, 2000],
		armor: [220, 220],
		res: {
			earth: 11,
			fire: -8,
			air: 10,
			water: -6
		},
		dmg: 0,
		gold: 85,
		ogrinas: 18,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [20, 70], hits: 2 },
			1: { type: 'dropExo', active: false }
		},
		dropExo: [79, 80, 81, 82, 83, 84, 85, 86]
	},
	jalatinBlanco: {
		name: 'Jalatín Blanco',
		img: './res/image/enemy/jalatin_blanco.png',
		isBoss: false,
		health: [1000, 1000],
		armor: [400, 400],
		res: {
			earth: 8,
			fire: 11,
			air: 3,
			water: 0
		},
		dmg: 0,
		gold: 80,
		ogrinas: 12,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [40, 50], hits: 1 },
			1: { type: 'retPm', active: true, power: [0, 2], hits: 1 },
		}
	},
	jalatinNegro: {
		name: 'Jalatín Negro',
		img: './res/image/enemy/jalatin_negro.png',
		isBoss: false,
		health: [1000, 1000],
		armor: [400, 400],
		res: {
			earth: 0,
			fire: 8,
			air: 11,
			water: 3
		},
		dmg: 0,
		gold: 80,
		ogrinas: 12,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [40, 50], hits: 1 },
			1: { type: 'retPa', active: true, power: [0, 2], hits: 1 },
		}
	},
	jefeJalato: {
		name: 'Jefe Jalató',
		img: './res/image/enemy/jefe_jalato.png',
		isBoss: false,
		health: [600, 600],
		armor: [1500, 1500],
		res: {
			earth: 9,
			fire: 2,
			air: -8,
			water: 11
		},
		dmg: 0,
		gold: 105,
		ogrinas: 42,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 70], hits: 2 },
			1: { type: 'dmgUp', active: true, power: [3, 5], hits: 1 },
			2: { type: 'dropExo', active: false },
		},
		dropExo: [84]
	},
	escarahojaVerde: {
		name: 'Escar. Verde',
		img: './res/image/enemy/escarahoja_verde.png',
		isBoss: false,
		health: [1750, 1750],
		armor: [420, 420],
		res: {
			earth: 100,
			fire: 0,
			air: -50,
			water: 0
		},
		dmg: 0,
		gold: 90,
		ogrinas: 15,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 70], hits: 1 },
			1: { type: 'debuff', active: true, value: [-50], stat: ['str'] }
		},
	},
	escarahojaRojo: {
		name: 'Escar. Rojo',
		img: './res/image/enemy/escarahoja_rojo.png',
		isBoss: false,
		health: [1750, 1750],
		armor: [420, 420],
		res: {
			earth: 0,
			fire: 100,
			air: 0,
			water: -50
		},
		dmg: 0,
		gold: 90,
		ogrinas: 15,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 70], hits: 1 },
			1: { type: 'debuff', active: true, value: [-50], stat: ['int'] }
		},
	},
	escarahojaBlanco: {
		name: 'Escar. Blanco',
		img: './res/image/enemy/escarahoja_blanco.png',
		isBoss: false,
		health: [1750, 1750],
		armor: [420, 420],
		res: {
			earth: -50,
			fire: 0,
			air: 100,
			water: 0
		},
		dmg: 0,
		gold: 90,
		ogrinas: 15,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 70], hits: 1 },
			1: { type: 'debuff', active: true, value: [-50], stat: ['agi'] }
		},
	},
	escarahojaAzul: {
		name: 'Escar. Azul',
		img: './res/image/enemy/escarahoja_azul.png',
		isBoss: false,
		health: [1750, 1750],
		armor: [420, 420],
		res: {
			earth: 0,
			fire: -50,
			air: 0,
			water: 100
		},
		dmg: 0,
		gold: 90,
		ogrinas: 15,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 70], hits: 1 },
			1: { type: 'debuff', active: true, value: [-50], stat: ['cha'] }
		},
	},
	escarahojaNegro: {
		name: 'Escara. Negro',
		img: './res/image/enemy/escarahoja_negro.png',
		isBoss: false,
		health: [2200, 2200],
		armor: [0, 0],
		res: {
			earth: 23,
			fire: 23,
			air: 23,
			water: 23
		},
		dmg: 0,
		gold: 90,
		ogrinas: 15,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 110], hits: 2 },
			1: { type: 'debuff', active: true, value: [-50], stat: ['pot'] }
		},
	},
	jalatoReal: {
		name: 'Jalató Real',
		img: './res/image/enemy/jalato_real.png',
		isBoss: true,
		bossId: 7,
		health: [3200, 3200],
		armor: [700, 700],
		res: {
			earth: 13,
			fire: 10,
			air: 0,
			water: 22
		},
		dmg: 0,
		gold: 1350,
		ogrinas: 110,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 130], hits: 2 },
			1: { type: 'heal', active: true, power: [100, 400], hits: 1 },
			2: { type: 'dropExo', active: false },
		},
		dropExo: [101, 102, 103, 104, 105, 106, 107]
	},
	escarajefeDorado: {
		name: 'Escar. Dorado',
		img: './res/image/enemy/escarajefe_dorado.png',
		isBoss: true,
		bossId: 8,
		health: [2000, 2000],
		armor: [1700, 1700],
		res: {
			earth: 24,
			fire: 24,
			air: 24,
			water: 24
		},
		dmg: 0,
		gold: 1350,
		ogrinas: 110,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 90], hits: 3 },
			1: { type: 'debuff', active: true, value: [-5], stat: ['res'] },
			2: { type: 'dropExo', active: false },
		},
		dropExo: [108, 109, 110, 111, 112, 113, 114]
	}, 
	elStropajo: {
		name: 'El Stropajo',
		img: './res/image/enemy/stropajo.png',
		isBoss: false,
		health: [2500, 2500],
		armor: [500, 500],
		res: {
			earth: -18,
			fire: 19,
			air: -12,
			water: 12
		},
		dmg: 0,
		gold: 100,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 90], hits: 3 },
		}
	},
	laStropajo: {
		name: 'La Stropajo',
		img: './res/image/enemy/stropajo.png',
		isBoss: false,
		health: [2500, 2500],
		armor: [300, 300],
		res: {
			earth: 9,
			fire: -20,
			air: 16,
			water: 22
		},
		dmg: 0,
		gold: 100,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [30, 50], hits: 4 },
			1: { type: 'heal', active: true, power: [20, 55], hits: 3 },
		}
	},
	kwoan: {
		name: 'Kwoan',
		img: './res/image/enemy/kwoan.png',
		isBoss: false,
		health: [2800, 2800],
		armor: [0, 0],
		res: {
			earth: 9,
			fire: 0,
			air: -6,
			water: 0
		},
		dmg: 0,
		gold: 75,
		ogrinas: 8,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [50, 90], hits: 2 },
			1: { type: 'debuff', active: true, value: [-10, -6], stat: ['agi', 'res'] }
		}
	},
	nujo: {
		name: 'Nujo',
		img: './res/image/enemy/nujo.png',
		isBoss: false,
		health: [2500, 2500],
		armor: [0, 0],
		res: {
			earth: 20,
			fire: -15,
			air: -4,
			water: 28
		},
		dmg: 0,
		gold: 75,
		ogrinas: 8,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [50, 70], hits: 4 },
		}
	},
	chafer: {
		name: 'Chafer',
		img: './res/image/enemy/chafer.png',
		isBoss: false,
		health: [1750, 1750],
		armor: [100, 100],
		res: {
			earth: -10,
			fire: 10,
			air: 5,
			water: 0
		},
		dmg: 0,
		gold: 60,
		ogrinas: 5,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [70, 90], hits: 3 },
		}
	},
	chaferLancero: {
		name: 'Chafer Lancero',
		img: './res/image/enemy/chafer_lancero.png',
		isBoss: false,
		health: [700, 700],
		armor: [1200, 1200],
		res: {
			earth: 15,
			fire: 20,
			air: 0,
			water: 20
		},
		dmg: 0,
		gold: 80,
		ogrinas: 11,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [50, 170], hits: 1 },
			1: { type: 'shield', active: true, power: [30, 45], hits: 2 },
		}
	},
	chaferArquero: {
		name: 'Chafer Arquero',
		img: './res/image/enemy/chafer_arquero.png',
		isBoss: false,
		health: [1400, 1400],
		armor: [220, 220],
		res: {
			earth: 0,
			fire: 15,
			air: 20,
			water: 10
		},
		dmg: 0,
		gold: 61,
		ogrinas: 7,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [50, 78], hits: 4 },
			1: { type: 'debuff', active: true, value: [-10], stat: ['crt'] },
		}
	},
	chaferInvisible: {
		name: 'Chafer Invi.',
		img: './res/image/enemy/chafer_invisible.png',
		isBoss: false,
		health: [1600, 1600],
		armor: [0, 0],
		res: {
			earth: 0,
			fire: 0,
			air: 22,
			water: -18
		},
		dmg: 0,
		gold: 58,
		ogrinas: 4,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [30, 50], hits: 3 },
			1: { type: 'poison', active: true, power: [3, 8] }
		}
	},
	chaferInfante: {
		name: 'Chafer Inf.',
		img: './res/image/enemy/chafer_infante.png',
		isBoss: false,
		health: [1450, 1450],
		armor: [150, 150],
		res: {
			earth: -5,
			fire: 15,
			air: 2,
			water: 0
		},
		dmg: 0,
		gold: 57,
		ogrinas: 8,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 125], hits: 2 },
		}
	},
	chaferElite: {
		name: 'Chafer Elite',
		img: './res/image/enemy/chafer_elite.png',
		isBoss: false,
		health: [2000, 2000],
		armor: [0, 0],
		res: {
			earth: 19,
			fire: 24,
			air: 14,
			water: 9
		},
		dmg: 0,
		gold: 62,
		ogrinas: 10,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [150, 200], hits: 1 },
		}
	},
	panaderoOscuro: {
		name: 'Panadero Osc.',
		img: './res/image/enemy/panadero_oscuro.png',
		isBoss: false,
		health: [2400, 2400],
		armor: [0, 0],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 66,
		ogrinas: 9,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [50, 70], hits: 4 },
			1: { type: 'heal', active: true, power: [20, 55], hits: 2 },
			2: { type: 'dropConsumable', active: false }
		},
		dropConsumable: [2, 3, 8, 9],
	},
	mineroOscuro: {
		name: 'Minero Oscuro',
		img: './res/image/enemy/minero_oscuro.png',
		isBoss: false,
		health: [1100, 1100],
		armor: [800, 800],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 72,
		ogrinas: 6,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 75], hits: 4 },
		}
	},
	herreroOscuro: {
		name: 'Herrero Oscuro',
		img: './res/image/enemy/herrero_oscuro.png',
		isBoss: false,
		health: [1850, 1850],
		armor: [300, 300],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 65,
		ogrinas: 11,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [220, 300], hits: 1 },
		}
	},
	bandidoTymador: {
		name: 'B. Tymador',
		img: './res/image/enemy/bandido_tymador.png',
		isBoss: false,
		health: [1200, 1200],
		armor: [360, 360],
		res: {
			earth: -0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 80,
		ogrinas: 15,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [16, 42], hits: 4 },
			1: { type: 'stealKamas', active: true, power: [40, 80] },
			2: { type: 'dropUsable', active: false }
		},
		dropUsable: [1]
	},
	vampiro: {
		name: 'Vampiro',
		img: './res/image/enemy/vampiro.png',
		isBoss: false,
		health: [1700, 1700],
		armor: [0, 0],
		res: {
			earth: 22,
			fire: -10,
			air: 15,
			water: -10
		},
		dmg: 0,
		gold: 60,
		ogrinas: 11,
		aura: {},
		action: {
			0: { type: 'lifeSteal', active: true, power: [80, 105], hits: 3 },
		}
	},
	gargrola: {
		name: 'Gargrola',
		img: './res/image/enemy/gargrola.png',
		isBoss: false,
		health: [300, 300],
		armor: [3000, 3000],
		res: {
			earth: 22,
			fire: 8,
			air: 8,
			water: -16
		},
		dmg: 0,
		gold: 116,
		ogrinas: 14,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 110], hits: 2 },
			1: { type: 'shield', active: true, power: [50, 90], hits: 1 },
			2: { type: 'retPa', active: true, power: [0, 1], hits: 1 },
		}
	},
	garglifo: {
		name: 'Garglifo',
		img: './res/image/enemy/garglifo.png',
		isBoss: true,
		bossId: 9,
		health: [6300, 6300],
		armor: [4000, 4000],
		res: {
			earth: 16,
			fire: -18,
			air: -16,
			water: 4
		},
		dmg: 0,
		gold: 1460,
		ogrinas: 134,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 110], hits: 2 },
			1: { type: 'shield', active: true, power: [50, 70], hits: 1 },
			2: { type: 'retPa', active: true, power: [1, 2], hits: 2 },
			3: { type: 'dropExo', active: false },
			4: { type: 'dropUsable', active: false }
		},
		dropExo: [119, 120, 121, 122],
		dropUsable: [1]
	},
	cofrerrero: {
		name: 'Cofrerrero',
		img: './res/image/enemy/cofrerrero.png',
		isBoss: true,
		bossId: 10,
		health: [400, 400],
		armor: [7500, 7500],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 2000,
		ogrinas: 100,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [110, 350], hits: 1 },
			1: { type: 'shield', active: true, power: [30, 60], hits: 2 },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropUsable', active: false }
		},
		dropExo: [115, 116, 117, 118],
		dropUsable: [1]
	},
	chaferDraugr: {
		name: 'Chafer Draugr',
		img: './res/image/enemy/chafer_draugr.png',
		isBoss: true,
		bossId: 11,
		health: [5250, 5250],
		armor: [2500, 2500],
		res: {
			earth: -5,
			fire: 14,
			air: 13,
			water: 11
		},
		dmg: 0,
		gold: 1160,
		ogrinas: 130,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [90, 135], hits: 2 },
			1: { type: 'shield', active: true, power: [50, 70], hits: 2 },
			2: { type: 'retPm', active: true, power: [0, 1], hits: 1 },
			3: { type: 'dropExo', active: false }
		},
		dropExo: [123, 124, 125, 126],
		dropUsable: [1]
	},
	boostacho: {
		name: 'Boostacho',
		img: './res/image/enemy/boostacho.png',
		isBoss: true,
		bossId: 12,
		health: [8000, 8000],
		armor: [0, 0],
		res: {
			earth: 16,
			fire: -18,
			air: -16,
			water: 4
		},
		dmg: 0,
		gold: 1160,
		ogrinas: 130,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [20, 50], hits: 2 },
			1: { type: 'lifeSteal', active: true, power: [15, 20], hits: 2 },
			2: { type: 'retPm', active: true, power: [1, 2], hits: 2 },
			3: { type: 'dropExo', active: false },
			4: { type: 'dropUsable', active: false }
		},
		dropExo: [127, 128, 129, 130],
		dropUsable: [1]
	},
	blopReineta: {
		name: 'Blop Reineta',
		img: './res/image/enemy/blop_reineta.png',
		isBoss: false,
		health: [5400, 5400],
		armor: [0, 0],
		res: {
			earth: 60,
			fire: 23,
			air: -60,
			water: 23
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'attack', active: true, power: [90, 110], hits: 3 },
			1: { type: 'desblopizacion', active: false },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [131, 132, 133, 134],
		dropConsumable: [13],
	},
	blopGuinda: {
		name: 'Blop Guinda',
		img: './res/image/enemy/blop_guinda.png',
		isBoss: false,
		health: [5400, 5400],
		armor: [0, 0],
		res: {
			earth: 23,
			fire: 60,
			air: 23,
			water: -60
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'attack', active: true, power: [90, 110], hits: 3 },
			1: { type: 'desblopizacion', active: false },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [135, 136, 137, 138],
		dropConsumable: [14],
	},
	blopCoco: {
		name: 'Blop Coco',
		img: './res/image/enemy/blop_coco.png',
		isBoss: false,
		health: [5400, 5400],
		armor: [0, 0],
		res: {
			earth: -60,
			fire: 23,
			air: 60,
			water: 23
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'attack', active: true, power: [90, 110], hits: 3 },
			1: { type: 'desblopizacion', active: false },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [139, 140, 141, 142],
		dropConsumable: [16],
	},
	blopIndigo: {
		name: 'Blop Indigo',
		img: './res/image/enemy/blop_indigo.png',
		isBoss: false,
		health: [5400, 5400],
		armor: [0, 0],
		res: {
			earth: 23,
			fire: -60,
			air: 23,
			water: 60
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'attack', active: true, power: [90, 110], hits: 3 },
			1: { type: 'desblopizacion', active: false },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [143, 144, 145, 146],
		dropConsumable: [15],
	},
	bloponcio: {
		name: 'Bloponcio',
		img: './res/image/enemy/bloponcio.png',
		isBoss: false,
		health: [7000, 7000],
		armor: [0, 0],
		res: {
			earth: -9,
			fire: -30,
			air: 25,
			water: 22
		},
		dmg: 0,
		gold: 300,
		ogrinas: 25,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'attack', active: true, power: [300, 370], hits: 1 },
			1: { type: 'desblopizacion', active: false },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146],
		dropConsumable: [13, 14, 15, 16],
	},
	blopiseta: {
		name: 'blopiseta',
		img: './res/image/enemy/blopiseta.png',
		isBoss: false,
		health: [4200, 4200],
		armor: [0, 0],
		res: {
			earth: -33,
			fire: -8,
			air: 38,
			water: -8
		},
		dmg: 0,
		gold: 200,
		ogrinas: 13,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'poison', active: true, power: [15, 20] },
			1: { type: 'desblopizacion', active: false },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146],
		dropConsumable: [13, 14, 15, 16],
	},
	gelatinaAzul: {
		name: 'Gelatina Azul',
		img: './res/image/enemy/gelatina_azul.png',
		isBoss: false,
		health: [5000, 5000],
		armor: [0, 0],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [100, 150], hits: 2 },
			1: { type: 'heal', active: true, power: [20, 60], hits: 2 },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [147, 148, 149, 150, 151, 152],
		dropConsumable: [15],
	},
	gelatinaMenta: {
		name: 'Gelatina Menta',
		img: './res/image/enemy/gelatina_menta.png',
		isBoss: false,
		health: [5000, 5000],
		armor: [0, 0],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [100, 150], hits: 2 },
			1: { type: 'heal', active: true, power: [20, 60], hits: 2 },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [147, 148, 149, 150, 151, 152],
		dropConsumable: [16],
	},
	gelatinaFresa: {
		name: 'Gelatina Fresa',
		img: './res/image/enemy/gelatina_fresa.png',
		isBoss: false,
		health: [5000, 5000],
		armor: [0, 0],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [100, 150], hits: 2 },
			1: { type: 'heal', active: true, power: [20, 60], hits: 2 },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [147, 148, 149, 150, 151, 152],
		dropConsumable: [14],
	},
	gelatinaLimon: {
		name: 'Gelatina Limon',
		img: './res/image/enemy/gelatina_limon.png',
		isBoss: false,
		health: [5000, 5000],
		armor: [0, 0],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [100, 150], hits: 2 },
			1: { type: 'heal', active: true, power: [20, 60], hits: 2 },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropConsumable', active: false }
		},
		dropExo: [147, 148, 149, 150, 151, 152],
		dropConsumable: [13],
	},
	blopReinetaReal: {
		name: 'Blop R. Real',
		img: './res/image/enemy/blop_reineta_real.png',
		isBoss: true,
		bossId: 13,
		health: [7500, 7500],
		armor: [0, 0],
		res: {
			earth: -12,
			fire: -12,
			air: 90,
			water: -12
		},
		dmg: 0,
		gold: 1170,
		ogrinas: 42,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'attack', active: true, power: [210, 250], hits: 2 },
			1: { type: 'heal', active: true, power: [20, 30], hits: 3 },
			2: { type: 'desblopizacion', active: false },
			3: { type: 'dropExo', active: false }
		},
		dropExo: [218, 219, 220, 221]
	},
	blopGuindaReal: {
		name: 'Blop G. Real',
		img: './res/image/enemy/blop_guinda_real.png',
		isBoss: true,
		bossId: 14,
		health: [7500, 7500],
		armor: [0, 0],
		res: {
			earth: -12,
			fire: 90,
			air: -12,
			water: -12
		},
		dmg: 0,
		gold: 1170,
		ogrinas: 42,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'attack', active: true, power: [210, 250], hits: 2 },
			1: { type: 'heal', active: true, power: [20, 30], hits: 3 },
			2: { type: 'desblopizacion', active: false },
			3: { type: 'dropExo', active: false }
		},
		dropExo: [222, 223, 224, 225]
	},
	blopCocoReal: {
		name: 'Blop C. Real',
		img: './res/image/enemy/blop_coco_real.png',
		isBoss: true,
		bossId: 15,
		health: [7500, 7500],
		armor: [0, 0],
		res: {
			earth: 90,
			fire: -12,
			air: -12,
			water: -12
		},
		dmg: 0,
		gold: 1170,
		ogrinas: 42,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'attack', active: true, power: [210, 250], hits: 2 },
			1: { type: 'heal', active: true, power: [20, 30], hits: 3 },
			2: { type: 'desblopizacion', active: false },
			3: { type: 'dropExo', active: false }
		},
		dropExo: [226, 227, 228, 229]
	},
	blopIndigoReal: {
		name: 'Blop I. Real',
		img: './res/image/enemy/blop_indigo_real.png',
		isBoss: true,
		bossId: 16,
		health: [7500, 7500],
		armor: [0, 0],
		res: {
			earth: -12,
			fire: -12,
			air: -12,
			water: 90
		},
		dmg: 0,
		gold: 1170,
		ogrinas: 42,
		aura: { desblopizacion: true },
		action: {
			0: { type: 'attack', active: true, power: [210, 250], hits: 2 },
			1: { type: 'heal', active: true, power: [20, 30], hits: 3 },
			2: { type: 'desblopizacion', active: false },
			3: { type: 'dropExo', active: false }
		},
		dropExo: [230, 231, 232, 233]
	},
	gelatinaRealAzul: {
		name: 'G. Real Azul',
		img: './res/image/enemy/gelatina_real_azul.png',
		isBoss: true,
		bossId: 17,
		health: [8000, 8000],
		armor: [0, 0],
		res: {
			earth: 50,
			fire: 50,
			air: 50,
			water: -10
		},
		dmg: 0,
		gold: 1350,
		ogrinas: 50,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 165], hits: 3 },
			1: { type: 'heal', active: true, power: [20, 40], hits: 2 },
			2: { type: 'dropUsable', active: false }
		},
		dropUsable: [4]
	},
	gelatinaRealFresa: {
		name: 'G. Real Fresa',
		img: './res/image/enemy/gelatina_real_fresa.png',
		isBoss: true,
		bossId: 18,
		health: [8000, 8000],
		armor: [0, 0],
		res: {
			earth: 50,
			fire: -10,
			air: 50,
			water: 50
		},
		dmg: 0,
		gold: 1350,
		ogrinas: 50,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 165], hits: 3 },
			1: { type: 'heal', active: true, power: [20, 40], hits: 2 },
			2: { type: 'dropUsable', active: false }
		},
		dropUsable: [4]
	},
	gelatinaRealLimon: {
		name: 'G. Real Limón',
		img: './res/image/enemy/gelatina_real_limon.png',
		isBoss: true,
		bossId: 19,
		health: [8000, 8000],
		armor: [0, 0],
		res: {
			earth: 50,
			fire: 50,
			air: -10,
			water: 50
		},
		dmg: 0,
		gold: 1350,
		ogrinas: 50,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 165], hits: 3 },
			1: { type: 'heal', active: true, power: [20, 40], hits: 2 },
			2: { type: 'dropUsable', active: false }
		},
		dropUsable: [4]
	},
	gelatinaRealMenta: {
		name: 'G. Real Menta',
		img: './res/image/enemy/gelatina_real_menta.png',
		isBoss: true,
		bossId: 20,
		health: [8000, 8000],
		armor: [0, 0],
		res: {
			earth: -10,
			fire: 50,
			air: 50,
			water: 50
		},
		dmg: 0,
		gold: 1350,
		ogrinas: 50,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 165], hits: 3 },
			1: { type: 'heal', active: true, power: [20, 40], hits: 2 },
			2: { type: 'dropUsable', active: false }
		},
		dropUsable: [4]
	},
	goblin: {
		name: 'Gobiln',
		img: './res/image/enemy/goblin.png',
		isBoss: false,
		health: [2500, 2500],
		armor: [900, 900],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 12
		},
		dmg: 0,
		gold: 85,
		ogrinas: 17,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [170, 220], hits: 2 },
		},
	},
	cabalgadorKarne: {
		name: 'Cabalg. Karne',
		img: './res/image/enemy/cabalgador_karne.png',
		isBoss: false,
		health: [4800, 4800],
		armor: [700, 700],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 85,
		ogrinas: 17,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 100], hits: 4 },
			1: { type: 'retPm', active: true, power: [0, 3], hits: 1 },
		},
	},
	bwork: {
		name: 'Bwork',
		img: './res/image/enemy/bwork.png',
		isBoss: false,
		health: [4000, 4000],
		armor: [2000, 2000],
		res: {
			earth: 10,
			fire: 14,
			air: 0,
			water: -20
		},
		dmg: 0,
		gold: 115,
		ogrinas: 17,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 240], hits: 2 },
			1: { type: 'drop', active: false }
		},
		drop: [214, 215, 216, 217]
	},
	bworkArquero: {
		name: 'Bwork Arquero',
		img: './res/image/enemy/bwork_arquero.png',
		isBoss: false,
		health: [3000, 3000],
		armor: [1400, 1400],
		res: {
			earth: -13,
			fire: 5,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 115,
		ogrinas: 17,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 125], hits: 5 },
			1: { type: 'drop', active: false }
		},
		drop: [214, 215, 216, 217]
	},
	bworkMago: {
		name: 'Bwork Mago',
		img: './res/image/enemy/bwork_mago.png',
		isBoss: false,
		health: [4300, 4300],
		armor: [1600, 1600],
		res: {
			earth: 0,
			fire: 13,
			air: 0,
			water: 8
		},
		dmg: 0,
		gold: 111,
		ogrinas: 12,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [140, 320], hits: 2 },
			1: { type: 'heal', active: true, power: [60, 185], hits: 2 },
			2: { type: 'drop', active: false }
		},
		drop: [214, 215, 216, 217]
	},
	larvaAzulSolitaria: {
		name: 'L. A. Solitaria',
		img: './res/image/enemy/larva_azul.png',
		isBoss: false,
		health: [1, 1],
		armor: [4000, 4000],
		res: {
			earth: 9,
			fire: 5,
			air: -5,
			water: -9
		},
		dmg: 0,
		gold: 95,
		ogrinas: 6,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [90, 130], hits: 4 },
		},
	},
	larvaVerdeSolitaria: {
		name: 'L. V. Solitaria',
		img: './res/image/enemy/larva_verde.png',
		isBoss: false,
		health: [1, 1],
		armor: [4000, 4000],
		res: {
			earth: 9,
			fire: -10,
			air: 14,
			water: 10
		},
		dmg: 0,
		gold: 95,
		ogrinas: 6,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [90, 130], hits: 4 },
		},
	},
	larvaAzul: {
		name: 'Larva Azul',
		img: './res/image/enemy/larva_azul.png',
		isBoss: false,
		health: [4800, 4800],
		armor: [300, 300],
		res: {
			earth: 10,
			fire: 6,
			air: -5,
			water: -5
		},
		dmg: 0,
		gold: 115,
		ogrinas: 12,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 220], hits: 2 },
		},
		drop: [210, 211, 212, 213]
	},
	larvaVerde: {
		name: 'Larva Verde',
		img: './res/image/enemy/larva_verde.png',
		isBoss: false,
		health: [4800, 4800],
		armor: [300, 300],
		res: {
			earth: 5,
			fire: -7,
			air: 10,
			water: 4
		},
		dmg: 0,
		gold: 115,
		ogrinas: 12,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 220], hits: 2 },
			1: { type: 'drop', active: false }
		},
		drop: [210, 211, 212, 213]
	},
	larvaNaranja: {
		name: 'Larva Naranja',
		img: './res/image/enemy/larva_naranja.png',
		isBoss: false,
		health: [4800, 4800],
		armor: [300, 300],
		res: {
			earth: -9,
			fire: -9,
			air: -5,
			water: 25
		},
		dmg: 0,
		gold: 115,
		ogrinas: 12,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 220], hits: 2 },
			1: { type: 'drop', active: false }
		},
		drop: [210, 211, 212, 213]
	},
	larvaDorada: {
		name: 'Larva Dorada',
		img: './res/image/enemy/larva_dorada.png',
		isBoss: false,
		health: [5800, 5800],
		armor: [700, 700],
		res: {
			earth: 0,
			fire: -6,
			air: 0,
			water: 18
		},
		dmg: 0,
		gold: 128,
		ogrinas: 14,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [90, 170], hits: 3 },
			1: { type: 'heal', active: true, power: [100, 120], hits: 1 },
			2: { type: 'dropExo', active: false }
		},
		dropExo: [210, 211, 212, 213]
	},
	bwakViento: {
		name: 'Bwak Viento',
		img: './res/image/enemy/bwak_viento.png',
		isBoss: false,
		health: [4500, 4500],
		armor: [950, 950],
		res: {
			earth: 0,
			fire: 0,
			air: 100,
			water: 0
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 190], hits: 2 },
			1: { type: 'drop', active: false }
		},
		drop: [167, 168, 169, 170, 171, 172, 173]
	},
	bwakTierra: {
		name: 'Bwak Tierra',
		img: './res/image/enemy/bwak_tierra.png',
		isBoss: false,
		health: [4500, 4500],
		armor: [950, 950],
		res: {
			earth: 100,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 190], hits: 2 },
			1: { type: 'drop', active: false }
		},
		drop: [153, 154, 155, 156, 157, 158, 159]
	},
	bwakLlamas: {
		name: 'Bwak Llamas',
		img: './res/image/enemy/bwak_llamas.png',
		isBoss: false,
		health: [4500, 4500],
		armor: [950, 950],
		res: {
			earth: 0,
			fire: 100,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 190], hits: 2 },
			1: { type: 'drop', active: false }
		},
		drop: [160, 161, 162, 163, 164, 165, 166]
	},
	bwakHielo: {
		name: 'Bwak Hielo',
		img: './res/image/enemy/bwak_hielo.png',
		isBoss: false,
		health: [4500, 4500],
		armor: [950, 950],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 100
		},
		dmg: 0,
		gold: 120,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 190], hits: 2 },
			1: { type: 'drop', active: false }
		},
		drop: [174, 175, 176, 177, 178, 179, 180]
	},
	kwakViento: {
		name: 'Kwak Viento',
		img: './res/image/enemy/kwak_viento.png',
		isBoss: false,
		health: [5900, 5900],
		armor: [500, 500],
		res: {
			earth: -100,
			fire: 0,
			air: 100,
			water: 0
		},
		dmg: 0,
		gold: 135,
		ogrinas: 18,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 240], hits: 2 },
			1: { type: 'dropExo', active: false }
		},
		dropExo: [167, 168, 169, 170, 171, 172, 173]
	},
	kwakTierra: {
		name: 'Kwak Tierra',
		img: './res/image/enemy/kwak_tierra.png',
		isBoss: false,
		health: [5900, 5900],
		armor: [500, 500],
		res: {
			earth: 100,
			fire: 0,
			air: -100,
			water: 0
		},
		dmg: 0,
		gold: 135,
		ogrinas: 18,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 240], hits: 2 },
			1: { type: 'dropExo', active: false }
		},
		dropExo: [153, 154, 155, 156, 157, 158, 159]
	},
	kwakLlamas: {
		name: 'Kwak Llamas',
		img: './res/image/enemy/kwak_llamas.png',
		isBoss: false,
		health: [5900, 5900],
		armor: [500, 500],
		res: {
			earth: 0,
			fire: 100,
			air: 0,
			water: -100
		},
		dmg: 0,
		gold: 135,
		ogrinas: 18,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 240], hits: 2 },
			1: { type: 'dropExo', active: false }
		},
		dropExo: [160, 161, 162, 163, 164, 165, 166]
	},
	kwakHielo: {
		name: 'Kwak Hielo',
		img: './res/image/enemy/kwak_hielo.png',
		isBoss: false,
		health: [5900, 5900],
		armor: [500, 500],
		res: {
			earth: 0,
			fire: -100,
			air: 0,
			water: 100
		},
		dmg: 0,
		gold: 135,
		ogrinas: 18,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 240], hits: 2 },
			1: { type: 'dropExo', active: false }
		},
		dropExo: [174, 175, 176, 177, 178, 179, 180]
	},
	crujibola: {
		name: 'Crujibola',
		img: './res/image/enemy/crujibola.png',
		isBoss: false,
		health: [900, 900],
		armor: [2500, 2500],
		res: {
			earth: 24,
			fire: 24,
			air: 24,
			water: 24
		},
		dmg: 0,
		gold: 80,
		ogrinas: 17,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 110], hits: 2 },
			1: { type: 'retPa', active: true, power: [1, 2], hits: 2 },
			2: { type: 'drop', active: false }
		},
		drop: [181, 182, 183, 184, 185, 186, 187]
	},
	crujidor: {
		name: 'Crujidor',
		img: './res/image/enemy/crujidor.png',
		isBoss: false,
		health: [1000, 1000],
		armor: [3600, 3600],
		res: {
			earth: 17,
			fire: 5,
			air: -20,
			water: -2
		},
		dmg: 0,
		gold: 155,
		ogrinas: 22,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [150, 300], hits: 1 },
			1: { type: 'retPa', active: true, power: [0, 3], hits: 1 },
			2: { type: 'shield', active: true, power: [15, 60], hits: 3 },
			3: { type: 'dropExo', active: false }
		},
		dropExo: [181, 182, 183, 184, 185, 186, 187]
	},
	crujidorLlanuras: {
		name: 'Cruj. Llanuras',
		img: './res/image/enemy/crujidor_llanuras.png',
		isBoss: false,
		health: [800, 800],
		armor: [3900, 3900],
		res: {
			earth: -9,
			fire: 8,
			air: 19,
			water: 35
		},
		dmg: 0,
		gold: 155,
		ogrinas: 26,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 110], hits: 4 },
			1: { type: 'debuff', active: true, value: [-4], stat: ['crt'] },
			2: { type: 'dropExo', active: false }
		},
		dropExo: [181, 182, 183, 184, 185, 186, 187]
	},
	kwoknan: {
		name: 'Kwoknan',
		img: './res/image/enemy/kwoknan.png',
		isBoss: true,
		bossId: 21,
		health: [6000, 6000],
		armor: [3000, 3000],
		res: {
			earth: 40,
			fire: 40,
			air: 40,
			water: 40
		},
		dmg: 0,
		gold: 2000,
		ogrinas: 195,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 150], hits: 4 },
			1: { type: 'dropExo', active: false },
		},
		dropExo: [200, 201, 202]
	},
	shinLarva: {
		name: 'Shin Larva',
		img: './res/image/enemy/shin_larva.png',
		isBoss: true,
		bossId: 22,
		health: [7500, 7500],
		armor: [2800, 2800],
		res: {
			earth: 34,
			fire: 34,
			air: -26,
			water: -26
		},
		dmg: 0,
		gold: 2000,
		ogrinas: 195,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [90, 130], hits: 4 },
			1: { type: 'heal', active: true, power: [100, 150], hits: 1 },
			2: { type: 'dropExo', active: false },
		},
		dropExo: [210, 211, 212, 213]
	},
	bworka: {
		name: 'Bworka',
		img: './res/image/enemy/bworka.png',
		isBoss: true,
		bossId: 23,
		health: [14000, 14000],
		armor: [0, 0],
		res: {
			earth: -12,
			fire: 28,
			air: -17,
			water: 36
		},
		dmg: 0,
		gold: 2000,
		ogrinas: 195,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [50, 110], hits: 5 },
			1: { type: 'heal', active: true, power: [400, 600], hits: 1 },
			2: { type: 'dropExo', active: false },
			3: { type: 'dropUsable', active: false }
		},
		dropExo: [234, 235, 236, 237],
		dropUsable: [2]
	},
	crujidorLegendario: {
		name: 'Crj. Legendario',
		img: './res/image/enemy/crujidor_legendario.png',
		isBoss: true,
		bossId: 24,
		health: [2500, 2500],
		armor: [5700, 5700],
		res: {
			earth: -12,
			fire: 28,
			air: -17,
			water: 36
		},
		dmg: 0,
		gold: 2000,
		ogrinas: 195,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [275, 510], hits: 1 },
			1: { type: 'retPa', active: true, power: [0, 3], hits: 1 },
			2: { type: 'shield', active: true, power: [40, 60], hits: 2 },
			3: { type: 'dropExo', active: false },
		},
		dropExo: [201, 202, 203, 204, 205, 206, 207, 208, 209]
	},
	cerdoFarle: {
		name: 'Cerdo Farle',
		img: './res/image/enemy/cerdo_farle.png',
		isBoss: false,
		health: [5000, 5000],
		armor: [0, 0],
		res: {
			earth: 56,
			fire: -20,
			air: -20,
			water: -20
		},
		dmg: 0,
		gold: 154,
		ogrinas: 16,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [100, 250], hits: 3 },
			1: { type: 'retPa', active: true, power: [0, 1], hits: 2 },
		}
	},
	cerdoSerrano: {
		name: 'Cerdo Serrano',
		img: './res/image/enemy/cerdo_serrano.png',
		isBoss: false,
		health: [6000, 6000],
		armor: [500, 500],
		res: {
			earth: 16,
			fire: -24,
			air: 68,
			water: -17
		},
		dmg: 0,
		gold: 184,
		ogrinas: 21,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 350], hits: 1 },
			1: { type: 'retPm', active: true, power: [0, 4], hits: 1 },
		}
	},
	donDessangre: {
		name: 'Don Dessangre',
		img: './res/image/enemy/don_dessangre.png',
		isBoss: false,
		health: [8500, 8500],
		armor: [4000, 4000],
		res: {
			earth: -19,
			fire: -20,
			air: 26,
			water: -17
		},
		dmg: 0,
		gold: 240,
		ogrinas: 24,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 210], hits: 2 },
			1: { type: 'dmgUp', active: true, power: [10, 15], hits: 1 },
		}
	},
	donDorgano: {
		name: 'Don Dórgano',
		img: './res/image/enemy/don_dorgano.png',
		isBoss: false,
		health: [12000, 12000],
		armor: [0, 0],
		res: {
			earth: -20,
			fire: 54,
			air: -20,
			water: -20
		},
		dmg: 0,
		gold: 270,
		ogrinas: 27,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 110], hits: 3 },
			1: { type: 'dmgUp', active: true, power: [15, 20], hits: 1 },
		}
	},
	abraknido: {
		name: 'Abráknido',
		img: './res/image/enemy/abraknido.png',
		isBoss: false,
		health: [8000, 8000],
		armor: [3000, 3000],
		res: {
			earth: 25,
			fire: -20,
			air: -17,
			water: 23
		},
		dmg: 0,
		gold: 184,
		ogrinas: 21,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 250], hits: 2 },
			1: { type: 'heal', active: true, power: [200, 300], hits: 1 },
			2: { type: 'retPa', active: true, power: [0, 2], hits: 1 },
		}
	},
	abraknidoOscuro: {
		name: 'Abráknido Osc.',
		img: './res/image/enemy/abraknido_oscuro.png',
		isBoss: false,
		health: [11000, 11000],
		armor: [2000, 2000],
		res: {
			earth: 10,
			fire: 15,
			air: -10,
			water: 15
		},
		dmg: 0,
		gold: 240,
		ogrinas: 24,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [250, 300], hits: 1 },
			1: { type: 'dmgUp', active: true, power: [30, 40], hits: 1 },
		}
	},
	abrakno: {
		name: 'Abrakno',
		img: './res/image/enemy/abrakno.png',
		isBoss: false,
		health: [7000, 7000],
		armor: [3600, 3600],
		res: {
			earth: -18,
			fire: 26,
			air: 13,
			water: -7
		},
		dmg: 0,
		gold: 190,
		ogrinas: 18,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [50, 120], hits: 4 },
			1: { type: 'retPa', active: true, power: [0, 2], hits: 2 },
		}
	},
	araknoton: {
		name: 'Araknoton',
		img: './res/image/enemy/araknoton.png',
		isBoss: false,
		health: [4600, 4600],
		armor: [8500, 8500],
		res: {
			earth: -7,
			fire: 19,
			air: 12,
			water: 9
		},
		dmg: 0,
		gold: 185,
		ogrinas: 15,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [240, 280], hits: 2 },
			1: { type: 'debuff', active: true, value: [-10], stat: ['cha'] }
		}
	},
	trooll: {
		name: 'Trooll',
		img: './res/image/enemy/trooll.png',
		isBoss: false,
		health: [14000, 14000],
		armor: [1000, 1000],
		res: {
			earth: 28,
			fire: -10,
			air: 15,
			water: -20
		},
		dmg: 0,
		gold: 290,
		ogrinas: 30,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [450, 470], hits: 1 },
			1: { type: 'dmgUp', active: true, power: [20, 25], hits: 1 },
			2: { type: 'dropUsable', active: false }
		},
		dropUsable: [2]
	},
	mediulubo: {
		name: 'Mediulubo',
		img: './res/image/enemy/mediulubo.png',
		isBoss: false,
		health: [9000, 9000],
		armor: [2000, 2000],
		res: {
			earth: -9,
			fire: 34,
			air: -5,
			water: 0
		},
		dmg: 0,
		gold: 250,
		ogrinas: 22,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [100, 200], hits: 2 },
			1: { type: 'dmgUp', active: true, power: [25, 35], hits: 1 },
		}
	},
	kanugro: {
		name: 'Kanugro',
		img: './res/image/enemy/kanugro.png',
		isBoss: false,
		health: [6500, 6500],
		armor: [3000, 3000],
		res: {
			earth: 10,
			fire: 20,
			air: -8,
			water: -9
		},
		dmg: 0,
		gold: 180,
		ogrinas: 19,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 95], hits: 4 },
			1: { type: 'heal', active: true, power: [50, 70], hits: 2 },
			2: { type: 'retPa', active: true, power: [0, 1], hits: 2 },
		}
	},
	abraknidoAncestral: {
		name: 'A. Ancestral',
		img: './res/image/enemy/abraknido_ancestral.png',
		isBoss: true,
		bossId: 25,
		health: [8200, 8200],
		armor: [15900, 15900],
		res: {
			earth: 30,
			fire: -5,
			air: -5,
			water: 30
		},
		dmg: 0,
		gold: 2650,
		ogrinas: 210,
		aura: { reconstitucionAncestral: true },
		action: {
			0: { type: 'attack', active: true, power: [220, 330], hits: 2 },
			1: { type: 'dmgUp', active: true, power: [24, 32], hits: 1 },
			2: { type: 'reconstitucionAncestral', active: false },
			3: { type: 'dropExo', active: false },
			4: { type: 'dropUsable', active: false }
		},
		dropExo: [252, 253, 254, 255, 256, 257],
		dropUsable: [3]
	},
	maxilubo: {
		name: 'Maxilubo',
		img: './res/image/enemy/maxilubo.png',
		isBoss: true,
		bossId: 26,
		health: [7000, 7000],
		armor: [6200, 6200],
		res: {
			earth: 32,
			fire: -5,
			air: 42,
			water: 42
		},
		dmg: 0,
		gold: 2650,
		ogrinas: 210,
		aura: { rabiaMaxilubo: true },
		action: {
			0: { type: 'attack', active: true, power: [500, 670], hits: 1 },
			1: { type: 'dmgUp', active: true, power: [20, 40], hits: 1 },
			2: { type: 'rabiaMaxilubo', active: false },
			3: { type: 'dropUsable', active: false }
		},
		dropUsable: [3]
	},
	dragocerdo: {
		name: 'Dragocerdo',
		img: './res/image/enemy/dragocerdo.png',
		isBoss: true,
		bossId: 27,
		health: [14000, 14000],
		armor: [6000, 6000],
		res: {
			earth: 38,
			fire: 38,
			air: -5,
			water: -5
		},
		dmg: 0,
		gold: 2250,
		ogrinas: 210,
		aura: { pestilenciaDragocerdo: true },
		action: {
			0: { type: 'attack', active: true, power: [100, 200], hits: 2 },
			1: { type: 'poison', active: true, power: [5, 15], hits: 1 },
			2: { type: 'pestilenciaDragocerdo', active: false},
			3: { type: 'dropExo', active: false },
			4: { type: 'dropUsable', active: false }
		},
		dropExo: [246, 247, 248, 249, 250, 251],
		dropUsable: [3]
	},
	cuerbok: {
		name: 'Cuerbok',
		img: './res/image/enemy/cuerbok.png',
		isBoss: false,
		health: [8000, 8000],
		armor: [0, 0],
		res: {
			earth: -24,
			fire: 30,
			air: 22,
			water: -24
		},
		dmg: 0,
		gold: 201,
		ogrinas: 26,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [90, 125], hits: 4 },
			1: { type: 'debuff', active: true, value: [-50, -50], stat: ['str', 'agi'] },
			2: { type: 'drop', active: false },
		},
		drop: [238, 239, 240, 241]
	},
	zorrowapo: {
		name: 'Zorrowapo',
		img: './res/image/enemy/zorrowapo.png',
		isBoss: false,
		health: [7200, 7200],
		armor: [3000, 3000],
		res: {
			earth: -10,
			fire: 48,
			air: -19,
			water: -22
		},
		dmg: 0,
		gold: 211,
		ogrinas: 28,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [240, 270], hits: 2 },
			1: { type: 'dropExo', active: false },
		},
		dropExo: [238, 239, 240, 241]
	},
	bebedor: {
		name: 'Bebedor',
		img: './res/image/enemy/bebedor.png',
		isBoss: false,
		health: [2500, 2500],
		armor: [7000, 7000],
		res: {
			earth: -9,
			fire: -9,
			air: -9,
			water: 48
		},
		dmg: 0,
		gold: 245,
		ogrinas: 30,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [440, 500], hits: 1 },
			1: { type: 'retPa', active: true, power: [0, 2], hits: 4 },
			2: { type: 'dropExo', active: false },
		},
		dropExo: [238, 239, 240, 241]
	},
	cuerbokDomesticado: {
		name: 'C. Domesticado',
		img: './res/image/enemy/cuerbok_domesticado.png',
		isBoss: false,
		health: [6000, 6000],
		armor: [2000, 2000],
		res: {
			earth: -14,
			fire: 28,
			air: -25,
			water: 28
		},
		dmg: 0,
		gold: 220,
		ogrinas: 21,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [160, 200], hits: 3 },
			1: { type: 'retPm', active: true, power: [0, 2], hits: 2 },
			2: { type: 'dropExo', active: false },
		},
		dropExo: [238, 239, 240, 241]
	},
	rataPeleona: {
		name: 'Rata peleona',
		img: './res/image/enemy/rata_peleona.png',
		isBoss: false,
		health: [5000, 5000],
		armor: [400, 400],
		res: {
			earth: 9,
			fire: -28,
			air: -6,
			water: 26
		},
		dmg: 0,
		gold: 194,
		ogrinas: 18,
		aura: {},
		action: {
			0: { type: 'poison', active: true, power: [50, 80] },
			1: { type: 'debuff', active: true, value: [-60], stat: ['pot'] }
		}
	},
	chamanAlcantarilla: {
		name: 'Chamán Alcant.',
		img: './res/image/enemy/chaman_alcantarilla.png',
		isBoss: false,
		health: [4000, 4000],
		armor: [0, 0],
		res: {
			earth: 24,
			fire: 71,
			air: 5,
			water: -29
		},
		dmg: 0,
		gold: 199,
		ogrinas: 23,
		aura: {},
		action: {
			0: { type: 'heal', active: true, power: [50, 100], hits: 3 },
			1: { type: 'poison', active: true, power: [30, 50] },
			2: { type: 'debuff', active: true, value: [-50], stat: ['int'] }
		}
	},
	rataParda: {
		name: 'Rata parda',
		img: './res/image/enemy/rata_parda.png',
		isBoss: false,
		health: [8300, 8300],
		armor: [700, 700],
		res: {
			earth: 28,
			fire: 9,
			air: -10,
			water: -30
		},
		dmg: 0,
		gold: 208,
		ogrinas: 22,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [70, 110], hits: 3 },
			1: { type: 'poison', active: true, power: [40, 50] },
			2: { type: 'debuff', active: true, value: [-10, -2], stat: ['dmg', 'res'] }
		}
	},
	rataKana: {
		name: 'Rata kaña',
		img: './res/image/enemy/rata_kana.png',
		isBoss: false,
		health: [7000, 7000],
		armor: [1200, 1200],
		res: {
			earth: 73,
			fire: -9,
			air: -30,
			water: 7
		},
		dmg: 0,
		gold: 207,
		ogrinas: 24,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [40, 60], hits: 3 },
			1: { type: 'fury', active: false, power: [20, 35] },
		}
	},
	rataMatona: {
		name: 'Rata matona',
		img: './res/image/enemy/rata_matona.png',
		isBoss: false,
		health: [5000, 5000],
		armor: [5000, 5000],
		res: {
			earth: -10,
			fire: -30,
			air: 69,
			water: 8
		},
		dmg: 0,
		gold: 240,
		ogrinas: 28,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [100, 150], hits: 2 },
			1: { type: 'dmgUp', active: false, power: [40, 50] },
		}
	},
	rataKani: {
		name: 'Rata kani',
		img: './res/image/enemy/rata_kani.png',
		isBoss: false,
		health: [5000, 5000],
		armor: [5000, 5000],
		res: {
			earth: -30,
			fire: -10,
			air: 8,
			water: 69
		},
		dmg: 0,
		gold: 240,
		ogrinas: 28,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [100, 150], hits: 2 },
			1: { type: 'dmgUp', active: false, power: [40, 50] },
		}
	},
	rataBlanca: {
		name: 'Rata Blanca',
		img: './res/image/enemy/rata_blanca.png',
		isBoss: true,
		bossId: 28,
		health: [13000, 13000],
		armor: [4000, 4000],
		res: {
			earth: 0,
			fire: 0,
			air: 0,
			water: 0
		},
		dmg: 0,
		gold: 3000,
		ogrinas: 260,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [300, 400], hits: 2 },
			1: { type: 'raspadura', active: false },
			2: { type: 'dropExo', active: false },
		},
		dropExo: [285, 286, 287, 288, 289, 290, 291]
	},
	rataNegra: {
		name: 'Rata Negra',
		img: './res/image/enemy/rata_negra.png',
		isBoss: true,
		bossId: 29,
		health: [13000, 13000],
		armor: [4000, 4000],
		res: {
			earth: 50,
			fire: -20,
			air: -20,
			water: 30
		},
		dmg: 0,
		gold: 3000,
		ogrinas: 260,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [1, 999], hits: 1 },
			1: { type: 'kakemata', active: false },
			2: { type: 'dropExo', active: false },
		},
		dropExo: [292, 293, 294, 295, 296, 297, 298]
	},
	maestroCuerbok: {
		name: 'M. Cuerbok',
		img: './res/image/enemy/maestro_cuerbok.png',
		isBoss: true,
		bossId: 30,
		health: [8000, 8000],
		armor: [6500, 6500],
		res: {
			earth: 50,
			fire: -20,
			air: -20,
			water: 30
		},
		dmg: 0,
		gold: 3000,
		ogrinas: 260,
		aura: { caparazonAlas: true },
		action: {
			0: { type: 'attack', active: true, power: [120, 150], hits: 4 },
			1: { type: 'caparazonAlas', active: false },
			2: { type: 'dropExo', active: false },
		},
		dropExo: [283, 284]
	},
	drakoalak: {
		name: 'Drakoalak',
		img: './res/image/enemy/drakoalak.png',
		isBoss: false,
		health: [12000, 12000],
		armor: [3000, 3000],
		res: {
			earth: -9,
			fire: -5,
			air: -18,
			water: -7
		},
		dmg: 0,
		gold: 230,
		ogrinas: 31,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [130, 150], hits: 4 },
			1: { type: 'dmgUp', active: false, power: [20, 30] },
			2: { type: 'drop', active: false },
		},
		drop: [270, 271, 272, 273, 274, 275, 276]
	},
	guerreroKoalak: {
		name: 'Guerrero Koalak',
		img: './res/image/enemy/guerrero_koalak.png',
		isBoss: false,
		health: [9100, 9100],
		armor: [4600, 4600],
		res: {
			earth: 17,
			fire: 18,
			air: -16,
			water: -8
		},
		dmg: 0,
		gold: 245,
		ogrinas: 34,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [520, 600], hits: 1 },
			1: { type: 'dmgUp', active: false, power: [30, 40] },
			2: { type: 'fury', active: false, power: [10, 12] },
			3: { type: 'drop', active: false },
		},
		drop: [270, 271, 272, 273, 274, 275, 276]
	},
	koalakForestal: {
		name: 'Koalak Forestal',
		img: './res/image/enemy/koalak_forestal.png',
		isBoss: false,
		health: [11500, 11500],
		armor: [2800, 2800],
		res: {
			earth: 14,
			fire: 24,
			air: -12,
			water: -23
		},
		dmg: 0,
		gold: 240,
		ogrinas: 30,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [220, 275], hits: 2 },
			1: { type: 'retPm', active: true, power: [0, 3], hits: 1 },
			2: { type: 'fury', active: false, power: [9, 15] },
			3: { type: 'drop', active: false },
		},
		drop: [270, 271, 272, 273, 274, 275, 276]
	},
	koalakSalvaje: {
		name: 'Koalak Salvaje',
		img: './res/image/enemy/koalak_salvaje.png',
		isBoss: false,
		health: [9000, 9000],
		armor: [1400, 1400],
		res: {
			earth: 11,
			fire: -8,
			air: 11,
			water: -8
		},
		dmg: 0,
		gold: 268,
		ogrinas: 34,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 220], hits: 4 },
			1: { type: 'drop', active: false },
		},
		drop: [270, 271, 272, 273, 274, 275, 276]
	},
	koalakSanguineo: {
		name: 'Koalak Sanguíneo',
		img: './res/image/enemy/koalak_sanguineo.png',
		isBoss: false,
		health: [12200, 12200],
		armor: [2800, 2800],
		res: {
			earth: 20,
			fire: 18,
			air: -19,
			water: -10
		},
		dmg: 0,
		gold: 280,
		ogrinas: 35,
		aura: {},
		action: {
			0: { type: 'lifeSteal', active: true, power: [90, 150], hits: 5 },
			1: { type: 'drop', active: false },
		},
		drop: [270, 271, 272, 273, 274, 275, 276]
	},
	maestroKoalak: {
		name: 'Maestro Koalak',
		img: './res/image/enemy/maestro_koalak.png',
		isBoss: false,
		health: [9000, 9000],
		armor: [4000, 4000],
		res: {
			earth: -10,
			fire: 58,
			air: -10,
			water: -10
		},
		dmg: 0,
		gold: 270,
		ogrinas: 33,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [80, 180], hits: 3 },
			1: { type: 'retPa', active: true, power: [1, 2], hits: 3 },
			2: { type: 'drop', active: false },
		},
		drop: [270, 271, 272, 273, 274, 275, 276]
	},
	tofudriza: {
		name: 'Tofudriza',
		img: './res/image/enemy/tofudriza.png',
		isBoss: false,
		health: [14000, 14000],
		armor: [1000, 1000],
		res: {
			earth: 0,
			fire: 25,
			air: -12,
			water: 42
		},
		dmg: 0,
		gold: 218,
		ogrinas: 29,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [180, 200], hits: 3 },
			1: { type: 'heal', active: true, power: [200, 300], hits: 2 },
		},
	},
	tofuitoFeo: {
		name: 'Tofuito feo',
		img: './res/image/enemy/tofuito_feo.png',
		isBoss: false,
		health: [11000, 11000],
		armor: [0, 0],
		res: {
			earth: 27,
			fire: -12,
			air: 42,
			water: -30
		},
		dmg: 0,
		gold: 263,
		ogrinas: 28,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [130, 170], hits: 5 },
			1: { type: 'fury', active: false, power: [8, 16] },
		},
	},
	tofulminante: {
		name: 'Tofulminante',
		img: './res/image/enemy/tofulminante.png',
		isBoss: false,
		health: [9700, 9700],
		armor: [0, 0],
		res: {
			earth: 14,
			fire: 42,
			air: -28,
			water: -22
		},
		dmg: 0,
		gold: 254,
		ogrinas: 33,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 200], hits: 4 },
			1: { type: 'dmgUp', active: false, power: [20, 30] },
		},
	},
	tofuluche: {
		name: 'Tofuluche',
		img: './res/image/enemy/tofuluche.png',
		isBoss: false,
		health: [16700, 16700],
		armor: [4200, 4200],
		res: {
			earth: -40,
			fire: 18,
			air: 43,
			water: 27
		},
		dmg: 0,
		gold: 320,
		ogrinas: 42,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 200], hits: 2 },
			1: { type: 'fury', active: false, power: [9, 15] },
		},
	},
	tofuzmo: {
		name: 'Tofuzmo',
		img: './res/image/enemy/tofuzmo.png',
		isBoss: false,
		health: [8650, 8650],
		armor: [900, 900],
		res: {
			earth: 6,
			fire: -26,
			air: 32,
			water: -20
		},
		dmg: 0,
		gold: 263,
		ogrinas: 28,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [200, 250], hits: 3 },
			1: { type: 'fury', active: false, power: [10, 14] },
		},
	},
	tofuReal: {
		name: 'Tofu Real',
		img: './res/image/enemy/tofu_real.png',
		isBoss: true,
		bossId: 31,
		health: [25000, 25000],
		armor: [0, 0],
		res: {
			earth: 23,
			fire: 18,
			air: 58,
			water: 23
		},
		dmg: 0,
		gold: 5000,
		ogrinas: 345,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [100, 110], hits: 5 },
			1: { type: 'despedazamiento', active: false}
			//1: { type: 'dropExo', active: false },
		},
		//dropExo: [285, 286, 287, 288, 289, 290, 291]
	},
	skonk: {
		name: 'Skonk',
		img: './res/image/enemy/skonk.png',
		isBoss: true,
		bossId: 32,
		health: [16000, 16000],
		armor: [12000, 12000],
		res: {
			earth: 23,
			fire: 18,
			air: 58,
			water: 23
		},
		dmg: 0,
		gold: 5000,
		ogrinas: 358,
		aura: { palabraRevigorizante: true},
		action: {
			0: { type: 'attack', active: true, power: [600, 850], hits: 1 },
			1: { type: 'heal', active: true, power: [100, 250], hits: 1 },
			2: { type: 'retPa', active: true, power: [0, 1], hits: 2 },
			3: { type: 'palabraRevigorizante', active: false }
		},
	},
	ramaInvocadora: {
		name: 'Rama Invoc.',
		img: './res/image/enemy/rama_invocadora.png',
		isBoss: false,
		health: [1000, 1000],
		armor: [35000, 35000],
		res: {
			earth: -20,
			fire: 50,
			air: -20,
			water: 50
		},
		dmg: 0,
		gold: 300,
		ogrinas: 100,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [120, 140], hits: 4 },
			1: { type: 'shield', active: true, power: [50, 90], hits: 2 },
			2: { type: 'dmgUp', active: true, power: [15, 20], hits: 1 },
		}
	},
	ramaCuradora: {
		name: 'Rama Curadora',
		img: './res/image/enemy/rama_curadora.png',
		isBoss: false,
		health: [17000, 17000],
		armor: [0, 0],
		res: {
			earth: 50,
			fire: -20,
			air: 50,
			water: -20
		},
		dmg: 0,
		gold: 300,
		ogrinas: 100,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 140], hits: 2 },
			1: { type: 'heal', active: true, power: [100, 600], hits: 3 },
		},
	},
	robleBlando: {
		name: 'Roble Blando',
		img: './res/image/enemy/roble_blando.png',
		isBoss: true,
		health: [28200, 28200],
		armor: [7900, 7900],
		res: {
			earth: 52,
			fire: 52,
			air: -5,
			water: -5
		},
		dmg: 0,
		gold: 2900,
		ogrinas: 350,
		aura: {},
		action: {
			0: { type: 'attack', active: true, power: [60, 340], hits: 2 },
			1: { type: 'heal', active: true, power: [100, 600], hits: 1 },
			2: { type: 'shield', active: true, power: [30, 60], hits: 2 },
		},
	},
}