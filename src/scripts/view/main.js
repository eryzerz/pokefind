import { memoize } from '../utils/utils.js'
import '../components/card-list.js'
import '../components/filter-form.js'
import '../components/adv-filter.js'

const getPokemon = () => import('../data/pokemon')
let count = 0

const main = async () => {
    const filter = document.querySelector('filter-form')
    const list = document.querySelector('card-list')
    const advFilter = document.querySelector('adv-filter')

    const getList = async () => {
        const { getPokemonList } = await getPokemon()
        return getPokemonList()
    }


    const onClick = async () => {
        const modal = document.getElementById("adv-modal")

        try {
            modal.style.display = "none"
            const res = await getList()
            render(res)
        } catch (err) {
            console.error(err)
            const empty = document.createElement('empty-data')
            empty.children[1].innerHTML = 'Oops.. something went wrong'
            list.appendChild(empty)
        }
    }

    const matchName = (arr) => arr[0].match(arr[1])


    const render = async (res) => {
        const input = document.getElementById('input-name')
        const cached = memoize(matchName)

        const pokemon = res.results.filter(result => cached([result.name.toLowerCase(), filter.name.toLowerCase()]))

        input.value = ""
        list.list = pokemon
    }

    if (count === 0) {
        count++

        const res = await getList()
        render(res)
    }

    filter.clickHandler = onClick
    advFilter.clickHandler = onClick
}


export default main
