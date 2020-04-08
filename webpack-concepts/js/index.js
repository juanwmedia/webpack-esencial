//console.log("Hello world!");
import test1 from "./test1";
import test2 from "./test2";

console.log(`${test1}, ${test2}`);

import blackcat from "../img/black-cat.jpg";
const img = document.createElement("img");
img.src = blackcat;

document.body.appendChild(img);
