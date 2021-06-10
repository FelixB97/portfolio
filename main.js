import './scss/main.scss';

import {burgerMenu} from "./js/components/burgermenu.js"
import {buttonEvents} from "./js/components/buttons.js"

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("initializing...");
  console.log("initialization complete!");
  burgerMenu();
  buttonEvents();
  
  
}

