"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = void 0;
var Attribute;
(function (Attribute) {
    Attribute["titulo"] = "titulo";
    Attribute["image"] = "image";
    Attribute["description"] = "description";
})(Attribute = exports.Attribute || (exports.Attribute = {}));
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
