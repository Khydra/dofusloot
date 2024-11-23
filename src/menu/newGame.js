import {deleteScenes} from '../global/sceneManager.js';
import {loadMenuScene} from './menu.js';
import {characterData} from '../dofusloot/player/characterData.js';
import {spellPoolData, spellSetData} from '../dofusloot/player/spellData.js';
import {familiarData} from '../dofusloot/player/familiarData.js';
import {stashData} from '../dofusloot/player/stashData.js';
import {mapData} from '../dofusloot/location/mapData.js';
import {loadGameScene} from '../dofusloot/game.js';
import {newGameData, saveGameData} from '../data/data.js';
import {BubbleName, BubbleDofam, BubbleFamiliarNG, BubbleSpell} from '../dofusloot/global/Bubble.js';
import {playSound} from '../data/audio.js';

const scene = document.createElement('div');
scene.className = 'scene menu-scene';

const characterContainer = document.createElement('div');
characterContainer.className = 'menu-container ng-character-container';
scene.appendChild(characterContainer);

const characterTittle = document.createElement('div');
characterTittle.className = 'ng-character-tittle';
characterTittle.innerHTML = 'CLASES';
characterContainer.appendChild(characterTittle);

const character = [];

for (let i = 0; i < 20; i++) {
	character[i] = document.createElement('div');
	character[i].className = 'ng-character';
	characterContainer.appendChild(character[i]);
	character[i].addEventListener('click', () => selectCharacter(i))
	character[i].addEventListener('mouseover', ()=> playSound('hover', 'ui'));
}

const playerContainer = document.createElement('div');
playerContainer.className = 'menu-container ng-player-container';
scene.appendChild(playerContainer);

const playerTittle = document.createElement('div');
playerTittle.className = 'ng-player-tittle';
playerContainer.appendChild(playerTittle);

const playerCharacterImage = document.createElement('div');
playerCharacterImage.className = 'ng-player-character-image';
playerContainer.appendChild(playerCharacterImage);

const playerFamiliarImage = document.createElement('div');
playerFamiliarImage.className = 'ng-player-familiar-image';
playerContainer.appendChild(playerFamiliarImage);

const playerSpellContainer = document.createElement('div');
playerSpellContainer.className = 'ng-player-spell-container';
playerContainer.appendChild(playerSpellContainer);

const playerSpell = [];
const playerSpellImage = [];

for (let i = 0; i < 10; i++) {
	playerSpell[i] = document.createElement('div');
	playerSpell[i].className = 'panel-spell';
	playerSpellContainer.appendChild(playerSpell[i]);

	playerSpellImage[i] = document.createElement('div');
	playerSpellImage[i].className = 'panel-spell-image';
	playerSpell[i].appendChild(playerSpellImage[i]);

	playerSpell[i].addEventListener('mouseover', () => {
		if (spellSetData[Object.values(characterData)[characterSelected].name][spellSetSelected].spell[i+1] == undefined) return;	
		new BubbleSpell(playerSpell[i], spellSetData[Object.values(characterData)[characterSelected].name][spellSetSelected].spell[i+1])
	})
}

const playerSpellButton = document.createElement('div');
playerSpellButton.className = 'ng-player-spell-button';
playerContainer.appendChild(playerSpellButton);

const playerItemContainer = document.createElement('div');
playerItemContainer.className = 'ng-player-item-container';
playerContainer.appendChild(playerItemContainer);

const playerCharacter = document.createElement('div');
playerCharacter.className = 'ng-player-character';
playerItemContainer.appendChild(playerCharacter);

const playerFamiliar = document.createElement('div');
playerFamiliar.className = 'ng-player-familiar';
playerItemContainer.appendChild(playerFamiliar);
playerFamiliar.addEventListener('mouseover', () => { new BubbleFamiliarNG(playerFamiliar, Object.values(familiarData)[familiarSelected])})

const playerItem = [];

for (let i = 0; i < 7; i++) {
	playerItem[i] = document.createElement('div');
	playerItem[i].className = 'slot stash-slot disabled';
	playerItemContainer.appendChild(playerItem[i]);
	playerItem[i].addEventListener('click', () => { 
		removeStashItem(stashSelected[i])
		updateStashItemImages()
	})
	playerItem[i].addEventListener('mouseover', () => { new BubbleDofam(playerItem[i], stashSelected[i], 'preStash')})
}

const stashContainer = document.createElement('div');
stashContainer.className = 'menu-container ng-stash-container';
scene.appendChild(stashContainer);

const stashContainerScroller = document.createElement('div');
stashContainerScroller.className = 'ng-stash-container-scroller';
stashContainer.appendChild(stashContainerScroller);

const stashTittle = document.createElement('div');
stashTittle.className = 'ng-stash-tittle';
stashTittle.innerHTML = 'ALIJO DE OBJETOS';
stashContainer.appendChild(stashTittle);

const stash = [];

Object.keys(stashData).forEach((key, i)=>{
	stash[i] = document.createElement('div');
	stash[i].className = 'slot stash-slot';
	stash[i].style.backgroundImage = `url("${stashData[key].image}")`;
	stash[i].addEventListener('click', () => selectStashItem(i));
	stash[i].addEventListener('mouseover', ()=> playSound('hover', 'ui'));
	stashContainerScroller.appendChild(stash[i]);
})

const familiarContainer = document.createElement('div');
familiarContainer.className = 'menu-container ng-familiar-container';
scene.appendChild(familiarContainer);

const familiarTittle = document.createElement('div');
familiarTittle.className = 'ng-familiar-tittle';
familiarTittle.innerHTML = 'MASCOTAS';
familiarContainer.appendChild(familiarTittle);

const familiar = [];

for (let i = 0; i < 15; i++) {
	familiar[i] = document.createElement('div');
	familiar[i].className = 'ng-familiar';
	familiarContainer.appendChild(familiar[i]);
	familiar[i].addEventListener('click', () => selectFamiliar(i))
	familiar[i].addEventListener('mouseover', ()=> playSound('hover', 'ui'));
}

const mapContainer = document.createElement('div');
mapContainer.className = 'menu-container ng-map-container';
scene.appendChild(mapContainer);

const mapTittle = document.createElement('div');
mapTittle.className = 'ng-map-tittle stroke';
mapContainer.appendChild(mapTittle);

const mapArrowContainer = document.createElement('div');
mapArrowContainer.className = 'ng-map-arrow-container';
scene.appendChild(mapArrowContainer);

var mapArrow = [];

for (let i = 0; i < 2; i++) {
	mapArrow[i] = document.createElement('div');
	mapArrow[i].className = 'ng-map-arrow stroke';
	mapArrowContainer.appendChild(mapArrow[i]);
}

mapArrow[0].innerHTML = '◄';
mapArrow[1].innerHTML = '►';
mapArrow[0].addEventListener('click', () => selectMap(-1));
mapArrow[1].addEventListener('click', () => selectMap(1));
mapArrow[0].addEventListener('mouseover', () =>  playSound('hover3', 'ui'));
mapArrow[1].addEventListener('mouseover', () =>  playSound('hover3', 'ui'));

const startContainer = document.createElement('div');
startContainer.className = 'menu-container ng-start-container';
startContainer.innerHTML = 'COMENZAR';
scene.appendChild(startContainer);

const exitContainer = document.createElement('div');
exitContainer.className = 'menu-container menu-return-container';
exitContainer.innerHTML = 'VOLVER';
scene.appendChild(exitContainer);

var characterSelected = 0;
var	familiarSelected = 0;
var mapSelected = 0;
var spellSetSelected = 0;
var stashSelected = [];

export function loadNewGameScene() {
	stashSelected = [];

	deleteScenes();
	displayCharacter();
	displayFamiliar();
	displayStash();
	displayMap();
	displaySpellSet();
	loadPresets();
	selectCharacter(characterSelected);
	selectFamiliar(familiarSelected);
	
	document.getElementById('app').appendChild(scene);
}

function displayCharacter() {
	let charsUnlock = JSON.parse(window.localStorage.getItem("profile")).character;

	Object.keys(characterData).forEach((char, indx) => {
		character[indx].style.backgroundImage = `url("${characterData[char].portrait}")`;
		if (charsUnlock[char] == undefined) character[indx].className = 'ng-character disabled';
		else character[indx].className = 'ng-character';
	})
}

function displayFamiliar() {
	let famsUnlock = JSON.parse(window.localStorage.getItem("profile")).familiar;

	Object.keys(familiarData).forEach((fam, indx) => {
		familiar[indx].style.backgroundImage = `url("${familiarData[fam].portrait}")`;
		if (famsUnlock[fam] == undefined) familiar[indx].className = 'ng-familiar disabled';
		else familiar[indx].className = 'ng-familiar';
	})
}

function displayStash() {
	let stashUnlock = JSON.parse(window.localStorage.getItem("profile")).stash;

	Object.keys(stashData).forEach((s, indx)=>{
		//stash[indx].style.backgroundImage = `url("${stashData[s].image}")`;
		if (stashUnlock[s] == undefined) stash[indx].className = 'slot stash-slot disabled';
		else stash[indx].className = 'slot stash-slot';
	})

	stashSelected.forEach((s) => stash[s.id].className = 'slot stash-slot stash-slot-selected')
}

function displayMap() {
	mapTittle.innerHTML = Object.values(mapData)[mapSelected].name.toUpperCase();
	mapContainer.style.backgroundImage = `url("${Object.values(mapData)[mapSelected].image}")`;
	if (!Object.values(mapData)[mapSelected].unlocked) {
		mapContainer.className = 'menu-container ng-map-container disabled';
		startContainer.className = 'menu-container ng-start-container disabled';
	} else {
		mapContainer.className = 'menu-container ng-map-container';
		startContainer.className = 'menu-container ng-start-container';
	}
}

function selectCharacter(pos) {
	let ngcs = document.getElementsByClassName('ng-character-selected');
    while (ngcs.length > 0) ngcs[0].classList.remove("ng-character-selected");

    playSound('hover3', 'ui');
    spellSetSelected = 0;
    characterSelected = pos;
	character[pos].className = 'ng-character ng-character-selected';

	playerTittle.innerHTML = `${Object.values(characterData)[characterSelected].name.toUpperCase()} & ${Object.values(familiarData)[familiarSelected].name.toUpperCase()}`;
	playerCharacter.style.backgroundImage = `url("${Object.values(characterData)[characterSelected].portrait}")`;
	playerCharacterImage.style.backgroundImage = `url("${Object.values(characterData)[characterSelected].image}")`;

	let profile = JSON.parse(window.localStorage.getItem("profile"));
	profile.preset.char = characterSelected
	window.localStorage.setItem('profile', JSON.stringify(profile));

	updateSpellManager();
}

function selectFamiliar(pos) {
	let ngfs = document.getElementsByClassName('ng-familiar-selected');
    while(ngfs.length > 0) ngfs[0].classList.remove("ng-familiar-selected");

    playSound('hover3', 'ui');
    familiarSelected = pos;
	familiar[pos].className = 'ng-familiar ng-familiar-selected';

	playerTittle.innerHTML = `${Object.values(characterData)[characterSelected].name.toUpperCase()} & ${Object.values(familiarData)[familiarSelected].name.toUpperCase()}`;
	playerFamiliar.style.backgroundImage = `url("${Object.values(familiarData)[familiarSelected].portrait}")`;
	playerFamiliarImage.style.backgroundImage = `url("${Object.values(familiarData)[familiarSelected].itemImg}")`;

	let profile = JSON.parse(window.localStorage.getItem("profile"));
	profile.preset.familiar = familiarSelected
	window.localStorage.setItem('profile', JSON.stringify(profile));
}

function selectMap(dir) {
	mapSelected += dir;
	playSound('lock', 'ui');
	if (mapSelected == -1) mapSelected = Object.keys(mapData).length - 1;
	else if (mapSelected == Object.keys(mapData).length) mapSelected = 0;
	displayMap(mapSelected);
}

function selectStashItem(id) {
	let stashItem = Object.values(stashData)[id];
	let check = stashSelected.some(it => JSON.stringify(it) === JSON.stringify(stashItem));
	if (check) removeStashItem(stashItem);
	else addStashItem(stashItem);

	updateStashItemImages();

	let profile = JSON.parse(window.localStorage.getItem("profile"));
	profile.preset.stash = stashSelected;

	window.localStorage.setItem('profile', JSON.stringify(profile));
}

function addStashItem(stashItem) {
	playSound('itemEquip', 'ui');
	stash[stashItem.id].className = 'slot stash-slot stash-slot-selected';
	stashSelected.push(stashItem);
}

function removeStashItem(stashItem) {
	playSound('itemUnequip', 'ui')
	stash[stashItem.id].className = 'slot stash-slot';
	let index = stashSelected.findIndex(it => JSON.stringify(it) === JSON.stringify(stashItem));
	if (index !== -1) { stashSelected.splice(index, 1); }
}

function updateStashItemImages() {
	playerItem.forEach((s)=>{ 
		s.style.backgroundImage = ``;
		s.className = 'slot stash-slot disabled';
	});
	stashSelected.forEach((s, i)=>{	
		playerItem[i].style.backgroundImage = `url("${s.image}")`;
		playerItem[i].className = 'slot stash-slot stash-slot-selected';
	});
}

function newGame() {
	playSound('start','ui')
	newGameData(
		Object.values(characterData)[characterSelected], 
		Object.values(familiarData)[familiarSelected], 
		Object.values(mapData)[mapSelected], 
		stashSelected,
		spellSetData[Object.values(characterData)[characterSelected].name][spellSetSelected].spell
	);
	loadGameScene();
}

exitContainer.addEventListener('click', loadMenuScene);
exitContainer.addEventListener('mouseover', ()=> playSound('click2','ui'));

startContainer.addEventListener('click', newGame);
startContainer.addEventListener('mouseover', ()=> playSound('click2','ui'));

const spellManagerContainer = document.createElement('div');
spellManagerContainer.className = 'menu-container ng-spell-manager-container';

const spellManagerTittle = document.createElement('div');
spellManagerTittle.className = 'ng-spell-manager-tittle stroke';
spellManagerTittle.innerHTML = 'HECHIZOS';
spellManagerContainer.appendChild(spellManagerTittle);

const spellManagerSpellContainer = document.createElement('div');
spellManagerSpellContainer.className = 'ng-spell-manager-spell-container stroke';
spellManagerContainer.appendChild(spellManagerSpellContainer);

playerSpellButton.innerHTML = 'GESTIONAR HECHIZOS';
playerSpellButton.addEventListener('click', () => { spellManagerScene() })
playerSpellButton.addEventListener('mouseover', () => { playSound('hover3', 'ui') })

const spellManagerSpell = [];
const spellManagerSpellImage = [];

for (let i = 0; i < 20; i++) {
	spellManagerSpell[i] = document.createElement('div');
	spellManagerSpell[i].className = 'panel-spell';
	spellManagerSpellContainer.appendChild(spellManagerSpell[i]);

	spellManagerSpellImage[i] = document.createElement('div');
	spellManagerSpellImage[i].className = 'panel-spell-image';
	spellManagerSpell[i].appendChild(spellManagerSpellImage[i]);

	spellManagerSpell[i].addEventListener('mouseover', () => {
		new BubbleSpell(spellManagerSpell[i], spellManagerArray[i])
	})
}

const spellManagerSetName = document.createElement('div');
spellManagerSetName.className = 'ng-spell-manager-spell-set-name';
spellManagerContainer.appendChild(spellManagerSetName);

const spellManagerSetNumber = document.createElement('div');
spellManagerSetNumber.className = 'ng-spell-manager-spell-set-number';
spellManagerContainer.appendChild(spellManagerSetNumber);

const spellManagerSet = document.createElement('div');
spellManagerSet.className = 'ng-spell-manager-spell-set';
spellManagerContainer.appendChild(spellManagerSet);

const spellManagerSetSpell = [];
const spellManagerSetSpellImage = [];

for (let i = 0; i < 5; i++) {
	spellManagerSetSpell[i] = document.createElement('div');
	spellManagerSetSpell[i].className = 'panel-spell';
	spellManagerSet.appendChild(spellManagerSetSpell[i]);

	spellManagerSetSpellImage[i] = document.createElement('div');
	spellManagerSetSpellImage[i].className = 'panel-spell-image';
	spellManagerSetSpell[i].appendChild(spellManagerSetSpellImage[i]);
	
	spellManagerSetSpell[i].addEventListener('mouseover', () => {
		if (spellSetData[Object.values(characterData)[characterSelected].name][spellSetSelected].spell[i+1] == undefined) return;	
		new BubbleSpell(spellManagerSetSpell[i], spellSetData[Object.values(characterData)[characterSelected].name][spellSetSelected].spell[i+1])
	})
}

const spellManagerArrowContainer = document.createElement('div');
spellManagerArrowContainer.className = 'ng-spell-manager-arrow-container';
spellManagerContainer.appendChild(spellManagerArrowContainer);

var spellManagerArrow = [];

for (let i = 0; i < 2; i++) {
	spellManagerArrow[i] = document.createElement('div');
	spellManagerArrow[i].className = 'ng-spell-manager-arrow stroke';
	spellManagerArrowContainer.appendChild(spellManagerArrow[i]);
}

spellManagerArrow[0].innerHTML = '◄';
spellManagerArrow[1].innerHTML = '►';
spellManagerArrow[0].addEventListener('click', () => selectSpellSet(-1));
spellManagerArrow[1].addEventListener('click', () => selectSpellSet(1));
spellManagerArrow[0].addEventListener('mouseover', () =>  playSound('hover3', 'ui'));
spellManagerArrow[1].addEventListener('mouseover', () =>  playSound('hover3', 'ui'));

var spellSceneActive = false;
var spellManagerArray = [];

function spellManagerScene() {
	playSound('click', 'ui');
	if (spellSceneActive) closeSpellManager();
	else openSpellManager()
}

function selectSpellSet(dir) {
	playSound('lock', 'ui');
	let char = Object.values(characterData)[characterSelected].name

	spellSetSelected += dir;
	if (spellSetSelected == -1) spellSetSelected = Object.keys(spellSetData[char]).length - 1;
	else if (spellSetSelected == Object.keys(spellSetData[char]).length) spellSetSelected = 0;

	displaySpellSet();
}

function displaySpellSet() {
	let char = Object.values(characterData)[characterSelected].name;
	let set = Object.values(spellSetData)[characterSelected][spellSetSelected];

	spellManagerSetName.innerHTML = `SET DE HECHIZOS ${set.name}`
	spellManagerSetNumber.innerHTML = `${spellSetSelected+1} / ${Object.keys(spellSetData[char]).length}`;

	set.spell.forEach((s, i)=> {
		if (i == 0 || i == 6) return;
		spellManagerSetSpellImage[i-1].style.backgroundImage = `url("${s.image}")`
		playerSpellImage[i-1].style.backgroundImage = `url("${s.image}")`
	})
}

function updateSpellManager() {
	let pool = spellPoolData[Object.values(characterData)[characterSelected].name];
	let c = 0;

	Object.keys(pool).forEach((key)=>{
		pool[key].forEach((spell)=> {
			spellManagerArray[c] = spell;
			spellManagerSpellImage[c].style.backgroundImage = `url(${spell.image})`;
			c++;
		})
	})

	displaySpellSet()
}

function openSpellManager() {
	playerSpellButton.innerHTML = 'GESTIONAR ALIJO';
	spellSceneActive = true;
	scene.appendChild(spellManagerContainer);
	updateSpellManager();
}


function closeSpellManager() {
	playerSpellButton.innerHTML = 'GESTIONAR HECHIZOS';
	spellSceneActive = false;
	scene.removeChild(spellManagerContainer);
}

function loadPresets() {
	let preset = JSON.parse(window.localStorage.getItem("profile")).preset;
	if (preset == undefined) return;
	if (preset.char != null) characterSelected = preset.char;
	if (preset.familiar != null) familiarSelected = preset.familiar;
	if (preset.stash.length > 0) {
		preset.stash.forEach((s) => {addStashItem(s)})
		updateStashItemImages();
	}
}