export enum Attribute {
    "titulo" = "titulo",
    "image" = "image",
    "description" = "description",
    
}

class news extends HTMLElement {
    titulo?: string;
    image?: string;
    description?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
        
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
export default news;