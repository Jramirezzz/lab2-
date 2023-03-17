export var attribute;
(function (attribute) {
    attribute["price"] = "price";
    attribute["image"] = "image";
    attribute["titulo"] = "titulo";
})(attribute || (attribute = {}));
class bests extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            price: null,
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
            case attribute.price:
                this.price = newValue ? Number(newValue) : undefined;
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
                <img src="${this.image}">
                <h2>${this.titulo}</h2>
                <p>${this.price}</p>
                </section>
                `;
        }
    }
}
customElements.define("best-seller", bests);
export default bests;
