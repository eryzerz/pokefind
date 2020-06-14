import './card-item.js'
import './adv-filter.js'
import './empty-data.js'
import { memoize } from '../utils/utils.js'

const getPokemon = () => import('../data/pokemon')

class CardList extends HTMLElement {

    set list(cards) {
        this._list = cards
        this.render()
    }

    get numOfChild() {
        return this.children.length
    }

    async getOnePokemon(url) {
        const { getOnePokemonData } = await getPokemon()
        const cached = await memoize(getOnePokemonData)
        return cached(url)
    }

    filter(data) {
        const adv = document.querySelector('adv-filter')
        const [hp, atk, def, sp_atk, sp_def, spd] = data.stats
        const { hp_min, hp_max, atk_min, atk_max, def_max, def_min, spatk_min, spatk_max, spdef_min, spdef_max, spd_min, spd_max } = adv.stats

        if (hp.base_stat >= hp_min && hp.base_stat <= hp_max &&
            def.base_stat >= def_min && def.base_stat <= def_max &&
            atk.base_stat >= atk_min && atk.base_stat <= atk_max &&
            sp_atk.base_stat >= spatk_min && sp_atk.base_stat <= spatk_max &&
            sp_def.base_stat >= spdef_min && sp_def.base_stat <= spdef_max &&
            spd.base_stat >= spd_min && spd.base_stat <= spd_max) {
            return true
        }
        return false
    }

    async render() {
        this.setAttribute('class', 'list')

        this.innerHTML = ""

        if (this._list.length !== 0) {
            const mapped = []

            Promise.all(this._list.map(async item => {
                const pokeData = await this.getOnePokemon(item.url)

                if (this.filter(pokeData)) {
                    const [hp, atk, def, sp_atk, sp_def, spd] = pokeData.stats

                    const content = {
                        id: pokeData.id,
                        name: item.name,
                        img: pokeData.sprites.front_shiny,
                        stat: {
                            hp: hp.base_stat,
                            atk: atk.base_stat,
                            def: def.base_stat,
                            sp_atk: sp_atk.base_stat,
                            sp_def: sp_def.base_stat,
                            spd: spd.base_stat,
                        }
                    }

                    const card = document.createElement('card-item')
                    card.item = content
                    this.appendChild(card)
                    mapped.push(item)
                }
            }))
                .then(() => {
                    if (mapped.length === 0) {
                        const empty = document.createElement('empty-data')

                        this.appendChild(empty)
                    }
                })
                .catch(() => {
                    const empty = document.createElement('empty-data')
                    empty.children[1].innerHTML = 'Oops.. something went wrong'
                    this.appendChild(empty)
                })
        } else {
            const empty = document.createElement('empty-data')

            this.appendChild(empty)
        }
    }
}

customElements.define('card-list', CardList)