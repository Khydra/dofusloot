import {gameData} from '../dofusloot/gameData.js';
import {player, location, familiar, stash, enemy, shop, inventory, spellPool} from '../dofusloot/game.js';
import {enemyData} from '../dofusloot/enemy/enemyData.js';
import {spellData, spellPoolData} from '../dofusloot/player/spellData.js';

export function newGameData(char, familiar, map, stash, spellPool) {
	gameData.player = {
		name: JSON.parse(window.localStorage.getItem("profile")).name,
		class: char,
		gold: char.stat.gold,
		ogrinas: 0,
		stat: {
			vit: [char.stat.vit, char.stat.vit],
			arm: [char.stat.arm, char.stat.arm],
			pa: [6, 6],
			pm: [3, 3],
			pot: [0, 0],
			str: [0, 0],
			int: [0, 0],
			agi: [0, 0],
			cha: [0, 0],	
			crt: [0, 0],
			dmg: [0, 0],
			strDmg: [0, 0],
			intDmg: [0, 0],
			agiDmg: [0, 0],
			chaDmg: [0, 0],
			crtDmg: [0, 0],	
			tpDmg: [0, 0],
			speDmg: [0, 0],
			wepDmg: [0, 0],
			res: [0, 0],
			reDmg: [0, 0],
			cur: [0, 0],
			wis: [0, 0],
			pp: [char.stat.pp, char.stat.pp],
		},
		spell: spellPool,
		effect: {
			poison: 0,
			bloodPact: false,
			activatedTraps: 0
		},
		summon: []
	}

	gameData.location = {
		map: map,
		zone: map.zone[0][0],
		zoneNum: 0,
		pathNum: 0,
		roomNum: 1,
	}

	gameData.familiar = {
		name: familiar.name,
		itemImg: familiar.itemImg,
		stat: familiar.stat,
		scale: familiar.scale
	}
	
	gameData.inventory = {
		bag: [],
		gear: {
			hat: null,
			amulet: null,
			cloack: null,
			weapon: null,
			belt: null,
			shield: null,
			ring: null,
			ringAlter: null,
			boots: null,
			consumable: null
		},
		set: [],
	}

	gameData.shop = {
		rerollPrice: 20,
		stock: null,
		lock: false
	}

	gameData.stash = {
		active: false,
		item: stash
	}

	gameData.enemy = enemyData[map.zone[0][0].enemyPool[Math.floor(Math.random() * map.zone[0][0].enemyPool.length)]];

	gameData.spellPool = {pool: spellPoolData};
};

export function saveGameData() {
	let profile = JSON.parse(window.localStorage.getItem("profile"));
	profile.savedGame = true;
	window.localStorage.setItem('profile', JSON.stringify(profile));

	gameData.player = player;
	gameData.location = location;
	gameData.familiar = familiar;
	gameData.stash = stash;
	gameData.inventory = inventory;
	gameData.enemy = enemy;
	gameData.shop = shop;
	
	gameData.spellPool = spellPool;

	window.localStorage.setItem('gameData', JSON.stringify(gameData));
};

export function loadGameData() {
	gameData.player = JSON.parse(window.localStorage.getItem("gameData")).player;
	gameData.location = JSON.parse(window.localStorage.getItem("gameData")).location;
	gameData.familiar = JSON.parse(window.localStorage.getItem("gameData")).familiar;
	gameData.stash = JSON.parse(window.localStorage.getItem("gameData")).stash;
	gameData.inventory = JSON.parse(window.localStorage.getItem("gameData")).inventory;
	gameData.enemy = JSON.parse(window.localStorage.getItem("gameData")).enemy;
	gameData.shop = JSON.parse(window.localStorage.getItem("gameData")).shop;

	gameData.spellPool = JSON.parse(window.localStorage.getItem("gameData")).spellPool;
};

export function deleteGameData() {
	gameData.player = {};
	gameData.location = {};
	gameData.familiar = {};
	gameData.stash = {};
	gameData.inventory = {};
	gameData.enemy = null;
	gameData.shop = null;	
	gameData.spellPool = {};

	window.localStorage.setItem('gameData', JSON.stringify(gameData));

	let profile = JSON.parse(window.localStorage.getItem("profile"));
	profile.savedGame = false;
	window.localStorage.setItem('profile', JSON.stringify(profile));
}