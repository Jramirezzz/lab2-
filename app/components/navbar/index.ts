export enum Attribute {
    "name" = "name",
    "uid" = "uid",
    "city" = "city",
}

class navbar extends HTMLElement {
    name?: string;
    uid?: number;
    city?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            city: null,
            uid: null,
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
                case Attribute.uid:
                this.uid = newValue ? Number(newValue) : undefined;
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
                <div class"content">
            <nav class="navbar">
                <a href="#" class="navbar-brand"><img class="Rima" src="https://1000marcas.net/wp-content/uploads/2021/04/Reddit-logo.png" alt=""></a>
                <div class="navbar-search">
                <form>
                    <input type="text" placeholder="Busca en Reddit">
                    <button type="submit">Buscar</button>
                </form>
                </div>
                <div class="navbar-menu">
                <ul>
                    <li><button><a href="#">Registrarse</a></button></li>
                    <li><button><a href="#">Iniciar sesión</a></button></li>
                    <li><a href="#">Configuración</a></li>
                </ul>
                </div>
            </nav>
        </div>

                `;
            }
        }
    }
    
customElements.define("nav-bar", navbar);
export default navbar;