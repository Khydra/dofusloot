export const container = document.createElement('div');
container.className = 'game-container shop-container';

export const buttonLock = document.createElement('div');
buttonLock.className = 'shop-button shop-button-lock';
buttonLock.style.backgroundImage = 'url("./res/image/icon/unlock.png")';
container.appendChild(buttonLock);

const itemContainer = document.createElement('div');
itemContainer.className = 'shop-item-container';
container.appendChild(itemContainer);

export const item = [];

for (let i = 0; i < 6; i++) {
	item[i] = document.createElement('div');
	item[i].className = 'shop-item slot';
	itemContainer.appendChild(item[i]);
}

export const buttonReroll = document.createElement('div');
buttonReroll.className = 'shop-button shop-button-reroll';
buttonReroll.style.backgroundImage = 'url("./res/image/icon/refresh.png")';
container.appendChild(buttonReroll);
