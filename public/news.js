const normal = document.getElementById("normal");

// makes the entries for the news using values in the json file.
fetch("./news.json").then(res=>res.json()).then(data=> {
  for(let [i, entry] of data.entry.entries()){
    let div = document.createElement("div");
    let h1 = document.createElement("H1");
    h1.innerHTML = entry.title;
    let img = document.createElement("img");
    img.src = entry.img;
    let p = document.createElement("p");
    p.innerHTML = entry.text;
    let d = document.createElement("p");
    d.innerHTML = entry.date;
    div.appendChild(h1);
    let body = document.createElement("div");
    body.classList.add("body");
    body.appendChild(img);
    let text = document.createElement("dev");
    text.classList.add("text");
    text.appendChild(p);
    text.appendChild(d);
    body.appendChild(text);
    div.appendChild(body);
    normal.appendChild(div);
    
  }
});

// makes navbar scrollable
const navbar = document.getElementById("container");
navbar.addEventListener("wheel", function (evt){
	navbar.scrollLeft += evt.deltaY/2;
	evt.preventDefault();
});
