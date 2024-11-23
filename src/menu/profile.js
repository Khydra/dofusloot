import {deleteScenes} from '../global/sceneManager.js';
import {loadMenuScene} from './menu.js';
import {playSound} from '../data/audio.js';
import {achievementData} from '../global/achievementData.js';

const scene = document.createElement('div');
scene.className = 'scene menu-scene';

const achievementContainer = document.createElement('div');
achievementContainer.className = 'menu-container menu-profile-achievement-container';
scene.appendChild(achievementContainer);

const achievementTittle = document.createElement('div');
achievementTittle.className = 'menu-profile-achievement-tittle';
achievementTittle.innerHTML = 'LOGROS';
achievementContainer.appendChild(achievementTittle);

const stadisticContainer = document.createElement('div');
stadisticContainer.className = 'menu-container menu-profile-stadistic-container';
scene.appendChild(stadisticContainer);

const stadisticTittle = document.createElement('div');
stadisticTittle.className = 'menu-profile-stadistic-tittle';
stadisticTittle.innerHTML = 'ESTADÍSTICAS';
stadisticContainer.appendChild(stadisticTittle);

const exitContainer = document.createElement('div');
exitContainer.className = 'menu-container menu-return-container';
exitContainer.innerHTML = 'VOLVER';
scene.appendChild(exitContainer);

export function loadProfileScene() {
	deleteScenes();
	loadAchievement();
	document.getElementById('app').appendChild(scene);
}

exitContainer.addEventListener('click', loadMenuScene);
exitContainer.addEventListener('mouseover', ()=> playSound('click2','ui'));

const achievementListContainer = document.createElement('div');
achievementListContainer.className = 'menu-profile-achievement-list-container';
achievementContainer.appendChild(achievementListContainer);

const achievementCase = [];
const achievementName = [];
const achievementReward = [];

Object.keys(achievementData).forEach((key, i) => {
	achievementCase[i] = document.createElement('div');
	achievementCase[i].className = 'menu-profile-achievement-case disabled';
	achievementListContainer.appendChild(achievementCase[i]);

	achievementName[i] = document.createElement('div');
	achievementName[i].className = 'menu-profile-achievement-name stroke';
	achievementName[i].innerHTML = achievementData[key].name
	achievementCase[i].appendChild(achievementName[i]);

	achievementReward[i] = document.createElement('div');
	achievementReward[i].className = 'menu-profile-achievement-reward stroke';
	achievementReward[i].innerHTML = `${achievementData[key].reward} ogrinas`;
	achievementReward[i].addEventListener('click', () => {completeAchievment(i)})
	achievementCase[i].appendChild(achievementReward[i]);
})

function loadAchievement() {
	let profileAchivement = JSON.parse(window.localStorage.getItem("profile")).achievement;

	if (profileAchivement[undefined]) {
		delete profileAchivement[undefined];
	}

	Object.keys(profileAchivement).forEach(key => {
		
		if (profileAchivement[key] == 'completed') {
			achievementCase[key].className = 'menu-profile-achievement-case-completed';
			achievementName[key].className = 'menu-profile-achievement-name-completed stroke';
			achievementReward[key].style.display = 'none';
		}
		if (profileAchivement[key] == 'able') achievementCase[key].className = 'menu-profile-achievement-case';
		
	})
}

function completeAchievment(id) {
	let profile = JSON.parse(window.localStorage.getItem("profile"));
	profile.ogrinas += achievementData[id].reward;
	profile.achievement[id] = 'completed';
	window.localStorage.setItem('profile', JSON.stringify(profile));
	loadAchievement();
}