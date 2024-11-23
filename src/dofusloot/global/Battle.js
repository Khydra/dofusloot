import {Panel} from './Panel.js';
import {player, enemy, location} from '../game.js';
import {burnDamage, arsenicDamage, paralysingPoisonDamage, poisonedWindEffect} from '../player/spellManager.js';
import {enemyImage} from '../ui/battle.js';
import {playSound} from '../../data/audio.js';
import {summonAction} from '../player/summonManager.js';
export class Battle {
	static status = 'not-started';
	static turn = 0;
	static playerTurn = false;

	static start() {
		Battle.status = 'active';
		Battle.playerTurn = true;
		Battle.turn = 0;
		player.resetBuff();
		this.startPlayerTurn();
		playSound('ready', 'ui');

		if (enemy.aura.desblopizacion) enemy.desblopizacion();
	}

	static end() {
		Battle.status = 'ended';
		Battle.turn = 0;
		
		player.summonDestroy();
		player.resetBuff();
		player.spell.forEach((s)=> { 
			s.uses[0] = s.uses[1];
			if (s.cd != undefined) s.cd[0] = 0;
		});

		let goldDrop = enemy.gold + (enemy.gold * Math.ceil(player.stat.wis[0]/100));

		Panel.addLine(`<br>Final del combate. 
					   <br>Ya puedes administrar tu equipo.
					   <br>Obtienes <span class="yellow">${goldDrop} Kamas</span>`);

		player.changeGold(goldDrop);
		player.gainOgrinas(enemy.ogrinas);

		player.update();
	}

	static startPlayerTurn() {
		if (player.effect.poison > 0) player.poison();
		if (player.stat.vit[0] == 0) return;
		Battle.playerTurn = true;
		Battle.turn++;

		if (enemy.aura.caparazonAlas != undefined) enemy.aura.caparazonAlas = true;

		Panel.addLine(`<br><span class="yellow">Turno ${Battle.turn}</span>`);
		Panel.activate();
		player.spell.forEach((s)=>{ s.uses[0] = s.uses[1]; })
		player.summon.forEach((summ)=>{ if (summ.activation === 'onTurnStart') summonAction(summ); })
		player.update();
	}

	static endPlayerTurn() {
		playSound('turnEnd', 'ui')
		Battle.playerTurn = false;
		Panel.disable();
		player.spellCooldown();
		player.changePA(player.stat.pa[1]);

		if (enemy.isBurned) burnDamage();
		if (enemy.arsenic > 0) arsenicDamage();
		if (enemy.paralysingPoison) paralysingPoisonDamage();
		if (enemy.poisonedWind) poisonedWindEffect();


		if (enemy.health[0] > 0) setTimeout(()=>{ this.startEnemyTurn() }, 600);
		else {
			Panel.activate();
			player.update();
		}
	}

	static startEnemyTurn() {

		var actions = [];
		Object.values(enemy.action).forEach((action)=> { if (action.active) {actions.push(action)} })
		enemyImage.style.animation = 'animarSprite 1s steps(32) infinite'
		actions.forEach((action, i) => {
			setTimeout(()=>{ enemy.doAction(action) },(1000 * i));
		})

		setTimeout(()=>{ this.endEnemyTurn(); }, 1000 * actions.length);
	}

	static endEnemyTurn() {
		if (player.stat.vit[0] > 0) playSound('turnStart', 'ui')
		this.startPlayerTurn();
		enemyImage.style.animation = ''
	}
}