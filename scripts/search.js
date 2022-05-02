// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
import {search} from "./fetch.js"

document.querySelector("#navbar").innerHTML = navbar() ;

let info = JSON.parse(localStorage.getItem("news"));
let parent = document.querySelector("#results");
parent.innerHTML = null;

document.querySelector("#search_input").addEventListener("keydown", search );

let append = ( data, parent ) => {
    data.forEach( ( {urlToImage, title, description, content }) => {
        let box = document.createElement("div");
        box.setAttribute("class", "box");

        let req = {
            urlToImage, title, content
        }
        box.addEventListener("click", function ( ){
            nextPage(req) ;
        });

        let div1 = document.createElement("div");
        let details = document.createElement("div");
        details.setAttribute("class", "news")

        let img = document.createElement("img");
        img.src = urlToImage;
        img.setAttribute("class", "images")
        let name = document.createElement("h3");
        name.innerText = title;
        name.setAttribute("class", "title")
        let detail = document.createElement("p");
        detail.innerText = description;

        details.append(title, description);
        div1.append(img);
        box.append(div1, details);
        parent.append(box);
    })
};

append(info, parent);

let nextPage = (req) => {
    console.log(req)
    localStorage.setItem("info", JSON.stringify(req));
    window.location.href = "news.html";
}