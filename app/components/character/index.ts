export enum Attribute {
    "name" = "name",
    "image" = "image",
    
}

class character extends HTMLElement {
    name?: string;
    image?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
        
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
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
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
                <img src=${this.image}/>
                <h1>${this.name}</h1>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-profile", character);
export default character;