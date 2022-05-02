let SearchNews = async (url) => {
    
    try {
            let res = await fetch(url);
            let data = await res.json();
            return data.articles;
    } catch (err) {
        console.log(err);
    }
}

// let append = ( data, parent ) => {
//     data.forEach( ( {urlToImage, title, description, content }) => {
//         let box = document.createElement("div");
//         box.setAttribute("class", "box")
//         let div1 = document.createElement("div");
//         let details = document.createElement("div");
//         details.setAttribute("class", "namess")

//         let img = document.createElement("img");
//         img.src = urlToImage;
//         img.setAttribute("class", "images")
//         let name = document.createElement("h3");
//         name.innerText = title;
//         name.setAttribute("class", "title")
//         let detail = document.createElement("p");
//         detail.innerText = description;

//         details.append(title, description);
//         div1.append(img);
//         box.append(div1, details);
//         parent.append(box);
//     })
// };

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


let search = async (e) => {
    if (e.key === "Enter" )
    {
        let query = document.querySelector("#search_input").value;
        let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
        let news = await SearchNews(url);
        console.log(news);
        localStorage.setItem("news", JSON.stringify(news));
        window.location.href = "search.html";
    }
};

export {SearchNews, append, search} ;