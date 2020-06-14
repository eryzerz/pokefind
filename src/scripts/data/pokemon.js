export const getPokemonList = async () => {
    try {
        if (!localStorage.getItem('all-pokemon')) {
            let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=964')
            let data = await res.json()
            localStorage.setItem('all-pokemon', JSON.stringify(data))
            return data
        }

        const data = JSON.parse(localStorage.getItem('all-pokemon'))
        return data
    } catch (err) {
        console.error(err)
    }
}

export const getOnePokemonData = async (url) => {
    try {
        const poke = await fetch(url)
        const pokeData = await poke.json()
        return pokeData
    } catch (err) {
        console.error(err)
    }
}