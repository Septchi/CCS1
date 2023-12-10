const latest = document.getElementById("latest");
const navbar = document.getElementById("container");

const colors = ["powderblue", "salmon", "palevioletred"];
fetch("./latest.json").then(res=>res.json()).then(data=> {
  for(let [i, entry] of data.entry.entries()){
    let div = document.createElement("div");
    div.style.background = colors[i%colors.length];
    let img = document.createElement("img");
    img.src = entry.img;
    let p = document.createElement("p");
    let b = document.createElement("b");
    let n = document.createTextNode(entry.p);
    b.appendChild(document.createTextNode(entry.b));
    p.appendChild(b);
    p.appendChild(document.createElement("br"));
    p.appendChild(n);
    div.appendChild(img);
    div.appendChild(p);
    latest.appendChild(div);
    div.addEventListener("click", function(evt){
      let element = evt.target.tagName == 'DIV'  ? evt.target : evt.target.parentNode;
      element.querySelector("p").style.display = window.getComputedStyle(element.querySelector("p")).display == 'none' ? "block" : "none";
    });
    
  }
});
// fetch("./latest.json").then(res=>res.json()).then(data=> {
//   for(let [i, entry] of data.entry.entries()){
//     let div = document.createElement("div");
//     div.style.background = colors[i%colors.length];
//     let img = document.createElement("img");
//     img.src = entry.img;
//     let p = document.createElement("p");
//     let n = document.createTextNode(entry.p);
//     p.appendChild(n);
//     div.appendChild(img);
//     div.appendChild(p);
//     latest.appendChild(div);
//     
//   }
// });

latest.addEventListener("wheel", function (evt){
	latest.scrollLeft += evt.deltaY/2;
	evt.preventDefault();
});

navbar.addEventListener("wheel", function (evt){
	navbar.scrollLeft += evt.deltaY/2;
	evt.preventDefault();
});

// const children = latest.childNodes;
// for (let item of children){
//   console.log("hello");
// 	item.addEventListener("click", function(evt){
//     let element = evt.target.tagName == 'DIV'  ? evt.target : evt.target.parentNode;
//     element.querySelector("p").style.display = window.getComputedStyle(element.querySelector("p")).display == 'none' ? "block" : "none";
// 	});
// }
