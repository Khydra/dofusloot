import * as uiPanel from '../ui/panel.js';
import {player} from '../game.js';

export class Panel {
	static addLine(message) {
		uiPanel.text.innerHTML += message;
		uiPanel.textContainer.scrollTop = 100000;
	}

	static deleteAll() {
		uiPanel.text.innerHTML = '';
	}

	static disable() {
		uiPanel.mainButton.className = 'panel-main-button-disabled';
		player.spellDisable();
	}

	static activate() {
		uiPanel.mainButton.className = 'panel-main-button';
	}
}