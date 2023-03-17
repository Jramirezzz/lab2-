export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["image"] = "image";
})(Attribute || (Attribute = {}));
class character extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
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
                <img src=${this.image}/>
                <h1>${this.name}</h1>
                </section>
                `;
        }
    }
}
customElements.define("my-profile", character);
export default character;
