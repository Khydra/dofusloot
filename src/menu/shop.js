import {deleteScenes} from '../global/sceneManager.js';
import {loadMenuScene} from './menu.js';
import {familiarData} from '../dofusloot/player/familiarData.js';
import {characterData} from '../dofusloot/player/characterData.js';
import {stashData} from '../dofusloot/player/stashData.js';
import {upgradeData} from '../dofusloot/player/upgradeData.js';
import {PopupStash, PopupFamiliar, PopupCharacter} from '../dofusloot/global/Popup.js';
import {playSound} from '../data/audio.js';

const scene = document.createElement('div');
scene.className = 'scene menu-scene';

const exitContainer = document.createElement('div');
exitContainer.className = 'menu-container menu-return-container';
exitContainer.innerHTML = 'VOLVER';
exitContainer.addEventListener('mouseover', ()=> playSound('click2', 'ui'));
scene.appendChild(exitContainer);

const unlockableCharacterContainer = document.createElement('div');
unlockableCharacterContainer.className = 'menu-container shop-unlockable-character-container';
scene.appendChild(unlockableCharacterContainer);

const unlockableCharacterTittle = document.createElement('div');
unlockableCharacterTittle.className = 'shop-unlockable-character-tittle';
unlockableCharacterTittle.innerHTML = 'CLASES';
unlockableCharacterContainer.appendChild(unlockableCharacterTittle);

const unlockableCharacter = [];
const unlockeableCharacterData = [
	characterData['sacrogrito'], characterData['feca'], characterData['zurcarak'], characterData['sadida'], 
    characterData['osamodas'], characterData['anutrof'], characterData['sram'], characterData['xelor'], 
    characterData['pandawa'], characterData['tymador'], characterData['zobal'], characterData['steamer'],
    characterData['selotrop'], characterData['hipermago'], characterData['uginak'], characterData['forjalanza'],
]

for (let i = 0; i < 16; i++) {
	unlockableCharacter[i] = document.createElement('div');
	unlockableCharacter[i].className = 'shop-unlockable shop-unlockable-character';
	unlockableCharacter[i].style.backgroundImage = `url("${unlockeableCharacterData[i].portrait}")`;

	unlockableCharacter[i].addEventListener('click', () => characterInfo(i));
	unlockableCharacter[i].addEventListener('mouseover', ()=> playSound('hover', 'ui'));
	unlockableCharacterContainer.appendChild(unlockableCharacter[i]);
}

const unlockableFamiliarContainer = document.createElement('div');
unlockableFamiliarContainer.className = 'menu-container shop-unlockable-familiar-container';
scene.appendChild(unlockableFamiliarContainer);

const unlockableFamiliarTittle = document.createElement('div');
unlockableFamiliarTittle.className = 'shop-unlockable-familiar-tittle';
unlockableFamiliarTittle.innerHTML = 'MASCOTAS';
unlockableFamiliarContainer.appendChild(unlockableFamiliarTittle);

const unlockableFamiliar = [];
const unlockableFamiliarData = [
	familiarData['boluto'], familiarData['fotasma'], familiarData['tortuga'], familiarData['cuerbokito'], 
	familiarData['wabbit'], familiarData['miscaludo'], familiarData['bilby'], familiarData['lokulto'], familiarData['bulbesor'],
	familiarData['besosete'], familiarData['tejaluche'], familiarData['kaniglups'], familiarData['wauwau'], familiarData['kuakua']
]

for (let i = 0; i < 14; i++) {
	unlockableFamiliar[i] = document.createElement('div');
	unlockableFamiliar[i].className = 'shop-unlockable shop-unlockable-familiar';
	unlockableFamiliar[i].style.backgroundImage = `url("${unlockableFamiliarData[i].portrait}")`;

	unlockableFamiliar[i].addEventListener('click', () => familiarInfo(i));
	unlockableFamiliar[i].addEventListener('mouseover', ()=> playSound('hover', 'ui'));
	unlockableFamiliarContainer.appendChild(unlockableFamiliar[i]);
}

const stashContainer = document.createElement('div');
stashContainer.className = 'menu-container shop-stash-container';
scene.appendChild(stashContainer);

const stashTittle = document.createElement('div');
stashTittle.className = 'shop-stash-tittle';
stashTittle.innerHTML = 'ALIJO DE OBJETOS';
stashContainer.appendChild(stashTittle);

const stash = [];

Object.keys(stashData).forEach((key, i)=>{
	stash[i] = document.createElement('div');
	stash[i].className = 'slot stash-slot';
	stash[i].style.backgroundImage = `url("${stashData[key].image}")`;

	stash[i].addEventListener('click', () => stashInfo(i));
	stash[i].addEventListener('mouseover', ()=> playSound('hover', 'ui'));
	
	stashContainer.appendChild(stash[i]);
})

const upgradeContainer = document.createElement('div');
upgradeContainer.className = 'menu-container shop-upgrade-container';
scene.appendChild(upgradeContainer);

const upgradeTittle = document.createElement('div');
upgradeTittle.className = 'shop-upgrade-tittle';
upgradeTittle.innerHTML = 'MEJORAS';
upgradeContainer.appendChild(upgradeTittle);

const ogrinasContainer = document.createElement('div');
ogrinasContainer.className = 'shop-ogrinas-container';
scene.appendChild(ogrinasContainer);

const ogrinasTittle = document.createElement('div');
ogrinasTittle.className = 'shop-ogrinas-tittle';
ogrinasTittle.innerHTML = 'OGRINAS';
ogrinasContainer.appendChild(ogrinasTittle);

const ogrinas = document.createElement('div');
ogrinas.className = 'shop-ogrinas';
ogrinasContainer.appendChild(ogrinas);

export function loadShopScene() {
	const profile = JSON.parse(window.localStorage.getItem("profile"));
	
	characterUpdate();
	familiarUpdate() 
	stashUpdate();

	deleteScenes();
	document.getElementById('app').appendChild(scene);

	ogrinas.innerHTML = profile.ogrinas;
}

function characterUpdate() {
	const profile = JSON.parse(window.localStorage.getItem("profile"));

	unlockeableCharacterData.forEach((char, i) => {
		if (profile.character[char.keyName] != undefined) {
			unlockableCharacter[i].className = 'shop-unlockable shop-unlockable-character disabled'; 
		} else unlockableCharacter[i].className = 'shop-unlockable shop-unlockable-character '; 
	})

	ogrinas.innerHTML = profile.ogrinas;
}

function characterInfo(id) { new PopupCharacter(characterData[Object.keys(characterData)[id+3]], characterBuy) }

function characterBuy(character) {
	let profile = JSON.parse(window.localStorage.getItem("profile"));
	if (profile.ogrinas < 300) return;

	profile.character[character.keyName] = character;
	profile.ogrinas -= 300;

	window.localStorage.setItem('profile', JSON.stringify(profile));
	characterUpdate();
}

function familiarUpdate() {
	const profile = JSON.parse(window.localStorage.getItem("profile"));
	
	unlockableFamiliarData.forEach((fam, i) => {
		if (profile.familiar[fam.keyName] != undefined) {
			unlockableFamiliar[i].className = 'shop-unlockable shop-unlockable-familiar disabled'; 
		} else unlockableFamiliar[i].className = 'shop-unlockable shop-unlockable-familiar '; 
	})

	ogrinas.innerHTML = profile.ogrinas;
}

function familiarInfo(id) { new PopupFamiliar(familiarData[Object.keys(familiarData)[id+1]], familiarBuy) }

function familiarBuy(familiar) {
	let profile = JSON.parse(window.localStorage.getItem("profile"));
	if (profile.ogrinas < familiar.price) return;

	profile.familiar[familiar.keyName] = familiar;
	profile.ogrinas -= familiar.price;

	window.localStorage.setItem('profile', JSON.stringify(profile));
	familiarUpdate();
}

function stashUpdate() {
	const profile = JSON.parse(window.localStorage.getItem("profile"));

	Object.keys(stashData).forEach((s, i) => {
		if (profile.stash[s] != undefined) {
			stash[i].className = 'slot stash-slot disabled'; 
		} else stash[i].className = 'slot stash-slot'; 
	})

	ogrinas.innerHTML = profile.ogrinas;
}

function stashInfo(id) { new PopupStash(stashData[Object.keys(stashData)[id]], stashBuy) }

function stashBuy(stash) {
	let profile = JSON.parse(window.localStorage.getItem("profile"));
	if (profile.ogrinas < stash.price) return;

	profile.stash[stash.keyName] = stash;
	profile.ogrinas -= stash.price;

	window.localStorage.setItem('profile', JSON.stringify(profile));
	stashUpdate();
}

exitContainer.addEventListener('click', loadMenuScene);
