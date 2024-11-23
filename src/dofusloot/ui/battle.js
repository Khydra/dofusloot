export const container = document.createElement('div');
container.className = 'game-container battle-container';

const enemyInfoContainer = document.createElement('div');
enemyInfoContainer.className = 'enemy-info-container';
container.appendChild(enemyInfoContainer);

export const enemyName = document.createElement('div');
enemyName.className = 'enemy-name';

enemyInfoContainer.appendChild(enemyName);

const healthBarContainer = document.createElement('div');
healthBarContainer.className = 'enemy-health-bar-container enemy-bar-container';
enemyInfoContainer.appendChild(healthBarContainer);

export const healthBar = document.createElement('div');
healthBar.className = 'enemy-health-bar enemy-bar';
healthBarContainer.appendChild(healthBar);

export const healthLabel = document.createElement('div');
healthLabel.className = 'enemy-health-label enemy-label';
healthBarContainer.appendChild(healthLabel);

const armorBarContainer = document.createElement('div');
armorBarContainer.className = 'enemy-armor-bar-container enemy-bar-container';
enemyInfoContainer.appendChild(armorBarContainer);

export const armorBar = document.createElement('div');
armorBar.className = 'enemy-armor-bar enemy-bar';
armorBarContainer.appendChild(armorBar);

export const armorLabel = document.createElement('div');
armorLabel.className = 'enemy-armor-label enemy-label';
armorBarContainer.appendChild(armorLabel);

const resisContainer = document.createElement('div');
resisContainer.className = 'enemy-resis-container';
enemyInfoContainer.appendChild(resisContainer);

const resis = [];
const resisIcon = [];
export const resisLabel = [];

for (let i = 0; i < 4; i++) {
	resis[i] = document.createElement('div');
	resis[i].className = 'enemy-resis';
	resisContainer.appendChild(resis[i]);

	resisIcon[i] = document.createElement('div');
	resisIcon[i].className = 'enemy-resis-icon';
	resis[i].appendChild(resisIcon[i]);

	resisLabel[i] = document.createElement('div');
	resisLabel[i].className = 'enemy-resis-label';
	resis[i].appendChild(resisLabel[i]);
}

export const actionContainer = document.createElement('div');
actionContainer.className = 'enemy-action-container';
enemyInfoContainer.appendChild(actionContainer);

export const action = [];

for (let i = 0; i < 10; i++) {
	action[i] = document.createElement('div');
	action[i].className = 'enemy-action';
	actionContainer.appendChild(action[i]);
}

const enemyImageContainer = document.createElement('div');
enemyImageContainer.className = 'enemy-image-container';
container.appendChild(enemyImageContainer);

export const enemyImage = document.createElement('div');
enemyImage.className = 'enemy-image';
enemyImageContainer.appendChild(enemyImage);

