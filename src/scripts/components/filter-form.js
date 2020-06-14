class FilterForm extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    set clickHandler(e) {
        this._click = e
        this.render()
    }

    get name() {
        return this.querySelector('#input-name').value
    }

    render() {
        this.innerHTML = `
        <div class="form">
            <img class="pokeball"
                src="https://vignette.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/340?cb=20140520015336"
                alt="">
            <div class="input-container">
                <input placeholder="Mewtwo" id="input-name" class="input-txt" type="text">
            </div>
            <div class="btn-container">
                <button id="search-btn" class="btn-find">Find</button>
            </div>
        </div>
        `

        this.querySelector('#search-btn').addEventListener('click', this._click)
    }

}

customElements.define('filter-form', FilterForm)