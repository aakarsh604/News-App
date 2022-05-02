// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
import {search} from "./fetch.js"

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#search_input").addEventListener("keydown", search );

let stored = JSON.parse(localStorage.getItem("info"));
console.log(stored);

let parent = document.querySelector("#detailed_news");

let img = document.createElement("img");
img.src = stored.urlToImage;
img.style.width = "700px";
img.style.height = "500px";

let name = document.createElement("h3");
name.innerText = stored.title;

let content = document.createElement("p");
content.innerText = stored.content;
content.style.width = "1000px";

parent.append(img, name, content);
