import {deleteScenes} from '../global/sceneManager.js';
import {newProfile} from './newProfile.js';
import {loadSettingsScene} from './settings.js';
import {loadChangelogScene} from './changelog.js';
import {loadProfileScene} from './profile.js';
import {loadShopScene} from './shop.js';
import {loadCreditsScene} from './credits.js';
import {loadNewGameScene} from './newGame.js';
import {loadGameScene} from '../dofusloot/game.js';
import {loadGameData} from '../data/data.js';
import {playSound} from '../data/audio.js';

const app = document.getElementById('app');

const scene = document.createElement('div');
scene.className = 'scene menu-scene';

const settingsButton = document.createElement('div');
settingsButton.className = 'settings-button';
settingsButton.innerHTML = "⚙";
scene.appendChild(settingsButton);

const profileContainer = document.createElement('div');
profileContainer.className = 'menu-container menu-profile-container';
scene.appendChild(profileContainer);

const newGameContainer = document.createElement('div');
newGameContainer.className = 'menu-container menu-new-game-container';
scene.appendChild(newGameContainer);
newGameContainer.innerHTML = 'NUEVA PARTIDA';

const continueContainer = document.createElement('div');
continueContainer.className = 'menu-container menu-continue-container';
continueContainer.innerHTML = 'CONTINUAR'
scene.appendChild(continueContainer);

const shopContainer = document.createElement('div');
shopContainer.className = 'menu-container menu-shop-container';
scene.appendChild(shopContainer);
shopContainer.innerHTML = 'TIENDA';

const changelogContainer = document.createElement('div');
changelogContainer.className = 'menu-container menu-changelog-container';
scene.appendChild(changelogContainer);
changelogContainer.innerHTML = 'CHANGELOG';

const creditsContainer = document.createElement('div');
creditsContainer.className = 'menu-container menu-credits-container';
scene.appendChild(creditsContainer);
creditsContainer.innerHTML = 'CRÉDITOS';

const exitContainer = document.createElement('div');
exitContainer.className = 'menu-container menu-exit-container';
scene.appendChild(exitContainer);
exitContainer.innerHTML = 'SALIR';

export function loadMenuScene() {
	deleteScenes();

	if (window.localStorage.getItem("profile") === null) {
		newGameContainer.className = 'menu-container menu-new-game-container disabled';
		continueContainer.className = 'menu-container menu-continue-container disabled';
		shopContainer.className = 'menu-container menu-shop-container disabled';
		changelogContainer.className = 'menu-container menu-changelog-container disabled';
		creditsContainer.className = 'menu-container menu-credits-container disabled';
		profileContainer.innerHTML = 'CREAR PERFIL';
	} else {
		newGameContainer.className = 'menu-container menu-new-game-container';
		shopContainer.className = 'menu-container menu-shop-container';
		changelogContainer.className = 'menu-container menu-changelog-container';
		creditsContainer.className = 'menu-container menu-credits-container';
		profileContainer.innerHTML = JSON.parse(window.localStorage.getItem("profile")).name.toUpperCase();

		if (JSON.parse(window.localStorage.getItem("profile")).savedGame) continueContainer.className = 'menu-container menu-continue-container';
		else continueContainer.className = 'menu-container menu-continue-container disabled';
	}

/*
	if (JSON.parse(window.localStorage.getItem("profile")).achievement == undefined) { // BORRAR (es para q no se jodan partidas a medias)
		let prof = JSON.parse(window.localStorage.getItem("profile"))
		prof.achievement = {};
		window.localStorage.setItem('profile', JSON.stringify(prof));
	}

	if (JSON.parse(window.localStorage.getItem("profile")).preset == undefined) { // BORRAR (es para q no se jodan partidas a medias)
		let prof = JSON.parse(window.localStorage.getItem("profile"))
		prof.preset = {char: null, familiar: null, stash: []};
		window.localStorage.setItem('profile', JSON.stringify(prof));
	}

	if (JSON.parse(window.localStorage.getItem("profile")).upgrade == undefined) { // BORRAR (es para q no se jodan partidas a medias)
		let prof = JSON.parse(window.localStorage.getItem("profile"))
		prof.upgrade = {};
		window.localStorage.setItem('profile', JSON.stringify(prof));
	}
*/
	app.appendChild(scene);
}

profileContainer.addEventListener('click', ()=> { 
	playSound('click1', 'ui');
	(window.localStorage.getItem("profile") == null) ? newProfile() : loadProfileScene(); 
});

newGameContainer.addEventListener('click', () => {
	playSound('click1', 'ui');
	loadNewGameScene()
});

shopContainer.addEventListener('click', () => {
	playSound('click1', 'ui');
	loadShopScene()
});

creditsContainer.addEventListener('click', () => {
	playSound('click1', 'ui');
	loadCreditsScene()
});

changelogContainer.addEventListener('click', () => {
	playSound('click1', 'ui');
	loadChangelogScene()
});

settingsButton.addEventListener('click', () => {
	playSound('click1', 'ui');
	loadSettingsScene()
});

continueContainer.addEventListener('click', () => {
	playSound('start', 'ui');
	loadGameData();
	loadGameScene();
});

continueContainer.addEventListener('mouseover', ()=> { playSound('click2', 'ui')  });
profileContainer.addEventListener('mouseover', ()=> { playSound('click2', 'ui') });
newGameContainer.addEventListener('mouseover', ()=>{ playSound('click2', 'ui') });
shopContainer.addEventListener('mouseover', ()=>{ playSound('click2', 'ui') });
creditsContainer.addEventListener('mouseover', ()=>{ playSound('click2', 'ui') });
changelogContainer.addEventListener('mouseover', ()=>{ playSound('click2', 'ui') });
settingsButton.addEventListener('mouseover', ()=>{ playSound('click2', 'ui') });
exitContainer.addEventListener('mouseover', ()=>{ playSound('click2', 'ui') });

exitContainer.addEventListener('click', () => { location.reload(); });