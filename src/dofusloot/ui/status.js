import {container as inventoryContainer} from './inventory.js';
import {container as statsContainer} from './stats.js';
import {playSound} from '../../data/audio.js';

export const container = document.createElement('div');
container.className = 'game-container status-container';

const tabContainer = document.createElement('div');
tabContainer.className = 'status-tab-container';
container.appendChild(tabContainer);

export const tab = []

for (let i = 0; i < 2; i++) {
	tab[i] = document.createElement('div');
	tab[i].className = 'status-tab';
	tabContainer.appendChild(tab[i]);
}

tab[0].innerHTML = 'MOCHILA';
tab[1].innerHTML = 'STATS';

export const locationContainer = document.createElement('div');
locationContainer.className = 'status-location-container';
container.appendChild(locationContainer);

export const location = document.createElement('div');
location.className = 'status-location';
locationContainer.appendChild(location);

export const portrait = document.createElement('div');
portrait.className = 'status-portrait';
container.appendChild(portrait);

const armorBarContainer = document.createElement('div');
armorBarContainer.className = 'status-armor-bar-container status-bar-container';
container.appendChild(armorBarContainer);

export const armorBar = document.createElement('div');
armorBar.className = 'status-armor-bar status-bar';
armorBarContainer.appendChild(armorBar);

export const armorLabel = document.createElement('div');
armorLabel.className = 'status-armor-label status-label';
armorBarContainer.appendChild(armorLabel);

const healthBarContainer = document.createElement('div');
healthBarContainer.className = 'status-health-bar-container status-bar-container';
container.appendChild(healthBarContainer);

export const healthBar = document.createElement('div');
healthBar.className = 'status-health-bar status-bar';
healthBarContainer.appendChild(healthBar);

export const healthLabel = document.createElement('div');
healthLabel.className = 'status-health-label status-label';
healthBarContainer.appendChild(healthLabel);

const manaBarContainer = document.createElement('div');
manaBarContainer.className = 'status-mana-bar-container status-bar-container';
container.appendChild(manaBarContainer);

export const manaBar = document.createElement('div');
manaBar.className = 'status-mana-bar status-bar';
manaBarContainer.appendChild(manaBar);

export const manaLabel = document.createElement('div');
manaLabel.className = 'status-mana-label status-label';
manaBarContainer.appendChild(manaLabel);

const energyBarContainer = document.createElement('div');
energyBarContainer.className = 'status-energy-bar-container status-bar-container';
container.appendChild(energyBarContainer);

export const energyBar = document.createElement('div');
energyBar.className = 'status-energy-bar status-bar';
energyBarContainer.appendChild(energyBar);

export const energyLabel = document.createElement('div');
energyLabel.className = 'status-energy-label status-label';
energyBarContainer.appendChild(energyLabel);

const statContainer  = document.createElement('div');
statContainer.className = 'status-stat-container';
container.appendChild(statContainer);

const stat = [];
const statIcon = [];
export const statLabel = [];

for (let i = 0; i < 4; i++) {
	stat[i] = document.createElement('div');
	stat[i].className = 'status-stat';
	statContainer.appendChild(stat[i]);

	statIcon[i] = document.createElement('div');
	statIcon[i].className = 'status-stat-icon';
	stat[i].appendChild(statIcon[i]);

	statLabel[i] = document.createElement('div');
	statLabel[i].className = 'status-stat-label';
	stat[i].appendChild(statLabel[i]);
}

var tabSelected = 'inventory';

tab[0].className = 'status-tab status-tab-selected';

tab[0].addEventListener('click', () => {
	if (tabSelected == 'inventory') return;
	playSound('click5', 'ui')
	tabSelected = 'inventory';
	inventoryContainer.removeChild(statsContainer);

	tab[0].className = 'status-tab status-tab-selected';
	tab[1].className = 'status-tab';
	container.style.borderTopLeftRadius = '0px';
	locationContainer.style.borderTopLeftRadius = '5px';
	tab[1].style.borderTopRightRadius = '5px';
})

tab[0].addEventListener('mouseover', () => { playSound('hover', 'ui') })

tab[1].addEventListener('click', () => {
	if (tabSelected == 'stats') return;
	playSound('click5', 'ui')
	tabSelected = 'stats';
	inventoryContainer.appendChild(statsContainer);

	tab[1].className = 'status-tab status-tab-selected';
	tab[0].className = 'status-tab';
	container.style.borderTopLeftRadius = '5px';
	locationContainer.style.borderTopLeftRadius = '0px';
	tab[1].style.borderTopRightRadius = '0px';
})

tab[1].addEventListener('mouseover', () => { playSound('hover', 'ui') })
