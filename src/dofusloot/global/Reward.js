import {player, spellPool, inventory, location} from '../game.js';
import {BubbleItem, BubbleSpell} from './Bubble.js';
import {Item} from '../inventory/Item.js';
import {itemData} from '../inventory/itemData.js';
import {playSound} from '../../data/audio.js';
import {textStat} from '../../data/text.js';

export class Reward {
    static inReward = false;

    constructor(zone) {
        this.scene;
        this.zone = zone;
        this.option = [];
        this.optionText = [];
        this.reward = [];
        this.create();
    }

    create() {
        this.scene = document.createElement('div');
        this.scene.className = 'scene black-scene';

        let container = document.createElement('div');
        container.className = 'reward-container';
        this.scene.appendChild(container);

        let tittle = document.createElement('div');
        tittle.className = 'reward-tittle stroke';
        tittle.innerHTML = `¡Has completado <span class="yellow">${this.zone.name}</span>!`;
        container.appendChild(tittle);

        let text = document.createElement('div');
        text.className = 'reward-text stroke';
        text.innerHTML = 'Escoge una de las siguientes bendiciones para continuar hacia la siguiente zona.'
        container.appendChild(text);

        let optionContainer = document.createElement('div');
        optionContainer.className = 'reward-option-container';
        container.appendChild(optionContainer);

        for (let i = 0; i < 4; i++) {
            this.option[i] = document.createElement('div');
            this.option[i].className = 'reward-option';
            optionContainer.appendChild(this.option[i]);

            this.optionText[i] = document.createElement('div');
            this.optionText[i].className = 'reward-option-text stroke';
            this.option[i].appendChild(this.optionText[i]);

            this.option[i].addEventListener('click', () => this.acceptReward(this.reward[i]));
            this.option[i].addEventListener('mouseover', () => { playSound('hover3', 'ui')})
        }

        Reward.inReward = true;

        playSound('upgrade', 'ui');
        this.selectRandomRewards('hover3', 'ui');
        document.getElementById('app').appendChild(this.scene);
    }

    selectRandomRewards() {
        let pos = 0;
        let n = 0;
        while (this.reward.length < 4) {
            if (pos == 0 && player.spell.length < 9) n = Math.floor(Math.random() * 5);
            else if (pos == 1) n = Math.floor(Math.random() * 17)+7;
            else n = Math.floor(Math.random() * 26);
            if (!this.reward.includes(n) &&
                !(spellPool.pool[player.class.name].earth.length <= 0 && n == 1) &&                
                !(spellPool.pool[player.class.name].fire.length <= 0 && n == 2) &&
                !(spellPool.pool[player.class.name].air.length  <= 0 && n == 3) &&
                !(spellPool.pool[player.class.name].water.length <= 0 && n == 4) &&
                !(player.spell.length >= 11 && n < 6) &&
                !(inventory.bag.length == 20 && n > 5 && n < 9)) {
                this.reward.push(n); 
                this.newReward(n, pos);
                pos++;
            }
        }
    }

    newReward(n, pos) {
        let bestElement;
        if (n == 9 || n == 16) {
            let arrElement = [player.stat.str[1], player.stat.int[1], player.stat.agi[1], player.stat.cha[1]];
            let i = arrElement.indexOf(Math.max(...arrElement));
            if (i == 0) bestElement = 'str';
            else if (i == 1) bestElement = 'int';
            else if (i == 2) bestElement = 'agi';
            else if (i == 3) bestElement = 'cha';
        }

        switch(n) {
            case 0: 
                this.optionText[pos].innerHTML = `Bendición de Clase <br>Escoge 1 de entre 3 hechizos de tu clase.`;
                this.option[pos].style.backgroundColor = `#d1a855`;
            break;
            case 1: 
                this.optionText[pos].innerHTML = `Bendición Telúrica <br>Obtén un hechizo de TIERRA aleatorio de tu clase.`;
                this.option[pos].style.backgroundColor = `#a17535`;
            break;
            case 2: 
                this.optionText[pos].innerHTML = `Bendición Fogosa <br>Obtén un hechizo de FUEGO aleatorio de tu clase.`;
                this.option[pos].style.backgroundColor = `#ff6d01`;
            break;
            case 3: 
                this.optionText[pos].innerHTML = `Bendición Eólica <br>Obtén un hechizo de AIRE aleatorio de tu clase.`;
                this.option[pos].style.backgroundColor = `#88c465`;
            break;
            case 4: 
                this.optionText[pos].innerHTML = `Bendición Pluvial <br>Obtén un hechizo de AGUA aleatorio de tu clase.`;
                this.option[pos].style.backgroundColor = `#7fd0fe`;
            break;
            case 5: 
                this.optionText[pos].innerHTML = `Bendición del Zurcarak <br>Obtén un hechizo aleatorio de cualquier clase. (Zurcarak: Escoge 1 de entre 3).`
                this.option[pos].style.backgroundColor = `var(--red)`;
            break;
            case 6: 
                this.optionText[pos].innerHTML = `Bendición del Forjalanza <br>Obtén un arma exomágica acorde al nivel de la zona. (Forjalanza: Nivel superior).`
                this.option[pos].style.backgroundColor = `var(--grey)`;
            break;
            case 7: 
                this.optionText[pos].innerHTML = `Bendición del Pandawa <br>Obtén un escudo exomágico acorde al nivel de la zona. (Pandawa: Nivel superior).`
                this.option[pos].style.backgroundColor = `var(--grey)`;
            break;
            case 8: 
                this.optionText[pos].innerHTML = `Bendición Forjamágica <br>Escoge 1 de entre 5 objetos exomágicos aleatorios acordes al nivel de la zona.`
                this.option[pos].style.backgroundColor = `var(--grey)`;
            break;
            case 9: 
                this.optionText[pos].innerHTML = `Bendición del Selotrop <br>Obtén +18 Daños a tu mejor elemento <span class="${bestElement}">[${textStat[bestElement]}]</span>. (Selotrop: +27 Daños).`
                this.option[pos].style.backgroundColor = `var(--blue)`;
            break;
            case 10: 
                this.optionText[pos].innerHTML = `Bendición del Anutrof <br>Obtén un saco de ${this.zone.kamas} Kamas. (Anutrof: ${this.zone.kamas*3} Kamas).`
                this.option[pos].style.backgroundColor = `var(--yellow)`;
            break;
            case 11: 
                this.optionText[pos].innerHTML = `Bendición del Sacrógrito <br>Gana 60 Vitalidad máxima. (Sacrógrito: +200 Vitalidad máxima).`
                this.option[pos].style.backgroundColor = `var(--red)`;
            break;
            case 12: 
                this.optionText[pos].innerHTML = `Bendición del Yopuka <br>Obtén +40 de Poténcia. (Youpka: +70 Potencia).`
                this.option[pos].style.backgroundColor = `var(--red)`;
            break;
            case 13: 
                this.optionText[pos].innerHTML = `Bendición del Ocra <br>Obtén +8 Daños. (Ocra: +15 Daños).`
                this.option[pos].style.backgroundColor = `var(--red)`;
            break;
            case 14: 
                this.optionText[pos].innerHTML = `Bendición del Sram <br>Obtén +5% Crítico. (Sram: +10% Crítico).`
                this.option[pos].style.backgroundColor = `var(--yellow)`;
            break;
            case 15: 
                this.optionText[pos].innerHTML = `Bendición del Feka <br>Gana +3% Resistencia. (Feka: +5% Resisténcia).`
                this.option[pos].style.backgroundColor = `var(--grey)`;
            break;
            case 16: 
                this.optionText[pos].innerHTML = `Bendición del Hipermago <br>Obtén +60 puntos a tu mejor elemento <span class="${bestElement}">[${textStat[bestElement]}]</span>. (Hipermago: +75 puntos).`
                this.option[pos].style.backgroundColor = `var(--blue)`;
            break;
            case 17: 
                this.optionText[pos].innerHTML = `Bendición del Uginak <br>Obtén +5% Daños armas. (Uginak: +9% Daños armas).`
                this.option[pos].style.backgroundColor = `var(--red)`;
            break;
            case 18: 
                this.optionText[pos].innerHTML = `Bendición del Rollback <br>Renueva las 4 nuevas bendiciones.`
                this.option[pos].style.backgroundColor = `var(--grey)`;
            break;
            case 19: 
                this.optionText[pos].innerHTML = `Bendición del Aniripsa <br>Obtén +15 puntos a la Vitalidad, Curas, Sabiduria y Prospección. (Aniripsa: +25 puntos).`
                this.option[pos].style.backgroundColor = `var(--green)`;
            break;
            case 20: 
                this.optionText[pos].innerHTML = `Bendición del Osamodas <br>Obtén +30 a todos los elementos. (Osamodas: +55 a todos los elementos).`
                this.option[pos].style.backgroundColor = `var(--red)`;
            break;
            case 21: 
                this.optionText[pos].innerHTML = `Bendición del Zobal <br>Gana 80 Armadura máxima. (Zobal: +140 Armadura máxima).`
                this.option[pos].style.backgroundColor = `var(--grey)`;
            break;
            case 22: 
                this.optionText[pos].innerHTML = `Bendición del Tymador <br>Obtén +3% Daños hechizos. (Tymador: +6% Daños hechizos).`
                this.option[pos].style.backgroundColor = `var(--red)`;
            break;
            case 23: 
                this.optionText[pos].innerHTML = `Bendición del Steamer <br>Obtén +12 Daños críticos. (Steamer: +18 Daños críticos).`
                this.option[pos].style.backgroundColor = `var(--red)`;
            break;
            case 24: 
                this.optionText[pos].innerHTML = `Bendición del Sadida <br>Gana 1PM máximo. (Sadida: +2PM)`
                this.option[pos].style.backgroundColor = `var(--green)`;
            break;
            case 25: 
                this.optionText[pos].innerHTML = `Bendición del Xelor <br>Gana 1PA máximo. (Xelor: +2PA)`;
                this.option[pos].style.backgroundColor = `var(--blue)`;
            break;
        }
    }

    acceptReward(pos) {
        let newSpell = null;
        playSound('start', 'ui');
        switch(pos) {
            case 0: 
                document.getElementById('app').removeChild(this.scene);
                return new RewardSpell(player.class)
            break;
            case 1: 
                newSpell = spellPool.pool[player.class.name].earth[Math.floor(Math.random()*spellPool.pool[player.class.name].earth.length)];
                player.obtainSpell(newSpell);
            break;
            case 2: 
                newSpell = spellPool.pool[player.class.name].fire[Math.floor(Math.random()*spellPool.pool[player.class.name].fire.length)];
                player.obtainSpell(newSpell);
            break;
            case 3: 
                newSpell = spellPool.pool[player.class.name].air[Math.floor(Math.random()*spellPool.pool[player.class.name].air.length)];
                player.obtainSpell(newSpell);
            break;
            case 4: 
                newSpell = spellPool.pool[player.class.name].water[Math.floor(Math.random()*spellPool.pool[player.class.name].water.length)];
                player.obtainSpell(newSpell);
            break;
            case 5: 
                if (player.class.name == 'Zurcarak') {
                    document.getElementById('app').removeChild(this.scene);
                    return new RewardSpell(null);
                } else {
                    //PROVISIONAL HASTA QUE ESTEN TODOS LOS HECHIZOS CREADOS
                    //LUEGO DESCOMENTAR LA LINEA DE AABJO
                    let characters = ['Yopuka', 'Ocra', 'Sacrogrito', 'Sram', 'Anutrof', 'Zurcarak', 'Sadida', 'Tymador', 'Zobal', 'Aniripsa']
                    //let characters = Object.keys(spellPool.pool);
                    let char = characters[Math.floor(Math.random() * characters.length)]
                    let element = Object.keys(spellPool.pool[char]);
                    let randomElement = element[Math.floor(Math.random() * element.length)];
                    newSpell = spellPool.pool[char][randomElement][Math.floor(Math.random() * spellPool.pool[char][randomElement].length)]
                    player.obtainSpell(newSpell);
                }
            break;
            case 6: 
                let wepPool = [];
                let wep;
                if (player.class.name != 'Forjalanza') {
                    for (let i = this.zone.itemPool[0]; i <= this.zone.itemPool[1]; i++) {
                        if (itemData[i].type == 'weapon') wepPool.push(itemData[i]);
                    }
                    let wep = new Item(wepPool[Math.floor(Math.random() * wepPool.length)]);
                    wep.getExo();
                    inventory.obtainItem(wep);
                }
            break;
            case 7: 
                let shdPool = [];
                let shd;
                if (player.class.name != 'Pandawa') {
                    for (let i = this.zone.itemPool[0]; i <= this.zone.itemPool[1]; i++) {
                        if (itemData[i].type == 'shield') shdPool.push(itemData[i]);
                    }
                    console.log(shdPool[Math.floor(Math.random() * shdPool.length)])
                    let shd = new Item(shdPool[Math.floor(Math.random() * shdPool.length)]);

                    shd.getExo();
                    inventory.obtainItem(shd);
                }
            break; 
            case 8: 
                document.getElementById('app').removeChild(this.scene);
                return new RewardItem(this.zone);
            break;
            case 9: 
                let arrS = [player.stat.str[1], player.stat.int[1], player.stat.agi[1], player.stat.cha[1]];
                let i = arrS.indexOf(Math.max(...arrS));
                    if (i == 0) {
                        (player.class.name == 'Selotrop') ? player.stat.strDmg[0] += 27 : player.stat.strDmg[0] += 18;
                        (player.class.name == 'Selotrop') ? player.stat.strDmg[1] += 27 : player.stat.strDmg[1] += 18;
                    } else if (i == 1) {
                        (player.class.name == 'Selotrop') ? player.stat.intDmg[0] += 27 : player.stat.intDmg[0] += 18;
                        (player.class.name == 'Selotrop') ? player.stat.intDmg[1] += 27 : player.stat.intDmg[1] += 18;
                    } else if (i == 2) {
                        (player.class.name == 'Selotrop') ? player.stat.agiDmg[0] += 27 : player.stat.agiDmg[0] += 18;
                        (player.class.name == 'Selotrop') ? player.stat.agiDmg[1] += 27 : player.stat.agiDmg[1] += 18;
                    } else if (i == 3) {
                        (player.class.name == 'Selotrop') ? player.stat.chaDmg[0] += 27 : player.stat.chaDmg[0] += 18;
                        (player.class.name == 'Selotrop') ? player.stat.chaDmg[1] += 27 : player.stat.chaDmg[1] += 18;
                    }
            break;
            case 10: 
                (player.class.name == 'Anutrof') ? player.changeGold(this.zone.kamas*3) : player.changeGold(this.zone.kamas);
            break;
            case 11: 
                 (player.class.name == 'Sacrogrito') ? player.stat.vit[1] += 200 : player.stat.vit[1] += 60;
                 (player.class.name == 'Sacrogrito') ? player.stat.vit[0] += 200 : player.stat.vit[0] += 60;
            break;
            case 12: 
                (player.class.name == 'Yopuka') ? player.stat.pot[1] += 70 : player.stat.pot[1] += 40;
                (player.class.name == 'Yopuka') ? player.stat.pot[0] += 70 : player.stat.pot[0] += 40;        
            break;
            case 13: 
                (player.class.name == 'Ocra') ? player.stat.dmg[1] += 15 : player.stat.dmg[1] += 8;
                (player.class.name == 'Ocra') ? player.stat.dmg[0] += 15 : player.stat.dmg[0] += 8;      
            break;
            case 14: 
                (player.class.name == 'Sram') ? player.stat.crt[1] += 10 : player.stat.crt[1] += 5;
                (player.class.name == 'Sram') ? player.stat.crt[0] += 10 : player.stat.crt[0] += 5;
            break;
            case 15: 
                (player.class.name == 'Feka') ? player.stat.res[1] += 5 : player.stat.res[1] += 3;
                (player.class.name == 'Feka') ? player.stat.res[0] += 5 : player.stat.res[0] += 3;
            break;
            case 16: 
                let arrH = [player.stat.str[1], player.stat.int[1], player.stat.agi[1], player.stat.cha[1]];
                let j = arrH.indexOf(Math.max(...arrH));
                if (j == 0) {
                    (player.class.name == 'Hipermago') ? player.stat.str[0] += 75 : player.stat.str[0] += 60;
                    (player.class.name == 'Hipermago') ? player.stat.str[1] += 75 : player.stat.str[1] += 60;
                } else if (j == 1) {
                    (player.class.name == 'Hipermago') ? player.stat.int[0] += 75 : player.stat.int[0] += 60;
                    (player.class.name == 'Hipermago') ? player.stat.int[1] += 75 : player.stat.int[1] += 60;
                } else if (j == 2) {
                    (player.class.name == 'Hipermago') ? player.stat.agi[0] += 75 : player.stat.agi[0] += 60;
                    (player.class.name == 'Hipermago') ? player.stat.agi[1] += 75 : player.stat.agi[1] += 60;
                } else if (j == 3) {
                    (player.class.name == 'Hipermago') ? player.stat.cha[0] += 75 : player.stat.cha[0] += 60;
                    (player.class.name == 'Hipermago') ? player.stat.cha[1] += 75 : player.stat.cha[1] += 60;
                }
            break;
            case 17: 
                (player.class.name == 'Uginak') ? player.stat.wepDmg[1] += 9 : player.stat.wepDmg[1] += 5;
                (player.class.name == 'Uginak') ? player.stat.wepDmg[0] += 9 : player.stat.wepDmg[0] += 5;
            break;
            case 18: 
                document.getElementById('app').removeChild(this.scene);
                playSound('reroll', 'ui')
                return new Reward(this.zone);
            break;
            case 19: 
                if (player.class.name == 'Aniripsa') {
                    player.stat.vit[0] += 25;
                    player.stat.vit[1] += 25;
                    player.stat.cur[0] += 25;
                    player.stat.cur[1] += 25;
                    player.stat.wis[0] += 25;
                    player.stat.wis[1] += 25;
                    player.stat.pp[0] += 25;
                    player.stat.pp[1] += 25;
                } else {
                    player.stat.vit[0] += 15;
                    player.stat.vit[1] += 15;
                    player.stat.cur[0] += 15;
                    player.stat.cur[1] += 15;
                    player.stat.wis[0] += 15;
                    player.stat.wis[1] += 15;
                    player.stat.pp[0] += 15;
                    player.stat.pp[1] += 15;
                } 
            break;
            case 20: 
                if (player.class.name == 'Osamodas') {
                    player.stat.str[0] += 55;
                    player.stat.str[1] += 55;
                    player.stat.int[0] += 55;
                    player.stat.int[1] += 55;
                    player.stat.agi[0] += 55;
                    player.stat.agi[1] += 55;
                    player.stat.cha[0] += 55;
                    player.stat.cha[1] += 55;
                } else {
                    player.stat.str[0] += 30;
                    player.stat.str[1] += 30;
                    player.stat.int[0] += 30;
                    player.stat.int[1] += 30;
                    player.stat.agi[0] += 30;
                    player.stat.agi[1] += 30;
                    player.stat.cha[0] += 30;
                    player.stat.cha[1] += 30;
                }
            break;
            case 21: 
                (player.class.name == 'Zobal') ? player.stat.arm[1] += 140 : player.stat.arm[1] += 80;
                (player.class.name == 'Zobal') ? player.stat.arm[0] += 140 : player.stat.arm[0] += 80;  
            break;
            case 22: 
                (player.class.name == 'Tymador') ? player.stat.speDmg[1] += 6 : player.stat.speDmg[1] += 3;
                (player.class.name == 'Tymador') ? player.stat.speDmg[0] += 6 : player.stat.speDmg[0] += 3;
            break;
            case 23: 
                (player.class.name == 'Steamer') ? player.stat.crtDmg[1] += 18 : player.stat.crtDmg[1] += 12;
                (player.class.name == 'Steamer') ? player.stat.crtDmg[0] += 18 : player.stat.crtDmg[0] += 12;
            break;
            case 24: 
                (player.class.name == 'Sadida') ? player.stat.pm[1] += 2 : player.stat.pm[1] += 1;
                (player.class.name == 'Sadida') ? player.stat.pm[0] += 2 : player.stat.pm[0] += 1;
            break;
            case 25: 
                (player.class.name == 'Xelor') ? player.stat.pa[1] += 2 : player.stat.pa[1] += 1;
                (player.class.name == 'Xelor') ? player.stat.pa[0] += 2 : player.stat.pa[0] += 1;
            break;
        }
        player.update();
        document.getElementById('app').removeChild(this.scene);
        location.nextZone();
    }
}

export class RewardSpell {
    constructor(char, next = true) {
        this.scene;
        this.option = [];
        this.optionImage = [];
        this.reward = [];
        this.char = char;
        this.next = next;
        this.create();
    }

    create() {
        this.scene = document.createElement('div');
        this.scene.className = 'scene black-scene';

        let container = document.createElement('div');
        container.className = 'reward-spell-container';
        this.scene.appendChild(container);

        let optionContainer = document.createElement('div');
        optionContainer.className = 'reward-spell-option-container';
        container.appendChild(optionContainer);

        for (let i = 0; i < 3; i++) {
            this.option[i] = document.createElement('div');
            this.option[i].className = 'panel-spell';
            optionContainer.appendChild(this.option[i]);

            this.optionImage[i] = document.createElement('div');
            this.optionImage[i].className = 'panel-spell-image';
            this.option[i].appendChild(this.optionImage[i]);
        }

        this.getUniqueSpells();

        this.reward.forEach((reward, indx) => {
            this.optionImage[indx].style.backgroundImage = `url("${reward.image}")`;
            this.option[indx].addEventListener('click', () => this.acceptReward(reward));
            this.option[indx].addEventListener('mouseover', () => {new BubbleSpell(container, reward) })
        })

        document.getElementById('app').appendChild(this.scene);
    }

    getUniqueSpells() {
        while (this.reward.length < 3) {
            let spell = this.getRandomSpell(this.char);
            if (!this.reward.includes(spell)) this.reward.push(spell);
        }
    }

    getRandomSpell(char) {
        if (char == null) {
            //PROVISIONAL HASTA QUE ESTEN TODOS LOS HECHIZOS CREADOS
            //LUEGO DESCOMENTAR LA LINEA DE AABJO
            let characters = ['Yopuka', 'Ocra', 'Sacrogrito', 'Sram', 'Anutrof', 'Zurcarak', 'Sadida', 'Tymador', 'Zobal', 'Aniripsa']
            //let characters = Object.keys(spellPool.pool);
            char = characters[Math.floor(Math.random() * characters.length)]
            let elements = Object.keys(spellPool.pool[char]);
            let randomElement = elements[Math.floor(Math.random() * elements.length)];
            let spells = spellPool.pool[char][randomElement];
            let randomSpell = spells[Math.floor(Math.random() * spells.length)];
            return randomSpell;
        } else {
            let elementsDisponible = [];
            let elements = Object.keys(spellPool.pool[char.name]);
            elements.forEach(el=> {
                if (spellPool.pool[char.name][el].length > 0) elementsDisponible.push(el);
            })
            let randomElement = elementsDisponible[Math.floor(Math.random() * elementsDisponible.length)];
            let spells = spellPool.pool[char.name][randomElement];
            let randomSpell = spells[Math.floor(Math.random() * spells.length)];
            return randomSpell;
        }  
    }

    acceptReward(newSpell) {
        playSound('start', 'ui');
        player.obtainSpell(newSpell);
        player.update();
        document.getElementById('app').removeChild(this.scene);
        if (this.next) location.nextZone();
    }
}

export class RewardItem {
    constructor(zone, next = true) {
        this.scene;
        this.zone = zone;
        this.next = next;
        this.option = [];
        this.reward = [];
        this.create();
    }

    create() {
        this.scene = document.createElement('div');
        this.scene.className = 'scene black-scene';

        let container = document.createElement('div');
        container.className = 'reward-item-container';
        this.scene.appendChild(container);

        let optionContainer = document.createElement('div');
        optionContainer.className = 'reward-item-option-container';
        container.appendChild(optionContainer);

        for (let i = 0; i < 5; i++) {
            this.option[i] = document.createElement('div');
            this.option[i].className = 'slot';
            this.option[i].style.backgroundColor = 'var(--yellow)';
            optionContainer.appendChild(this.option[i]);
        }

        this.getRandomItem();
        this.reward.forEach((reward, indx) => {
            this.option[indx].style.backgroundImage = `url("${reward.img}")`;
            this.option[indx].addEventListener('click', () => this.acceptReward(reward));
            this.option[indx].addEventListener('mouseover', () => {new BubbleItem(optionContainer, reward, 'reward') })
        })

        document.getElementById('app').appendChild(this.scene);
    }

    getRandomItem() {
        for (let i = 0; i < 5; i++) {
            let min = this.zone.itemPool[0];
            let max = this.zone.itemPool[1];
            let n = Math.floor(Math.random() * (max - min + 1)) + min;
            this.reward[i] = new Item(itemData[n]);
            this.reward[i].getExo()
        }    
    }

    acceptReward(newExo) {
        playSound('start', 'ui');
        inventory.obtainItem(newExo);
        document.getElementById('app').removeChild(this.scene);
        if (this.next) location.nextZone();
    }
}
