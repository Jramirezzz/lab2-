export enum Attribute {
    "titulo" = "titulo",
    "image" = "image",
    
}

class featured extends HTMLElement {
    titulo?: string;
    image?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
        
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
                <img src=${this.image} >
                <h2>${this.titulo}</h2>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-featured", featured);
export default featured;