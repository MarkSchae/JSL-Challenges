import { alex } from "./alex.js";
import { johanes } from "./johannes.js";
import { nwabisa } from "./nwabisa.js";

console.log('Roles:', nwabisa.role, johanes.role, alex.role)

document.querySelector('#alex').innerText = alex.display;

document.querySelector('#johannes').innerText = johanes.display;

document.querySelector('#nwabisa').innerText = nwabisa.display;