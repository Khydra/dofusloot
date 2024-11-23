import {textStat} from '../../data/text.js';
import {playSound} from '../../data/audio.js';
import {spellPoolData} from '../player/spellData.js';
import {characterData} from '../player/characterData.js';
import {BubbleSpell} from './Bubble.js';

export class Popup {
    constructor(tittleText, messageText, buttonText, event) {
        this.tittleText = tittleText;
        this.messageText = messageText;
        this.buttonText = buttonText;
        this.event = event;
        this.scene;
        this.create();
    }

    create() {
        this.scene = document.createElement('div');
        this.scene.className = 'scene black-scene';

        let container = document.createElement('div');
        container.className = 'popup-container';
        this.scene.appendChild(container);

        let tittle = document.createElement('div');
        tittle.className = 'popup-tittle';
        tittle.innerHTML = this.tittleText;
        container.appendChild(tittle);

        let text = document.createElement('div');
        text.className = 'popup-text';
        text.innerHTML = this.messageText;
        container.appendChild(text);

        let button = document.createElement('div');
        button.className = 'popup-button';
        button.innerHTML = this.buttonText;
        container.appendChild(button);

        document.getElementById('app').appendChild(this.scene);
        
        button.addEventListener('click', () => this.close());
        button.addEventListener('mouseover', () => playSound('click2', 'ui'));     
        playSound('open', 'ui'); 

    }

    open() {
        this.createPopup();
    }

    close() {
        playSound('close', 'ui')
        if (this.event) this.event();
        else document.getElementById('app').removeChild(this.scene);
    }
}

export class PopupStash {
    constructor(stash, event) {
        this.stash = stash;
        this.event = event;
        this.scene;
        this.create();
    }

    create() {
        this.scene = document.createElement('div');
        this.scene.className = 'scene black-scene';

        let container = document.createElement('div');
        container.className = 'popup-stash-container';
        this.scene.appendChild(container);

        let name = document.createElement('div');
        name.className = 'popup-stash-name stroke';
        name.innerHTML = this.stash.name;
        container.appendChild(name);

        let image = document.createElement('div');
        image.className = 'popup-stash-image';
        image.style.backgroundImage = `url("${this.stash.image}")`;
        container.appendChild(image);

        let statContainer = document.createElement('div');
        statContainer.className = 'popup-stash-stat-container';
        container.appendChild(statContainer);

        let stat = [];

        Object.keys(this.stash.stat).forEach((key)=> {
            stat = document.createElement('div');
            stat.className = 'popup-stash-stat';
            stat.innerHTML = `${this.stash.stat[key]} ${textStat[key]}`
            statContainer.appendChild(stat);
        })

        let buttonBuy = document.createElement('div');
        buttonBuy.className = 'popup-buy-button stroke';
        buttonBuy.innerHTML =  `${this.stash.price} Ogrinas`;
        container.appendChild(buttonBuy);

        let buttonClose = document.createElement('div');
        buttonClose.className = 'popup-close-button stroke';
        buttonClose.innerHTML = 'X';
        container.appendChild(buttonClose);
        playSound('open', 'ui'); 
        document.getElementById('app').appendChild(this.scene);
        
        if (this.stash.price > JSON.parse(window.localStorage.getItem("profile")).ogrinas) buttonBuy.className = 'popup-buy-button stroke disabled';
        buttonBuy.addEventListener('mouseover', () => playSound('click2', 'ui'));  
        buttonClose.addEventListener('mouseover', () => playSound('click2', 'ui')); 
        buttonBuy.addEventListener('click', () => this.buy());
        buttonClose.addEventListener('click', () => this.close());
    }

    buy() {
        this.event(this.stash);
        playSound('pucharse', 'ui');
        document.getElementById('app').removeChild(this.scene);
    }

    close() {
        playSound('close', 'ui'); 
        document.getElementById('app').removeChild(this.scene);
    }
}

export class PopupFamiliar {
    constructor(familiar, event) {
        this.familiar = familiar;
        this.event = event;
        this.scene;
        this.create();
    }

    create() {
        this.scene = document.createElement('div');
        this.scene.className = 'scene black-scene';

        let container = document.createElement('div');
        container.className = 'popup-familiar-container';
        this.scene.appendChild(container);

        let name = document.createElement('div');
        name.className = 'popup-familiar-name stroke';
        name.innerHTML = this.familiar.name;
        container.appendChild(name);

        let image = document.createElement('div');
        image.className = 'popup-familiar-image';
        image.style.backgroundImage = `url("${this.familiar.itemImg}")`;
        container.appendChild(image);

        let description = document.createElement('div');
        description.className = 'popup-familiar-description';
        description.innerHTML = this.familiar.description;
        container.appendChild(description);

        let buttonBuy = document.createElement('div');
        buttonBuy.className = 'popup-buy-button stroke';
        buttonBuy.innerHTML =  `${this.familiar.price} Ogrinas`;
        container.appendChild(buttonBuy);

        let buttonClose = document.createElement('div');
        buttonClose.className = 'popup-close-button stroke';
        buttonClose.innerHTML = 'X';
        container.appendChild(buttonClose);
        playSound('open', 'ui'); 
        document.getElementById('app').appendChild(this.scene);
        

        if (this.familiar.price > JSON.parse(window.localStorage.getItem("profile")).ogrinas) buttonBuy.className = 'popup-buy-button stroke disabled';
        buttonBuy.addEventListener('click', () => this.buy());
        buttonClose.addEventListener('click', () => this.close());
        buttonBuy.addEventListener('mouseover', () => playSound('click2', 'ui'));  
        buttonClose.addEventListener('mouseover', () => playSound('click2', 'ui')); 
    }

    buy() {
        playSound('pucharse', 'ui');  
        this.event(this.familiar);
        document.getElementById('app').removeChild(this.scene);
    }

    close() {
        playSound('close', 'ui');  
        document.getElementById('app').removeChild(this.scene);
    }
}


export class PopupCharacter {
    constructor(character, event) {
        this.character = character;
        this.event = event;
        this.scene;
        this.create();
    }

    create() {
        this.scene = document.createElement('div');
        this.scene.className = 'scene black-scene';

        let container = document.createElement('div');
        container.className = 'popup-character-container';
        this.scene.appendChild(container);

        let name = document.createElement('div');
        name.className = 'popup-character-name stroke';
        name.innerHTML = this.character.name;
        container.appendChild(name);

        let image = document.createElement('div');
        image.className = 'popup-character-image';
        image.style.backgroundImage = `url("${this.character.image}")`;
        container.appendChild(image);

        let spellContainer = document.createElement('div');
        spellContainer.className = 'popup-character-spell-container';
        container.appendChild(spellContainer);

        let spellManagerArray = [];
        let spellManagerSpell = [];
        let spellManagerSpellImage = [];

        for (let i = 0; i < 20; i++) {
            spellManagerSpell[i] = document.createElement('div');
            spellManagerSpell[i].className = 'panel-spell';
            spellContainer.appendChild(spellManagerSpell[i]);

            spellManagerSpellImage[i] = document.createElement('div');
            spellManagerSpellImage[i].className = 'panel-spell-image';
            spellManagerSpell[i].appendChild(spellManagerSpellImage[i]);

            spellManagerSpell[i].addEventListener('mouseover', () => {
                new BubbleSpell(spellManagerSpell[i], spellManagerArray[i])
            })
        }

        let pool = spellPoolData[Object.values(characterData)[this.character.id].name];
        let c = 0;

        Object.keys(pool).forEach((key)=>{
            pool[key].forEach((spell)=> {
                spellManagerArray[c] = spell;
                spellManagerSpellImage[c].style.backgroundImage = `url(${spell.image})`;
                c++;
            })
        })

        let buttonBuy = document.createElement('div');
        buttonBuy.className = 'popup-buy-button stroke';
        buttonBuy.innerHTML =  `300 Ogrinas`;
        container.appendChild(buttonBuy);

        let buttonClose = document.createElement('div');
        buttonClose.className = 'popup-close-button stroke';
        buttonClose.innerHTML = 'X';
        container.appendChild(buttonClose);

        playSound('open', 'ui'); 
        document.getElementById('app').appendChild(this.scene);
        
        if (300 > JSON.parse(window.localStorage.getItem("profile")).ogrinas) buttonBuy.className = 'popup-buy-button stroke disabled';
        buttonBuy.addEventListener('click', () => this.buy());
        buttonClose.addEventListener('click', () => this.close());
        buttonBuy.addEventListener('mouseover', () => playSound('click2', 'ui'));  
        buttonClose.addEventListener('mouseover', () => playSound('click2', 'ui')); 

        if (this.character.name == 'Feca' ||
            this.character.name == 'Osamodas' ||
            this.character.name == 'Xelor' ||
            this.character.name == 'Pandawa' ||
            this.character.name == 'Steamer' ||
            this.character.name == 'Selotrop' ||
            this.character.name == 'Hipermago' ||
            this.character.name == 'Uginak' ||
            this.character.name == 'Forjalanza') {
            buttonBuy.innerHTML =  `No disponible`;
            buttonBuy.className = 'popup-buy-button stroke disabled';
        }
    }

    buy() {
        this.event(this.character);
        playSound('pucharse', 'ui'); 
        document.getElementById('app').removeChild(this.scene);       
    }

    close() {
        playSound('close', 'ui'); 
        document.getElementById('app').removeChild(this.scene);
    }
}
