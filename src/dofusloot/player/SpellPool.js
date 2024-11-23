import {player} from '../game.js';

export class SpellPool {
    constructor(spellPoolData) {
        this.data = JSON.parse(JSON.stringify(spellPoolData));
        this.pool = this.data.pool;
        this.update();
    }

    update() {
        let spellToRemove = player.spell
        let removeIndx = []

        spellToRemove.forEach((spell) => {
            for (const character in this.pool) {
                for (const element in this.pool[character]) { 
                    for (let i = 0; i < this.pool[character][element].length; i++) {
                        if (this.pool[character][element][i].id == spell.id) {
                            removeIndx.push([character, element, i])
                        }
                    }
                }
            }
        })

        removeIndx.forEach((rmv) => { this.pool[rmv[0]][rmv[1]].splice(rmv[2], 1) })
    }

}

