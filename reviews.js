const normal = document.getElementById("reviews");

fetch("./reviews.json").then(res=>res.json()).then(data=> {
  for(let [i, entry] of data.entry.entries()){
    let div = document.createElement("div");
    let user = document.createElement("img");
    user.src = "images/newImage/ReviewerImage.png";
    user.id = "user";
    let rating = document.createElement("img");
    rating.src = "images/Star.png";
    rating.id = "rating";
    let h3 = document.createElement("h3");
    h3.innerHTML = entry.name;
    let h5 = document.createElement("h5");
    h5.innerHTML = entry.date;
    let p = document.createElement("p");
    p.innerHTML = entry.text;
    div.classList.add("body");
    div.appendChild(user);
    div.appendChild(rating);
    div.appendChild(h3);
    div.appendChild(h5);
    div.appendChild(p);
    normal.appendChild(div);

  }
});
