export const container = document.createElement('div');
container.className = 'game-container stats-container';

export const statContainer = document.createElement('div');
statContainer.className = 'stats-stat-container';
container.appendChild(statContainer);

export var stat = [];
export var statValue = [];
export var statLabel = [];

for (let i = 0; i < 24; i++) {
	stat[i] = document.createElement('div');
	stat[i].className = 'stats-stat';
	statContainer.appendChild(stat[i]);

	statValue[i] = document.createElement('div');
	statValue[i].className = 'stats-stat-value';
	stat[i].appendChild(statValue[i]);

	statLabel[i] = document.createElement('div');
	statLabel[i].className = 'stats-stat-label';
	stat[i].appendChild(statLabel[i]);	
}