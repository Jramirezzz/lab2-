"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propi = void 0;
var propi;
(function (propi) {
    propi["titulo"] = "titulo";
    propi["image"] = "image";
    propi["description"] = "description";
})(propi = exports.propi || (exports.propi = {}));
class news extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            titulo: null,
            description: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            case propi.image:
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/profile/profile.css">
                <section>
                <h1>News</h1>
                <img src=${this.image}>
                <p>${this.titulo}</p>
                <p>${this.description}</p>
                </section>
                `;
        }
    }
}
customElements.define("my-news", news);
exports.default = news;
