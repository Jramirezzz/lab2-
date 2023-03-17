"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import "./components/index.js";
const dbs_js_1 = __importDefault(require("./dbs.js"));
const charactersdata_js_1 = __importDefault(require("./charactersdata.js"));
const dnr_js_1 = __importDefault(require("./dnr.js"));
const featured_js_1 = __importDefault(require("./featured.js"));
const news_js_1 = __importDefault(require("./news.js"));
const index_js_1 = require("./components/character/index.js");
const index_js_2 = require("./components/featured/index.js");
const index_js_3 = require("./components/bestS/index.js");
const index_js_4 = require("./components/DNR/index.js");
const index_js_5 = require("./components/news/index.js");
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.character = [];
        this.featured = [];
        this.dbs = [];
        this.dnr = [];
        this.news = [];
        this.attachShadow({ mode: "open" });
        charactersdata_js_1.default.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-character");
            profileCard.setAttribute(index_js_1.Attribute.name, user.name);
            profileCard.setAttribute(index_js_1.Attribute.image, user.image);
            this.character.push(profileCard);
        });
        featured_js_1.default.forEach((person) => {
            const card = this.ownerDocument.createElement("my-featured");
            card.setAttribute(index_js_2.propiedad.titulo, person.title);
            card.setAttribute(index_js_2.propiedad.image, person.image);
            this.featured.push(card);
        });
        dbs_js_1.default.forEach((person) => {
            const cards = this.ownerDocument.createElement("best-seller");
            cards.setAttribute(index_js_3.attribute.titulo, person.title);
            cards.setAttribute(index_js_3.attribute.image, person.image);
            this.dbs.push(cards);
        });
        dnr_js_1.default.forEach((person) => {
            const target = this.ownerDocument.createElement("digital-new");
            target.setAttribute(index_js_4.prop.titulo, person.title);
            target.setAttribute(index_js_4.prop.image, person.image);
            this.dnr.push(target);
        });
        news_js_1.default.forEach((person) => {
            const persons = this.ownerDocument.createElement("digital-new");
            persons.setAttribute(index_js_5.propi.titulo, person.title);
            persons.setAttribute(index_js_5.propi.image, person.image);
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
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.featured.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.dbs.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.dnr.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.news.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
