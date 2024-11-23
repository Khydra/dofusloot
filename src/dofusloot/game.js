import {deleteScenes} from '../global/sceneManager.js';
import {loadMenuScene} from '../menu/menu.js';
import {saveGameData, deleteGameData} from '../data/data.js';
import {gameData} from './gameData.js';
import {Player} from './player/Player.js';
import {Familiar} from './player/Familiar.js';
import {Stash} from './player/Stash.js';
import {Location} from './location/Location.js';
import {Inventory} from './inventory/Inventory.js';
import {Enemy} from './enemy/Enemy.js';
import {Shop} from './inventory/Shop.js';
import {Battle} from './global/Battle.js';
import {BubbleItem, BubbleStat, BubbleShop, BubbleSpell, BubbleEnemyAction, BubbleDofam, BubbleSummon} from './global/Bubble.js';
import {Panel} from './global/Panel.js';
import {SpellPool} from './player/SpellPool.js';
import {playSound} from '../data/audio.js';
import {Reward} from './global/Reward.js';

import * as uiPanel from './ui/panel.js';
import * as uiBattle from './ui/battle.js';
import * as uiInventory from './ui/inventory.js';
import * as uiShop from './ui/shop.js';
import * as uiStatus from './ui/status.js';
import * as uiStats from './ui/stats.js';

const app = document.getElementById('app');

const scene = document.createElement('div');
scene.className = 'scene game-scene';

export const menuButton = document.createElement('div');
menuButton.className = 'game-menu-button';
menuButton.innerHTML = "⚙";

var inGame = false;

export var player;
export var location;
export var familiar;
export var stash;
export var inventory;
export var enemy;
export var shop;
var bubble;

export var spellPool;

export function loadGameScene() {
	deleteScenes();

	scene.appendChild(uiPanel.container);
	scene.appendChild(uiPanel.textContainer);
	scene.appendChild(uiBattle.container);
	scene.appendChild(uiInventory.container);
	scene.appendChild(uiShop.container);
	scene.appendChild(uiStatus.container);

	scene.appendChild(menuButton);
	app.appendChild(scene);

	Battle.status = 'not-started';

	player = new Player(gameData.player);
	location = new Location(gameData.location); 
	familiar = new Familiar(gameData.familiar);
	stash = new Stash(gameData.stash);
	inventory = new Inventory(gameData.inventory);
	enemy = new Enemy(gameData.enemy);
	shop = new Shop(gameData.shop);
	spellPool = new SpellPool(gameData.spellPool);

	Panel.activate();
	inGame = true;
}

export function endGame() {
	deleteGameData();
	deleteScenes();
	loadMenuScene();
	inGame = false;
}

menuButton.addEventListener('mouseover', ()=> { playSound('click2', 'ui') })

menuButton.addEventListener('click', ()=> {
	playSound('click1', 'ui');
	inGame = false;
	loadMenuScene();
})

/*USER CONTROL*/
/*SHOP*/
uiShop.buttonLock.addEventListener('click', ()=> shop.lockStock());
uiShop.buttonLock.addEventListener('mouseover', ()=> {
	playSound('hover3', 'ui');
	bubble = new BubbleShop(uiShop.buttonLock, 'lock')
});

uiShop.buttonReroll.addEventListener('click', ()=> {shop.reroll(bubble)});
uiShop.buttonReroll.addEventListener('mouseover', ()=> {
	playSound('hover3', 'ui');
	bubble = new BubbleShop(uiShop.buttonReroll, 'reroll')
});

uiShop.item.forEach((item, i) => {
	item.addEventListener('click', () => shop.buyItem(i));
	item.addEventListener('mouseover', () => bubble = new BubbleItem(item, shop.stock[i], 'shop'));
})

/*INVENTORY*/
uiInventory.gear.forEach((item, i) => {
	item.addEventListener('click', ()=> {inventory.unequipItem(i, player)});
	item.addEventListener('mouseover', () => bubble = new BubbleItem(item, inventory.gear[(Object.keys(inventory.gear)[i])], 'gear'));
})

uiInventory.bag.forEach((item, i) => {
	item.addEventListener('click', ()=> {
		inventory.equipItem(i, player, bubble);
		if (inventory.bag[i] != undefined) bubble = new BubbleItem(item, inventory.bag[i], 'bag');
	});
	item.addEventListener('contextmenu', ()=> {
		inventory.dropItem(i, bubble);
		if (inventory.bag[i] != undefined) bubble = new BubbleItem(item, inventory.bag[i], 'bag');
	});
	item.addEventListener('mouseover', () => bubble = new BubbleItem(item, inventory.bag[i], 'bag'));
})

uiInventory.dofam.forEach((item, i) => {
	item.addEventListener('mouseover', () =>{	
		if (i == 0) new BubbleDofam(item, familiar, 'familiar');
		else if (i <= stash.item.length) new BubbleDofam(item, stash.item[i-1], 'stash');
	});
})

/*STATS*/
uiStats.statLabel.forEach((stat, i) => {
	stat.addEventListener('mouseover', ()=> bubble = new BubbleStat(stat, i));
})

/*PANEL*/
uiPanel.mainButton.addEventListener('click', () => {
	playSound('click', 'ui')
	switch(Battle.status) {
        case 'not-started':
            Battle.start();
            break;
        case 'active':
            Battle.endPlayerTurn();
            break;
        case 'ended':
            location.next();
            break;
    }
})
uiPanel.mainButton.addEventListener('mouseover', () => { playSound('hover3', 'ui') })

uiPanel.spell.forEach((spell, i)=>{
	spell.addEventListener('mouseover', ()=> {
		if (player.spell[i] != undefined) bubble = new BubbleSpell(uiPanel.spellContainer, player.spell[i])
	});
})

uiPanel.spellImage.forEach((spell, i)=> {
	spell.addEventListener('click', ()=> player.useSpell(i, bubble));
})

uiPanel.summon.forEach((summon, i)=> {
	summon.addEventListener('mouseover', () => {
		if (player.summon[i] != undefined) bubble = new BubbleSummon(uiPanel.summonContainer, player.summon[i])
	});
	summon.addEventListener('click', () => {
		if (player.summon[i] != undefined) player.useSummon(i);
	})
})

//BATTLE

uiBattle.action.forEach((action, i)=> {
	action.addEventListener('mouseover', ()=> bubble = new BubbleEnemyAction(uiBattle.actionContainer, enemy, i));
})


//key events

document.addEventListener('keydown', (event) => {
	if (!inGame) return;
    if (event.key === ' ') {
        event.preventDefault(); 
		switch(Battle.status) {
	        case 'not-started':
	        	playSound('click', 'ui');
	            Battle.start();
	            break;
	        case 'active':
	        	if (!Battle.playerTurn) return;
	        	playSound('click', 'ui')
	            Battle.endPlayerTurn();
	            break;
	        case 'ended':
	        	if (Reward.inReward) return;
	        	playSound('click', 'ui');
	            location.next();
	            break;
	    }
    }
    if (event.key === 'Enter') {
    	event.preventDefault();
        if (Reward.inReward) return;
        shop.reroll();
    }

    //new Reward(location.zone);
});
