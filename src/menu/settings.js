import {deleteScenes} from '../global/sceneManager.js';
import {loadMenuScene} from './menu.js';
import {setVolume, playSound} from '../data/audio.js';
import {Popup} from '../dofusloot/global/Popup.js';

const scene = document.createElement('div');
scene.className = 'scene menu-scene';

const settingsCodeContainer = document.createElement('div');
settingsCodeContainer.className = 'menu-container settings-code-container';
scene.appendChild(settingsCodeContainer);

const settingsCodeLabel = document.createElement('div');
settingsCodeLabel.className = 'settings-code-label';
settingsCodeLabel.innerHTML = 'CODIGO PROMOCIONAL';
settingsCodeContainer.appendChild(settingsCodeLabel);

const settingsCodeInput = document.createElement('input');
settingsCodeInput.setAttribute("maxlength", "12");
settingsCodeInput.className = 'settings-code-input';
settingsCodeContainer.appendChild(settingsCodeInput);

const settingsCodeButton = document.createElement('div');
settingsCodeButton.className = 'settings-code-button';
settingsCodeButton.innerHTML = 'CANJEAR';
settingsCodeButton.addEventListener('mouseover', ()=> playSound('lock','ui'));
settingsCodeButton.addEventListener('click', ()=>{ redeemCode() });
settingsCodeContainer.appendChild(settingsCodeButton);

const settingsContainer = document.createElement('div');
settingsContainer.className = 'menu-container settings-settings-container';
scene.appendChild(settingsContainer);

const importDataContainer = document.createElement('div');
importDataContainer.className = 'menu-container settings-import-data-container disabled';
importDataContainer.innerHTML = 'IMPORTAR DATOS';
scene.appendChild(importDataContainer);

const exportDataContainer = document.createElement('div');
exportDataContainer.className = 'menu-container settings-export-data-container disabled';
exportDataContainer.innerHTML = 'EXPORTAR DATOS';
scene.appendChild(exportDataContainer);

const deleteDataContainer = document.createElement('div');
deleteDataContainer.className = 'menu-container settings-delete-data-container';
deleteDataContainer.innerHTML = 'BORRAR DATOS';
scene.appendChild(deleteDataContainer);

const exitContainer = document.createElement('div');
exitContainer.className = 'menu-container menu-return-container';
exitContainer.innerHTML = 'VOLVER';
scene.appendChild(exitContainer);

const content = document.createElement('div');
content.className = 'settings-content';
settingsContainer.appendChild(content);

const row = [];
const label = [];
const arrowPrev = [];
const option = [];
const arrowNext = [];

const labelText = [
	"Idioma",
	"Voluen música",
	"Volumen efectos",
	"Volumen interfaz",
];

for (let i = 0; i < 4; i++) {
	row[i] = document.createElement('div');
	row[i].className = 'settings-row stroke';
	content.appendChild(row[i]);

	label[i] = document.createElement('div');
	label[i].className = 'settings-label stroke';
	label[i].innerHTML = labelText[i];
	row[i].appendChild(label[i]);

	arrowPrev[i] = document.createElement('div');
	arrowPrev[i].className = 'settings-arrow stroke';
	arrowPrev[i].innerHTML = '◄';
	row[i].appendChild(arrowPrev[i]);

	option[i] = document.createElement('div');
	option[i].className = 'settings-option stroke';
	row[i].appendChild(option[i]);

	arrowNext[i] = document.createElement('div');
	arrowNext[i].className = 'settings-arrow stroke';
	arrowNext[i].innerHTML = '►';
	row[i].appendChild(arrowNext[i]);
}

option[0].innerHTML = 'ESPAÑOL';
row[0].className = 'settings-row stroke disabled';

var settings;

export function loadSettingsScene() {

	if (window.localStorage.getItem("profile") === null) {
		deleteDataContainer.className = 'menu-container settings-delete-data-container disabled';
		settingsCodeContainer.className = 'menu-container settings-code-container disabled';
	}
	else {
		deleteDataContainer.className = 'menu-container settings-delete-data-container';
		settingsCodeContainer.className = 'menu-container settings-code-container';
	}

	settings = JSON.parse(window.localStorage.getItem("settings"));

	option[1].innerHTML = `${ Math.round(settings.music * 100) }%`;
	option[2].innerHTML = `${ Math.round(settings.effects * 100) }%`;
	option[3].innerHTML = `${ Math.round(settings.ui * 100) }%`;

	deleteScenes();
	document.getElementById('app').appendChild(scene);
}

export const changeAudio = (indx, v, audio) => {

	arrowNext[indx].className = 'settings-arrow stroke';
	arrowPrev[indx].className = 'settings-arrow stroke';

	settings[audio] += v;
	if (settings[audio] >= 1) { 
		arrowNext[indx].className = 'settings-arrow stroke disabled';
		settings[audio] = 1; 
	} else if (settings[audio] <= 0) {
		arrowPrev[indx].className = 'settings-arrow stroke disabled';
	 	settings[audio] = 0; 
	} 

	window.localStorage.setItem('settings', JSON.stringify(settings));
	setVolume();
	
	option[1].innerHTML = `${Math.round(settings.music * 100)}%`;
	option[2].innerHTML = `${Math.round(settings.effects * 100)}%`;
	option[3].innerHTML = `${Math.round(settings.ui * 100)}%`;
	
	let volTest = new Audio('./res/audio/sfx/click.wav');
	volTest.volume = settings[audio];
	volTest.play();
}

arrowPrev[1].addEventListener('click',()=>{ changeAudio(1, -0.05, 'music') });
arrowNext[1].addEventListener('click',()=>{ changeAudio(1, 0.05, 'music') });

arrowPrev[2].addEventListener('click',()=>{ changeAudio(2, -0.05, 'effects') });
arrowNext[2].addEventListener('click',()=>{ changeAudio(2, 0.05, 'effects') });

arrowPrev[3].addEventListener('click',()=>{ changeAudio(3, -0.05, 'ui') });
arrowNext[3].addEventListener('click',()=>{ changeAudio(3, 0.05, 'ui') });

arrowPrev[1].addEventListener('mouseover', () => playSound('hover', 'ui'))
arrowNext[1].addEventListener('mouseover', () => playSound('hover', 'ui'))

arrowPrev[2].addEventListener('mouseover', () => playSound('hover', 'ui'))
arrowNext[2].addEventListener('mouseover', () => playSound('hover', 'ui'))

arrowPrev[3].addEventListener('mouseover', () => playSound('hover', 'ui'))
arrowNext[3].addEventListener('mouseover', () => playSound('hover', 'ui'))



exitContainer.addEventListener('click', loadMenuScene);
exitContainer.addEventListener('mouseover', ()=> playSound('click2', 'ui'));

deleteDataContainer.addEventListener('click', () => {
	localStorage.clear()
	window.location.reload();
})
deleteDataContainer.addEventListener('mouseover', ()=> playSound('click2','ui'));

function redeemCode() {
	let profile = JSON.parse(window.localStorage.getItem("profile"));
	let profileCodes = profile.codes;
	let redeemed = false;
	let incorrect = true;

	if (Object.keys(profileCodes).length == 0) {
		profile.codes[settingsCodeInput.value] = promotionalCodesData[settingsCodeInput.value];
		if (promotionalCodesData[settingsCodeInput.value] != undefined) {
			profile.ogrinas += promotionalCodesData[settingsCodeInput.value].ogrinas;
			window.localStorage.setItem('profile', JSON.stringify(profile));
			incorrect = false;
			playSound('pucharse','ui');
			return new Popup('CÓDIGO CORRECTO', `Has obtenido ${promotionalCodesData[settingsCodeInput.value].ogrinas} ogrinas.`, `ACEPTAR`);
		}	
	}

	Object.keys(promotionalCodesData).forEach((key) => {
		if (settingsCodeInput.value === key) {
			Object.keys(profileCodes).forEach((code)=>{ if (code == key) redeemed = true });
			if (!redeemed) {
				profile.codes[settingsCodeInput.value] = promotionalCodesData[settingsCodeInput.value];
				profile.ogrinas += promotionalCodesData[settingsCodeInput.value].ogrinas;
				window.localStorage.setItem('profile', JSON.stringify(profile));
				incorrect = false;
				playSound('pucharse','ui');
				return new Popup('CANJEO CORRECTO', `Has obtenido ${promotionalCodesData[settingsCodeInput.value].ogrinas} ogrinas.`, `ACEPTAR`);
			}
			return new Popup('CÓDIGO INCORRECTO', `Ya has canjeado este código anteriormente.`, `ACEPTAR`);
		} 
	})

	if (incorrect) playSound('popup','ui')
}

settingsCodeInput.addEventListener('input', () => {
	let n = Math.floor(Math.random()*2);
    (n==0) ? playSound('key','sfx') : playSound('key1','sfx');
});

const promotionalCodesData = {
	VALEX1000OGS: {
		ogrinas: 1000
	},
	VALEX2000OGS: {
		ogrinas: 2000
	},
	VALEX3000OGS: {
		ogrinas: 3000
	},
	VALEX4000OGS: {
		ogrinas: 4000
	},
	VALEX5000OGS: {
		ogrinas: 5000
	},
	MASOGRINITAS: {
		ogrinas: 5000
	},
	BUSCAOGRINAS: {
		ogrinas: 15000
	}
}