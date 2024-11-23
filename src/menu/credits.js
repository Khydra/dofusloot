import {deleteScenes} from '../global/sceneManager.js';
import {loadMenuScene} from './menu.js';
import {playSound} from '../data/audio.js';

const scene = document.createElement('div');
scene.className = 'scene menu-scene';

const creditsContainer = document.createElement('div');
creditsContainer.className = 'menu-container credits-container';
scene.appendChild(creditsContainer);

const creditsText = document.createElement('div');
creditsText.className = 'credits-text';
creditsContainer.appendChild(creditsText);

const creditsTopContainer = document.createElement('div');
creditsTopContainer.className = 'menu-container credits-top-container';
scene.appendChild(creditsTopContainer);

const exitContainer = document.createElement('div');
exitContainer.className = 'menu-container menu-return-container';
exitContainer.innerHTML = 'VOLVER';
scene.appendChild(exitContainer);

export function loadCreditsScene() {
	deleteScenes();
	document.getElementById('app').appendChild(scene);
}

exitContainer.addEventListener('click', ()=> {
	loadMenuScene();
});
exitContainer.addEventListener('mouseover', ()=> playSound('click2','ui'));

creditsText.innerHTML = `
	Desarrollado por <a href="https://x.com/khydra98" target="_blank">Khydra</a>.
	<br>Betatesters: Singa y <a href="https://x.com/cuarzomyr" target="_blank">Khytrayer</a>.
`

