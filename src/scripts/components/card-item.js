import imgPlaceholder from '../../assets/placeholder.png'

class CardItem extends HTMLElement {

    set item(item) {
        this._item = item
        this.render()
    }

    flipCard() {
        const button = this.querySelector(`#btn-${this._item.id}`)
        const front = this.querySelector(`#front-${this._item.id}`)
        const back = this.querySelector(`#back-${this._item.id}`)

        button.addEventListener('click', () => {
            this.classList.toggle('flip')
            front.classList.toggle('flipped-front')
            back.classList.toggle('flipped-back')
            button.classList.toggle('flipped-btn')
        })
    }

    render() {
        this.setAttribute('class', 'card')
        this.setAttribute('id', `card-${this._item.id}`)
        this.innerHTML = `
            <div class="inner">
                <div id="front-${this._item.id}" class="front">
                    <div class="img">
                        <img style="object-fit: contain;"
                            src="${this._item.img || imgPlaceholder}" alt="">
                    </div>
                    <div class="name">
                        <p>${this._item.name.replace(/^./g, this._item.name.slice(0, 1).toLocaleUpperCase())}</p>
                    </div>
                </div>
                <div id="back-${this._item.id}" class="back">
                    <div class="title">
                        ${this._item.name.replace(/^./g, this._item.name.slice(0, 1).toLocaleUpperCase())} stats
                    </div>
                    <div class="overall">
                        <div class="left">
                            <div class="stat">
                                <p class="stat-name">Hp</p>
                                <div class="track-bar">
                                    <div class="track"></div>
                                    <p class="number">${this._item.stat.hp}</p>
                                    <div class="bar-wrapper" style="width: ${this._item.stat.hp / 2.55}%"></div>
                                </div>
                            </div>
                            <div class="stat">
                                <p class="stat-name">Attack</p>
                                <div class="track-bar">
                                    <div class="track"></div>
                                    <p class="number">${this._item.stat.atk}</p>
                                    <div class="bar-wrapper" style="width: ${this._item.stat.atk / 2.55}%"></div>
                                </div>
                            </div>
                            <div class="stat">
                                <p class="stat-name">Defense</p>
                                <div class="track-bar">
                                    <div class="track"></div>
                                    <p class="number">${this._item.stat.def}</p>
                                    <div class="bar-wrapper" style="width: ${this._item.stat.def / 2.55}%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="stat">
                                <p class="stat-name">Sp. Attack</p>
                                <div class="track-bar">
                                    <div class="track"></div>
                                    <p class="number">${this._item.stat.sp_atk}</p>
                                    <div class="bar-wrapper" style="width: ${this._item.stat.sp_atk / 2.55}%"></div>
                                </div>
                            </div>
                            <div class="stat">
                                <p class="stat-name">Sp. Defense</p>
                                <div class="track-bar">
                                    <div class="track"></div>
                                    <p class="number">${this._item.stat.sp_def}</p>
                                    <div class="bar-wrapper" style="width: ${this._item.stat.sp_def / 2.55}%"></div>
                                </div>
                            </div>
                            <div class="stat">
                                <p class="stat-name">Speed</p>
                                <div class="track-bar">
                                    <div class="track"></div>
                                    <p class="number">${this._item.stat.spd}</p>
                                    <div class="bar-wrapper" style="width: ${this._item.stat.spd / 2.55}%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a id="btn-${this._item.id}" class="flip-button">Flip Card</a>
            </div>
        `
        this.flipCard()
    }
}

customElements.define('card-item', CardItem)