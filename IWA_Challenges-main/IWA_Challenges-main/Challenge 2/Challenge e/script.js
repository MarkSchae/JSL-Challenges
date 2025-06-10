import { alex } from "./alex.js"; // import { role as alex } from "./alex.js"; this is for single var import, this is an object which needs dot notation unless it only has one item inside the object
import { johanes } from "./johannes.js";
import { nwabisa } from "./nwabisa.js";

console.log('Roles:', nwabisa.role, johanes.role, alex.role)

document.querySelector('#alex').innerText = alex.display;

document.querySelector('#johannes').innerText = johanes.display;

document.querySelector('#nwabisa').innerText = nwabisa.display;