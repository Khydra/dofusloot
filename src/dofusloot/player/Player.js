import * as uiStatus from '../ui/status.js';
import * as uiInventory from '../ui/inventory.js';
import * as uiPanel from '../ui/panel.js';
import {statLabel, statValue} from '../ui/stats.js';
import {textStat} from '../../data/text.js';
import {Battle} from '../global/Battle.js';
import {Panel} from '../global/Panel.js';
import {directSpell, sideSpell} from './spellManager.js';
import {callSummon, summonAction} from './summonManager.js';
import {summonData} from './summonData.js';
import {Popup} from '../global/Popup.js';
import {endGame, spellPool, enemy} from '../game.js';
import {NumberAnim} from '../animation/NumberAnim.js';
import {playSound} from '../../data/audio.js';

export class Player {
    constructor(playerData) {
        this.data = JSON.parse(JSON.stringify(playerData));
    	this.name = this.data.name;
    	this.class = this.data.class;
    	this.gold = this.data.gold;
        this.ogrinas = this.data.ogrinas;
        this.stat = this.data.stat;
        this.spell = this.data.spell;
        this.effect = this.data.effect;
        this.summon = this.data.summon;
        this.create(); 
    }

    create() {
        uiInventory.goldLabel.innerHTML = `${this.gold} Kamas`;
    	uiStatus.portrait.style.backgroundImage = `url("${this.class.portrait}")`;
        for (let i = 0; i < 12; i++) uiPanel.spellImage[i].innerHTML = "";
        
        this.spell.forEach((s) => { 
            s.uses[0] = s.uses[1];
            if (s.cd != undefined) s.cd[0] = 0;
        });
        this.summonDestroy()
        this.spellImageUpdate();
        this.update();
    }

    update() {       
    	this.statusUpdate();
        this.statsUpdate();	
        this.panelUpdate();
        if (this.summon.length > 0) this.summonUpdate();
    }

    statusUpdate() {
        uiStatus.healthLabel.innerHTML = `${this.stat.vit[0]}/${this.stat.vit[1]}`;
        uiStatus.armorLabel.innerHTML = `${this.stat.arm[0]}/${this.stat.arm[1]}`;
        uiStatus.manaLabel.innerHTML = `${this.stat.pa[0]}/${this.stat.pa[1]}`;
        uiStatus.energyLabel.innerHTML = `${this.stat.pm[0]}/${this.stat.pm[1]}`;

        uiStatus.healthBar.style.width = `${this.stat.vit[0] / this.stat.vit[1] * 100}%`;
        uiStatus.armorBar.style.width = `${this.stat.arm[0] / this.stat.arm[1] * 100}%`;
        uiStatus.manaBar.style.width = `${this.stat.pa[0] / this.stat.pa[1] * 100}%`;
        uiStatus.energyBar.style.width = `${this.stat.pm[0] / this.stat.pm[1] * 100}%`;

        uiStatus.statLabel[0].innerHTML = this.stat.str[0];
        uiStatus.statLabel[1].innerHTML = this.stat.int[0];
        uiStatus.statLabel[2].innerHTML = this.stat.agi[0];
        uiStatus.statLabel[3].innerHTML = this.stat.cha[0];
    }

    statsUpdate() {
        Object.keys(this.stat).forEach((key, indx)=> {
            statValue[indx].innerHTML = `${this.stat[key][0]}`;
            statLabel[indx].innerHTML = `${textStat[key]}`;
        })
        Object.keys(this.stat).forEach((key, indx)=> {
            statValue[indx].innerHTML = `${this.stat[key][0]}`;
            statLabel[indx].innerHTML = `${textStat[key]}`;
        })
    }

    panelUpdate() {
        switch(Battle.status) {
            case 'not-started':
                this.spellDisable();
                uiPanel.mainButton.innerHTML = 'EMPEZAR COMBATE';
            break;
            case 'active':
                this.spellUpdate();
                uiPanel.mainButton.innerHTML = 'FINALIZAR TURNO'; 
            break;
            case 'ended':
                 this.spellDisable();
                uiPanel.mainButton.innerHTML = 'CONTINUAR';
            break;
        }
    }

    changeStat(stat, value) {
        this.stat[stat][0] += value;
        this.stat[stat][1] += value;
        this.update();
    }

    gainOgrinas(value) { this.ogrinas += value }

    changeGold(value) {
        this.gold += value;
        if (this.gold < 0) this.gold = 0;
        uiInventory.goldLabel.innerHTML = `${this.gold} Kamas`;
    }

    spellImageUpdate() {
        uiPanel.spellImage.forEach((img)=> { img.style.backgroundImage = "" })
        this.spell.forEach((spell, i) => {
            uiPanel.spellImage[i].className = 'panel-spell-image';
            uiPanel.spellImage[i].style.backgroundImage = `url("${spell.image}")`;
        })
    }

    spellDisable = () => { for (let i = 0; i < uiPanel.spell.length; i++) uiPanel.spellImage[i].className = 'panel-spell-image panel-spell-image-disabled'; }  

    spellUpdate() {
        this.spellDisable();
        if (Battle.status != 'active' || !Battle.playerTurn) return;
        this.spell.forEach((spell, i) => {
            if (spell.cd != undefined && spell.cd[0] > 0) {
                uiPanel.spellImage[i].innerHTML = spell.cd[0];
                uiPanel.spellImage[i].className = 'panel-spell-image panel-spell-image-disabled';
            }
            else {
                uiPanel.spellImage[i].innerHTML = "";
                switch(spell.cost[0]) {
                    case 'pa':
                        if (this.stat.pa[0] < spell.cost[1] || spell.uses[0] == 0) uiPanel.spellImage[i].className = 'panel-spell-image panel-spell-image-disabled';
                        else uiPanel.spellImage[i].className = 'panel-spell-image';
                        break;
                    case 'pm':
                        if (this.stat.pm[0] < spell.cost[1] || spell.uses[0] == 0) uiPanel.spellImage[i].className = 'panel-spell-image panel-spell-image-disabled';
                        else uiPanel.spellImage[i].className = 'panel-spell-image';
                        break
                }
            }  
        })
    }

    summonDestroy() {
        this.summon = [];
        for (let i = 0; i < 4; i++) {
            uiPanel.summonImage[i].className = 'panel-summon-image panel-summon-image-disabled'; 
            uiPanel.summonImage[i].style.backgroundImage = ``;
        }

        summonData.sismobomba.attack.bonus[0] = 0;
        summonData.explobomba.attack.bonus[0] = 0;
        summonData.tornabomba.attack.bonus[0] = 0;
        summonData.hidrobomba.attack.bonus[0] = 0;
    }

    summonUpdate() {
        this.summon.forEach((sum, i) => {
            if (sum.activation <= this.stat.pm[0] || isNaN(sum.activation)) uiPanel.summonImage[i].className = 'panel-summon-image';
            else uiPanel.summonImage[i].className = 'panel-summon-image panel-summon-image-disabled';
        })
    }

    changePA(q) {
        this.stat.pa[0] += q;
        if (this.stat.pa[0] > this.stat.pa[1]) this.stat.pa[0] = this.stat.pa[1];
        if (this.stat.pa[0] < 0) this.stat.pa[0] = 0;

        this.update();
    }

    changePM(q) {
        this.stat.pm[0] += q;
        if (this.stat.pm[0] > this.stat.pm[1]) this.stat.pm[0] = this.stat.pm[1];
        if (this.stat.pm[0] < 0) this.stat.pm[0] = 0;
        
        this.update();
    }

    obtainSpell(newSpell) {
        this.spell.push(newSpell);
        this.spellImageUpdate();
        spellPool.update();
    }

    useSpell(i, bubble) {
        let spell = this.spell[i];

        if (spell.type == 'summon' && this.summon.length == 4) return;

        (spell.cost[0] == 'pa') ?  this.changePA(-spell.cost[1]) : this.changePM(-spell.cost[1]);
        if (spell.cd != undefined) spell.cd[0] = spell.cd[1];
        spell.uses[0]--;

        Panel.addLine(`<br><span class="yellow">${this.name}</span> lanza <span class="${spell.element}">${spell.name}</span>`);
        if (spell.audio) playSound(spell.audio, 'sfx')
        if (spell.type == 'direct') directSpell(spell);
        if (spell.type == 'side') sideSpell(spell);
        if (spell.type == 'summon') callSummon(spell);

        if (bubble) bubble.draw();

        if (enemy.health[0] > 0) {
            if (enemy.aura.pestilenciaDragocerdo && spell.cost[0] == 'pa') this.getDamaged(spell.cost[1]*5);
            if (enemy.aura.reconstitucionAncestral && spell.cost[0] == 'pm') enemy.getHealed(Math.floor(enemy.health[1]*0.25));
            if (enemy.aura.palabraRevigorizante) enemy.getHealed(Math.floor(enemy.health[1]*0.01));
        }
    
        this.update();
    }

    useSummon(i) {
        let summon = this.summon[i];

        if (summon.activation <= this.stat.pm[0]) {
            summonAction(summon);
            this.changePM(-summon.activation);
            this.summonUpdate();
        }
    }

    spellCooldown() {
        this.spell.forEach((s)=> { 
            if (s.cd != undefined && s.cd[0] != 99) s.cd[0]--;
        });
    }

    getDamaged(value, pen = false) {
        let totalDamage = value;
        let remeaningDamage = value;
        let armorDamage = null;

        if (this.effect.bloodPact) this.bloodPact();

        if (this.stat.arm[0] > 0 && !pen) {
            let iArm = this.stat.arm[0];
            remeaningDamage = totalDamage - this.stat.arm[0];
            this.stat.arm[0] -= totalDamage;
            if (this.stat.arm[0] < 0) this.stat.arm[0] = 0;
            armorDamage =  iArm - this.stat.arm[0];
            Panel.addLine(`<br><span class="yellow">${this.name}</span> sufre <span class="grey">-${armorDamage} PDE</span>.`);
        }

        if (remeaningDamage > 0) {
            this.stat.vit[0] -= remeaningDamage;
            Panel.addLine(`<br><span class="yellow">${this.name}</span> sufre <span class="red">-${remeaningDamage} PDV</span>.`);
        }

        if (this.stat.vit[0] < 0 || this.stat.vit[0] == 0) {
            this.stat.vit[0] = 0;
            this.die();
        }

        this.statusUpdate();
        this.statsUpdate();
    }

    getHealed(value, el = null) {
        this.stat.vit[0] += value;
        if (this.stat.vit[0] > this.stat.vit[1]) this.stat.vit[0] = this.stat.vit[1];
        
        if (el == null) Panel.addLine(`<br><span class="yellow">${this.name}</span> ha recuperado <span class="green">${value} PDV</span>.`);
        else Panel.addLine(`<br><span class="yellow">${this.name}</span> ha recuperado <span class="green">${value} PDV</span> 
                            <span class="${el}">(${textStat[el]})</span>.`);

        this.statusUpdate();
        this.statsUpdate();
    }

    getArmored(value) {
        if (value == 'all') value = this.stat.arm[1];
        this.stat.arm[0] += value;
        if (this.stat.arm[0] > this.stat.arm[1]) this.stat.arm[0] = this.stat.arm[1];
        Panel.addLine(`<br><span class="yellow">${this.name}</span> ha recuperado <span class="grey">${value} PDE</span>.`);
        this.statusUpdate();
        this.statsUpdate();
    }

    resetBuff() {
        this.resetStatBuff();
        this.resetSpellBuff();
    }

    resetStatBuff() {
        Object.keys(this.stat).forEach((key)=> {
            this.stat[key][0] = this.stat[key][1];
        })
        this.effect.poison = 0;
        this.effect.bloodPact = false;
        this.effect.activatedTraps = 0;
    }

    resetSpellBuff() {
        this.spell.forEach((spell, i)=> {
            uiPanel.spellImage[i].innerHTML = "";
            if (spell.powerBuff != undefined) spell.powerBuff[0] = 0;
        })
    }

    poison() {
        Panel.addLine(`<br><span class="yellow">${this.name}</span> se resiente a los efectos del veneno.`);
        this.getDamaged(this.effect.poison);
    }


    bloodPact() {
        this.stat.pot[0] += 20;
        Panel.addLine(`<br><span class="yellow"> ${this.name}</span> <span class="neutral">+20 Potencia</span>`);
    }

    die() {
        let profile = JSON.parse(window.localStorage.getItem("profile"));
        profile.ogrinas += this.ogrinas;
        profile.savedGame = false;
        window.localStorage.setItem('profile', JSON.stringify(profile));

        Panel.addLine(`<br><span class="yellow">${this.name}</span> cae debilitado.`);
        return new Popup('HAS PERDIDO', `Has caído en combate.<br> Obtienes ${this.ogrinas} ogrinas por tus hazañas.`, 'VOLVER AL MENU', endGame);
    }

}

	