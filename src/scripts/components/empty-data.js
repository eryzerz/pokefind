class EmptyData extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    render() {
        this.setAttribute('class', 'empty-container')

        this.innerHTML = `
        <img 
            src="https://stripesstores.com/skins/stripes/includes/detective-pikachu/img/detective-pikachu.png" 
            class="empty-img">
        <p class="empty-msg">Oops.. can't match any pokemon</p>
        `
    }
}

customElements.define('empty-data', EmptyData)