import * as components from "./components/index.js";
// import "./components/index.js";
import data from "./charactersdata.js";
import dbsdata from "./dbs.js"
import Articlesdata from "./articlesdata.js"
import Charactersdata from "./charactersdata.js"
import DNRdata from "./dnr.js"
import Featureddata from "./featured.js"
import Newsdata from "./news.js"


import MyProfile, { Attribute } from "./components/character/index.js";

class AppContainer extends HTMLElement {
    profiles: MyProfile[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement(
                "my-profile"
                ) as MyProfile;
                profileCard.setAttribute(Attribute.name, user.name);
                profileCard.setAttribute(Attribute.image, user.image);
                this.profiles.push(profileCard);
            });
        }
        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;
                
                this.profiles.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
            }
        }
    }
    
customElements.define("app-container", AppContainer);