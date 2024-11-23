export const container = document.createElement('div');
container.className = 'game-container inventory-container';

export const goldLabel = document.createElement('div');
goldLabel.className = 'inventory-gold-label stroke';
container.appendChild(goldLabel);

const setContainer = document.createElement('div');
setContainer.className = 'inventory-set-container';
container.appendChild(setContainer);

const gearContainer = document.createElement('div');
gearContainer.className = 'inventory-gear-container';
container.appendChild(gearContainer);

export const gear = [];

for (let i = 0; i < 10; i++) {
	gear[i] = document.createElement('div');
	gear[i].className = 'inventory-gear slot';
	gearContainer.appendChild(gear[i]);
}

const bagContainer = document.createElement('div');
bagContainer.className = 'inventory-bag-container';
container.appendChild(bagContainer);

export const bag = [];

for (let i = 0; i < 20; i++) {
	bag[i] = document.createElement('div');
	bag[i].className = 'inventory-bag slot';
	bagContainer.appendChild(bag[i]);
}

const dofamContainer = document.createElement('div');
dofamContainer.className = 'inventory-dofam-container';
container.appendChild(dofamContainer);

export const dofam = [];

for (let i = 0; i < 8; i++) {
	dofam[i] = document.createElement('div');
	dofam[i].className = 'inventory-bag slot';
	dofamContainer.appendChild(dofam[i]);
}
