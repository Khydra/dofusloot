//import {loadMenuScene} from './src/menu/menu.js';
import {settingsDefault} from './src/menu/newProfile.js';
import {setVolume, playSound} from './src/data/audio.js';
import {loadGameAssets} from './load.js';

if (!window.localStorage.getItem("settings")) settingsDefault();

const app = document.getElementById('app');

const scene = document.createElement('div');
scene.className = 'scene init-scene';
app.appendChild(scene);

const tittle = document.createElement('div');
tittle.className = 'init-tittle stroke';
tittle.innerHTML = 'DOFUSLOOT';
scene.appendChild(tittle);

const prompt = document.createElement('div');
prompt.className = 'init-prompt stroke';
prompt.innerHTML = 'CLICK PARA EMPEZAR';
scene.appendChild(prompt);

scene.addEventListener('click', ()=>{
	playSound('loadMenu', 'ui');
	loadGameAssets()
});

app.addEventListener(`contextmenu`, (e) => e.preventDefault());

onload = (e) => {setVolume();};