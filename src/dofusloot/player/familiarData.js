export const familiarData = {
	miaumiau: {
		id: 0,
		keyName: 'miaumiau',
		name: 'Miaumiau',
		portrait: './res/image/familiar/miaumiau.png',
		itemImg: './res/image/familiar/miaumiauItem.png',
		price: 0,
		stat: {
			str: 0,
			int: 0,
			agi: 0,
			cha: 0
		},
		scale: {
			normal: {
				type: 'random',
				stat: ['str', 'int', 'agi', 'cha'],
				value: [4],
			},
			boss: {
				type: 'fix',
				stat: ['str', 'int', 'agi', 'cha'],
				value: [5, 5, 5, 5],
			}
		},
		description: `Esta bola de pelo te seguirá por todas partes y se alimentará con los restos de tus victimas. <br><br>
					  Derrotar enemigo: +4 Elemento (aleatorio) <br>
				      Derrotar jefe: +5 Elementos`,
	    shortDescription: `Derrotar enemigo: +4 Elemento (aleatorio) <br>
				      Derrotar jefe: +5 a todos los elementos`,
	},
	boluto: {
		id: 1,
		keyName: 'boluto',
		name: 'Boluto',
		portrait: './res/image/familiar/boluto.png',
		itemImg: './res/image/familiar/bolutoItem.png',
		price: 50,
		stat: {
			vit: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['vit'],
				value: [3],
			},
			boss: {
				type: 'fix',
				stat: ['vit'],
				value: [10],
			}
		},
		description: `Este pequeño jalató te seguirá por todas partes y se alimentará con los restos de tus victimas. <br><br>
				      Derrotar enemigo: +3 Vitalidad <br>
				      Derrotar jefe: +10 Vitalidad`,
		shortDescription: `Derrotar enemigo: +3 Vitalidad <br>
				      Derrotar jefe: +10 Vitalidad`,
	},
	fotasma: {
		id: 2,
		keyName: 'fotasma',
		name: 'Fotasma',
		portrait: './res/image/familiar/fotasma.png',
		itemImg: './res/image/familiar/fotasmaItem.png',
		price: 200,
		stat: {
			vit: 0,
			arm: 0,
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['vit'],
				value: [4],
			},
			boss: {
				type: 'fix',
				stat: ['arm'],
				value: [12],
			}
		},
		description: `Esta translucido te seguirá por todas partes y se alimentará de las almas de tus victimas.  <br><br>
				      Derrotar enemigo: +4 Vitalidad <br>
				      Derrotar jefe: +12 Armadura`,
		shortDescription: `Derrotar enemigo: +4 Vitalidad <br>
				      Derrotar jefe: +12 Armadura`,
	},
	tortuga: {
		id: 3,
		keyName: 'tortuga',
		name: 'Tortuga',
		portrait: './res/image/familiar/tortuga.png',
		itemImg: './res/image/familiar/tortugaItem.png',
		price: 200,
		stat: {
			vit: 0,
			cur: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['cur', 'vit'],
				value: [2],
			},
			boss: {
				type: 'fix',
				stat: ['cur', 'vit'],
				value: [3, 12],
			}
		},
		description: `Esta tortugita te seguirá por todas partes y se alimentará con los restos de tus victimas.  <br><br>
				      Derrotar enemigo: +2 Vitalidad o Curas (aleatorio)<br>
				      Derrotar jefe: +12 Vitalidad, +3 Curas`,
		shortDescription: `Derrotar enemigo: +2 Vitalidad o Curas (aleatorio)<br>
				      Derrotar jefe: +12 Vitalidad, +3 Curas`,
	},
	cuerbokito: {
		id: 4,
		keyName: 'cuerbokito',
		name: 'Cuerbokito',
		portrait: './res/image/familiar/cuerbokito.png',
		itemImg: './res/image/familiar/cuerbokitoItem.png',
		price: 400,
		stat: {
			pp: 0,
			wis: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['pp', 'wis'],
				value: [10, 5],
			},
			boss: {
				type: 'fix',
				stat: ['pp'],
				value: [40],
			}
		},
		description: `Este simpático cuervo te seguirá por todas partes y se alimentará con los restos de tus victimas (es un cuervo).  <br><br>
				      Derrotar enemigo: +10 Prospección, +5 Sabiduria<br>
				      Derrotar jefe: +40 Prospección`,
		shortDescription: `Derrotar enemigo: +10 Prospección, +5 Sabiduria<br>
				      Derrotar jefe: +40 Prospección`,
	},
	wabbit: {
		id: 5,
		keyName: 'wabbit',
		name: 'Wabbit',
		portrait: './res/image/familiar/wabbit.png',
		itemImg: './res/image/familiar/wabbitItem.png',
		price: 750,
		stat: {
			str: 0,
			int: 0,
			agi: 0,
			cha: 0,
			pot: 0,
			wis: 0
		},
		scale: {
			normal: {
				type: 'random',
				stat: ['str', 'int', 'agi', 'cha', 'wis'],
				value: [3],
			},
			boss: {
				type: 'fix',
				stat: ['pot'],
				value: [12],
			}
		},
		description: `Este conejo doméstico parece que intenta hablar pero no se le entiende, se alimentará de tus enemigos al grito de "waisa".  <br><br>
				      Derrotar enemigo: +3 Elemento o Sabiduria (aleatorio) <br>
				      Derrotar jefe: +12 Potencia`,
		shortDescription: `Derrotar enemigo: +3 Elemento o Sabiduria (aleat.) <br>
				      Derrotar jefe: +12 Potencia`,
	},
	miscaludo: {
		id: 6,
		keyName: 'miscaludo',
		name: 'Miscaludo',
		portrait: './res/image/familiar/miscaludo.png',
		itemImg: './res/image/familiar/miscaludoItem.png',
		price: 2000,
		stat: {
			vit: 0,
			arm: 0,
			res: 0
		},
		scale: {
			normal: {
				type: 'random',
				stat: ['vit', 'arm'],
				value: [3],
			},
			boss: {
				type: 'fix',
				stat: ['res'],
				value: [1],
			}
		},
		description: `Esta adorable seta te seguirá por todas partes y se alimentará con los restos de tus victimas.  <br><br>
				      Derrotar enemigo: +3 Vitalidad o Armadura (aleatorio)<br>
				      Derrotar jefe: +1% Resistencia`,
		shortDescription: `Derrotar enemigo: +3 Vitalidad o Armadura (aleat.)<br>
				      Derrotar jefe: +1% Resistencia`,
	},
	bilby: {
		id: 7,
		keyName: 'bilby',
		name: 'Bilby',
		portrait: './res/image/familiar/bilby.png',
		itemImg: './res/image/familiar/bilbyItem.png',
		price: 3000,
		stat: {
			dmg: 0,
			strDmg: 0,
			intDmg: 0,
			agiDmg: 0,
			chaDmg: 0
		},
		scale: {
			normal: {
				type: 'random',
				stat: ['strDmg', 'intDmg', 'agiDmg', 'chaDmg'],
				value: [2],
			},
			boss: {
				type: 'fix',
				stat: ['dmg'],
				value: [7],
			}
		},
		description: `Esta gelatina cuajada te seguirá por todas partes y se alimentará con los restos de tus victimas.  <br><br>
				      Derrotar enemigo: +2 Daño elemental (aleatorio)<br>
				      Derrotar jefe: +7 Daños`,
		shortDescription: `Derrotar enemigo: +2 Daño elemental (aleatorio)<br>
				      Derrotar jefe: +7 Daños`,
	},
	lokulto: {
		id: 8,
		keyName: 'lokulto',
		name: 'Lokulto',
		portrait: './res/image/familiar/lokulto.png',
		itemImg: './res/image/familiar/lokultoItem.png',
		price: 6500,
		stat: {
			crt: 0,
			crtDmg: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['crtDmg'],
				value: [1],
			},
			boss: {
				type: 'fix',
				stat: ['crt','crtDmg'],
				value: [2, 10],
			}
		},
		description: `Este kaskarol intentará seguirte por todas partes y se alimentará con los restos de tus victimas.  <br><br>
				      Derrotar enemigo: +1 Daño crítico <br>
				      Derrotar jefe: +2% Crítico, +10 Daño crítico`,
		shortDescription: `Derrotar enemigo: +1 Daño crítico <br>
				      Derrotar jefe: +2% Crítico, +10 Daño crítico`,
	},
	bulbesor: {
		id: 9,
		keyName: 'bulbesor',
		name: 'Bulbesor',
		portrait: './res/image/familiar/bulbesor.png',
		itemImg: './res/image/familiar/bulbesorItem.png',
		price: 8000,
		stat: {
			str: 0,
			strDmg: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['str'],
				value: [8],
			},
			boss: {
				type: 'fix',
				stat: ['strDmg'],
				value: [3],
			}
		},
		description: `Este pequeño equeje te seguirá por todas partes y se alimentará con los restos de tus victimas.  <br><br>
				      Derrotar enemigo: +8 Fuerza <br>
				      Derrotar jefe: +3 Daño tierra`,
		shortDescription: `Derrotar enemigo: +8 Fuerza <br>
				      Derrotar jefe: +3 Daño tierra`,
	},
	besosete: {
		id: 10,
		keyName: 'besosete',
		name: 'Besosete',
		portrait: './res/image/familiar/besosete.png',
		itemImg: './res/image/familiar/besoseteItem.png',
		price: 8000,
		stat: {
			int: 0,
			intDmg: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['int'],
				value: [8],
			},
			boss: {
				type: 'fix',
				stat: ['intDmg'],
				value: [3],
			}
		},
		description: `Este golosototín te seguirá por todas partes y se alimentará con los restos de tus victimas.  <br><br>
				      Derrotar enemigo: +8 Inteligencia <br>
				      Derrotar jefe: +3 Daño fuego`,
		shortDescription: `Derrotar enemigo: +8 Inteligencia <br>
				      Derrotar jefe: +3 Daño fuego`,
	},
	tejaluche: {
		id: 11,
		keyName: 'tejaluche',
		name: 'Tejaluche',
		portrait: './res/image/familiar/tejaluche.png',
		itemImg: './res/image/familiar/tejalucheItem.png',
		price: 8000,
		stat: {
			agi: 0,
			agiDmg: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['agi'],
				value: [8],
			},
			boss: {
				type: 'fix',
				stat: ['agiDmg'],
				value: [3],
			}
		},
		description: `Este afable tejón te seguirá por todas partes y se alimentará con los restos de tus victimas.  <br><br>
				      Derrotar enemigo: +8 Agilidad <br>
				      Derrotar jefe: +3 Daño aire`,
		shortDescription: ` Derrotar enemigo: +8 Agilidad <br>
				      Derrotar jefe: +3 Daño aire`,
	},
	kaniglups: {
		id: 12,
		keyName: 'kaniglups',
		name: 'Kaniglúps',
		portrait: './res/image/familiar/kaniglups.png',
		itemImg: './res/image/familiar/kaniglupsItem.png',
		price: 8000,
		stat: {
			cha: 0,
			chaDmg: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['cha'],
				value: [8],
			},
			boss: {
				type: 'fix',
				stat: ['chaDmg'],
				value: [3],
			}
		},
		description: `Este pequeño kaniglú te seguirá por todas partes y se alimentará con los restos de tus victimas.  <br><br>
				      Derrotar enemigo: +8 Suerte <br>
				      Derrotar jefe: +3 Daño agua`,
		shortDescription: `Derrotar enemigo: +8 Suerte <br>
				      Derrotar jefe: +3 Daño agua`,
	},
	wauwau: {
		id: 13,
		keyName: 'wauwau',
		name: 'Wauwau',
		portrait: './res/image/familiar/wauwau.png',
		itemImg: './res/image/familiar/wauwauItem.png',
		price: 12500,
		stat: {
			pot: 0,
			wepDmg: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['pot'],
				value: [3],
			},
			boss: {
				type: 'fix',
				stat: ['wepDmg'],
				value: [1],
			}
		},
		description: `Este perrete te seguirá por todas partes y se comerá a tus enemigos como si de pienso se tratara.  <br><br>
				      Derrotar enemigo: +3 Potencia <br>
				      Derrotar jefe: +1% Daño armas`,
		shortDescription: ` Derrotar enemigo: +3 Potencia <br>
				      Derrotar jefe: +1% Daño armas`,
	},
	kuakua: {
		id: 14,
		keyName: 'kuakua',
		name: 'Kuakuá',
		portrait: './res/image/familiar/kuakua.png',
		itemImg: './res/image/familiar/kuakuaItem.png',
		price: 15000,
		stat: {
			pot: 0,
			speDmg: 0
		},
		scale: {
			normal: {
				type: 'fix',
				stat: ['pot'],
				value: [3],
			},
			boss: {
				type: 'fix',
				stat: ['speDmg'],
				value: [1],
			}
		},
		description: `Este agresivo pato perteneció antaño a un legendario Sadida, ahora solo quiere comerse a sus enemigos. <br><br>
				      Derrotar enemigo: +3 Potencia <br>
				      Derrotar jefe: +1% Daño hechizos`,
		shortDescription: `Derrotar enemigo: +3 Potencia <br> Derrotar jefe: +1% Daño hechizos`,
	},
}