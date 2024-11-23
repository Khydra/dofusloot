import {loadMenuScene} from './menu.js';
import {familiarData} from '../dofusloot/player/familiarData.js';
import {characterData} from '../dofusloot/player/characterData.js';
import {setVolume} from '../data/audio.js';
import {playSound} from '../data/audio.js';

const scene = document.createElement('div');
scene.className = 'scene black-scene';

const container = document.createElement('div');
container.className = 'new-profile-container';
scene.appendChild(container);

const tittle = document.createElement('div');
tittle.className = 'new-profile-tittle stroke';
tittle.innerHTML = 'NUEVO PERFIL';
container.appendChild(tittle);

const text = document.createElement('div');
text.className = 'new-profile-text';
text.innerHTML = 'Elige un nombre para tu perfil, éste será utilizado en todos tus personajes y no será posible cambiarlo mas adelante.';
container.appendChild(text);

const input = document.createElement('input');
input.className = 'new-profile-input';
input.setAttribute("maxlength", "12");
input.placeholder = 'TU APODO';
container.appendChild(input);

input.addEventListener('input', () => {
	let n = Math.floor(Math.random()*2);
    (n==0) ? playSound('key','sfx') : playSound('key1','sfx');
});

const buttonContainer = document.createElement('div');
buttonContainer.className = 'new-profile-button-container';
container.appendChild(buttonContainer);

const buttonCancel = document.createElement('div');
buttonCancel.className = 'new-profile-button stroke';
buttonCancel.innerHTML = 'CANCELAR';
buttonContainer.appendChild(buttonCancel);

const buttonCreate = document.createElement('div');
buttonCreate.className = 'new-profile-button stroke';
buttonCreate.innerHTML = 'CREAR';
buttonContainer.appendChild(buttonCreate);

export function settingsDefault() {
	let settings = {
		leng: 0,
		music: 0.5,
		effects: 0.5,
		ui: 0.5
	}

	window.localStorage.setItem('settings', JSON.stringify(settings));
	setVolume();
}

export function newProfile() {
	document.getElementById('app').appendChild(scene);
}

export function createProfile() {
	if (input.value.trim() == "") return;

	const profile = {
		name: input.value,
		savedGame: false,
		character: { yopuka: characterData['yopuka'], ocra: characterData['ocra'], aniripsa: characterData['aniripsa'] },
		familiar: { miaumiau: familiarData['miaumiau']},
		stash: {},
		map: null,
		ogrinas: 0,
		codes: {},
		achievement: {},
		preset: { char: null, familiar: null, stash: [] },
		upgrade: {}
	}

	window.localStorage.setItem('profile', JSON.stringify(profile));
	loadMenuScene();
}

buttonCancel.addEventListener('click', () => {
	playSound('click3', 'ui')
	loadMenuScene()
});
buttonCreate.addEventListener('click', () => {
	playSound('click3', 'ui')
	createProfile()
});

buttonCancel.addEventListener('mouseover', () => {playSound('itemHover', 'ui')}) 
buttonCreate.addEventListener('mouseover', () => {playSound('itemHover', 'ui')}) 