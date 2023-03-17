"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import "./components/index.js";
const data_js_1 = __importDefault(require("./data.js"));
const index_js_1 = require("./components/profile/index.js");
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        data_js_1.default.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(index_js_1.Attribute.name, user.name);
            // profileCard.setAttribute(Attribute.uid, String(user.id));
            // profileCard.setAttribute(Attribute.city, user.address.city);
            profileCard.addEventListener("click", () => console.log(user.name));
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
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
