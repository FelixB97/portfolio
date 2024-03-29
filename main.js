import './scss/main.scss';

import {burgerMenu} from "./js/components/burgermenu.js"
import {buttonEvents} from "./js/components/buttons.js"
import {gsapAnimations} from "./js/components/scrollanimations.js"
import {loadMailApp} from "./js/components/emailer.js"



window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("initializing...");
  console.log("initialization complete!");
  burgerMenu();
  buttonEvents();
  gsapAnimations();
  if (window.location.pathname == "/index.html" || window.location.pathname == "/contact.html" || window.location.pathname == "/kea/portfolio/index.html" || window.location.pathname == "/kea/portfolio/contact.html") {
    loadMailApp();
  }
  
  
}

