export enum Attribute {
    "name" = "name",
    "image" = "image",
    
}

class MyProfile extends HTMLElement {
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
                <h1>${this.name}</h1>
                <img src=${this.image}/>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-profile", MyProfile);
export default MyProfile;