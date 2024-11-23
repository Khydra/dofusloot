import {container} from '../ui/battle.js';

export class NumberAnim {
	constructor(value, type, critical = false, heal = false) {
		this.value = value;
		this.type = type;
		this.critical = critical;
		this.heal = heal;
		this.element = document.createElement('div');
        this.element.className = 'number-anim';
        this.create();
	}

	create() {
		container.appendChild(this.element);
		this.element.innerHTML = `<span class="${this.type}">${this.value}</vale>`;
		this.animate();
	}

	animate() {
		const x = (Math.random() * 20)+40;
		const y = (Math.random() * 20)+50;
		this.element.style.left = `${x}%`;
		this.element.style.top = `${y}%`;
		setTimeout(()=>{ this.destroy() }, 1500);
	}

	destroy() {
		container.removeChild(this.element);
	}
}