export const container = document.createElement('div');
container.className = 'game-container panel-container';

export const textContainer = document.createElement('div');
textContainer.className = 'game-container panel-text-container';
//container.appendChild(textContainer);

export const text = document.createElement('div');
text.className = 'panel-text';
textContainer.appendChild(text);

export const spellContainer = document.createElement('div');
spellContainer.className = 'panel-spell-container';
container.appendChild(spellContainer);

export var spell = [];
export var spellImage = [];

for (let i = 0; i < 12; i++) {
	spell[i] = document.createElement('div');
	spell[i].className = 'panel-spell';
	spellContainer.appendChild(spell[i]);

	spellImage[i] = document.createElement('div');
	spellImage[i].className = 'panel-spell-image panel-spell-image-disabled';
	spell[i].appendChild(spellImage[i]);
}

export const summonContainer = document.createElement('div');
summonContainer.className = 'panel-summon-container';
container.appendChild(summonContainer);

export var summon = [];
export var summonImage = [];

for (let i = 0; i < 4; i++) {
	summon[i] = document.createElement('div');
	summon[i].className = 'panel-summon';
	summonContainer.appendChild(summon[i]);

	summonImage[i] = document.createElement('div');
	summonImage[i].className = 'panel-summon-image panel-summon-image-disabled';
	summon[i].appendChild(summonImage[i]);
}

export const mainButton = document.createElement('div');
mainButton.className = 'panel-main-button';
container.appendChild(mainButton);
