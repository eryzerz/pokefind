import noUiSlider from 'nouislider'

class AdvFilter extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    set clickHandler(e) {
        this._event = e
        this.render()
    }

    sliderHandler() {
        const hp = document.getElementById('slider-hp');
        const atk = document.getElementById('slider-atk');
        const def = document.getElementById('slider-def');
        const sp_atk = document.getElementById('slider-spatk');
        const sp_def = document.getElementById('slider-spdef');
        const spd = document.getElementById('slider-spd');

        noUiSlider.create(hp, {
            start: [0, 255],
            connect: true,
            range: {
                'min': 0,
                'max': 255
            }
        });

        noUiSlider.create(atk, {
            start: [0, 255],
            connect: true,
            range: {
                'min': 0,
                'max': 255
            }
        });
        noUiSlider.create(def, {
            start: [0, 255],
            connect: true,
            range: {
                'min': 0,
                'max': 255
            }
        });
        noUiSlider.create(sp_atk, {
            start: [0, 255],
            connect: true,
            range: {
                'min': 0,
                'max': 255
            }
        });
        noUiSlider.create(sp_def, {
            start: [0, 255],
            connect: true,
            range: {
                'min': 0,
                'max': 255
            }
        });
        noUiSlider.create(spd, {
            start: [0, 255],
            connect: true,
            range: {
                'min': 0,
                'max': 255
            }
        });


        const hpValues = [
            document.getElementById('hp-min'),
            document.getElementById('hp-max')
        ];

        hp.noUiSlider.on('update', function (values, handle) {
            hpValues[handle].innerHTML = `${values[handle].split('.')[0]}`
        });

        const atkValues = [
            document.getElementById('atk-min'),
            document.getElementById('atk-max')
        ];

        atk.noUiSlider.on('update', function (values, handle) {
            atkValues[handle].innerHTML = `${values[handle].split('.')[0]}`
        });

        const defValues = [
            document.getElementById('def-min'),
            document.getElementById('def-max')
        ];

        def.noUiSlider.on('update', function (values, handle) {
            defValues[handle].innerHTML = `${values[handle].split('.')[0]}`
        });

        const spatkValues = [
            document.getElementById('spatk-min'),
            document.getElementById('spatk-max')
        ];

        sp_atk.noUiSlider.on('update', function (values, handle) {
            spatkValues[handle].innerHTML = `${values[handle].split('.')[0]}`
        });

        const spdefValues = [
            document.getElementById('spdef-min'),
            document.getElementById('spdef-max')
        ];

        sp_def.noUiSlider.on('update', function (values, handle) {
            spdefValues[handle].innerHTML = `${values[handle].split('.')[0]}`
        });

        const spdValues = [
            document.getElementById('spd-min'),
            document.getElementById('spd-max')
        ];

        spd.noUiSlider.on('update', function (values, handle) {
            spdValues[handle].innerHTML = `${values[handle].split('.')[0]}`
        });
    }

    get stats() {
        const stats = {
            hp_min: document.getElementById('hp-min').innerHTML,
            hp_max: document.getElementById('hp-max').innerHTML,
            atk_min: document.getElementById('atk-min').innerHTML,
            atk_max: document.getElementById('atk-max').innerHTML,
            def_min: document.getElementById('def-min').innerHTML,
            def_max: document.getElementById('def-max').innerHTML,
            spatk_min: document.getElementById('spatk-min').innerHTML,
            spatk_max: document.getElementById('spatk-max').innerHTML,
            spdef_min: document.getElementById('spdef-min').innerHTML,
            spdef_max: document.getElementById('spdef-max').innerHTML,
            spd_min: document.getElementById('spd-min').innerHTML,
            spd_max: document.getElementById('spd-max').innerHTML
        }

        return stats
    }

    render() {
        this.setAttribute('class', 'adv-filter')
        this.innerHTML = `
        <div class="adv-btn-container">
            <button id="adv-btn" class="adv-btn-modal">Advanced Filter</button>
        </div>
        <div id="adv-modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p class="title">Advanced Filter</p>
                <div class="ovr-btn-container">
                    <div class="ovr-container">
                        <p class="stat--name">HP</p>
                        <div id="slider-hp"></div>
                        <div class="indicator">
                            <p id="hp-min"></p>
                            <p id="hp-max"></p>
                        </div>
                    </div>
                    <div class="ovr-container">
                        <p class="stat--name">Attack</p>
                        <div id="slider-atk"></div>
                        <div class="indicator">
                            <p id="atk-min"></p>
                            <p id="atk-max"></p>
                        </div>
                    </div>
                    <div class="ovr-container">
                        <p class="stat--name">Defense</p>
                        <div id="slider-def"></div>
                        <div class="indicator">
                            <p id="def-min"></p>
                            <p id="def-max"></p>
                        </div>
                    </div>
                    <div class="ovr-container">
                        <p class="stat--name">Sp.Attack</p>
                        <div id="slider-spatk"></div>
                        <div class="indicator">
                            <p id="spatk-min"></p>
                            <p id="spatk-max"></p>
                        </div>
                    </div>
                    <div class="ovr-container">
                        <p class="stat--name">Sp.Defense</p>
                        <div id="slider-spdef"></div>
                        <div class="indicator">
                            <p id="spdef-min"></p>
                            <p id="spdef-max"></p>
                        </div>
                    </div>
                    <div class="ovr-container">
                        <p class="stat--name">Speed</p>
                        <div id="slider-spd"></div>
                        <div class="indicator">
                            <p id="spd-min"></p>
                            <p id="spd-max"></p>
                        </div>
                    </div>
                </div>
                <div class="ovr-container">
                    <button id="search-adv-btn" class="btn-search">Find</button>
                </div>
            </div>
        </div>
        `

        const modal = document.getElementById("adv-modal");
        const btn = document.getElementById("adv-btn");
        const span = document.getElementsByClassName("close")[0];

        this.sliderHandler()


        btn.onclick = function () {
            modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        this.querySelector('#search-adv-btn').addEventListener('click', this._event)
    }
}

customElements.define('adv-filter', AdvFilter)