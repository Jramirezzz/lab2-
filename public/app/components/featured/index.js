"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = void 0;
var Attribute;
(function (Attribute) {
    Attribute["titulo"] = "titulo";
    Attribute["image"] = "image";
})(Attribute = exports.Attribute || (exports.Attribute = {}));
class featured extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            titulo: null,
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
            case Attribute.image:
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
                <img src=${this.image} >
                <h2>${this.titulo}</h2>
                </section>
                `;
        }
    }
}
customElements.define("my-featured", featured);
exports.default = featured;
