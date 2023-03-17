import * as components from "./components/index.js";
// import "./components/index.js";
import dbsdata from "./dbs.js"
import Charactersdata from "./charactersdata.js"
import DNRdata from "./dnr.js"
import Featureddata from "./featured.js"
import Newsdata from "./news.js"


import character, { Attribute } from "./components/character/index.js";
import featured, { propiedad } from "./components/featured/index.js";
import dbs, { attribute } from "./components/bestS/index.js";
import dnr, {prop} from "./components/DNR/index.js"
import news, { propi } from "./components/news/index.js"


class AppContainer extends HTMLElement {

    character: character[]=[];
    featured: featured[]=[];
    dbs:dbs[]=[];
    dnr:dnr[]=[];
    news:news[]=[];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });


            Charactersdata.forEach((user) => {
                const profileCard = this.ownerDocument.createElement(
                    "my-character"
                    ) as character;
                    profileCard.setAttribute(Attribute.name, user.name);
                    profileCard.setAttribute(Attribute.image, user.image);
                    this.character.push(profileCard);
                });

            Featureddata.forEach((person) => {
                const card = this.ownerDocument.createElement(
                    "my-featured"
                    ) as featured;
                    card.setAttribute(propiedad.titulo, person.title);
                    card.setAttribute(propiedad.image, person.image);
                    this.featured.push(card);
                });

            dbsdata.forEach((person) => {
                const cards = this.ownerDocument.createElement(
                    "best-seller"
                    ) as dbs;
                    cards.setAttribute(attribute.titulo, person.title);
                    cards.setAttribute(attribute.image, person.image);
                    this.dbs.push(cards);
                 });


            DNRdata.forEach((person) => {
                const target = this.ownerDocument.createElement(
                    "digital-new"
                    ) as dnr;
                     target.setAttribute(prop.titulo, person.title);
                     target.setAttribute(prop.image, person.image);
                     this.dnr.push(target);
                 });
            Newsdata.forEach((person) => {
                const persons = this.ownerDocument.createElement(
                    "digital-new"
                    ) as news;
                     persons.setAttribute(propi.titulo, person.title);
                     persons.setAttribute(propi.image, person.image);
                    this.news.push(persons);
                });
                 
        }

        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;
                
                this.character.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
                this.featured.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
                this.dbs.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
                this.dnr.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
                this.news.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
            }
        }
    }
    
customElements.define("app-container", AppContainer);