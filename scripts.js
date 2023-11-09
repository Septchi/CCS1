const latest = document.getElementById("latest");

latest.addEventListener("wheel", function (evt){
	latest.scrollLeft += evt.deltaY/2;
	evt.preventDefault();
});
for (var item of latest.querySelectorAll("div")){
	item.addEventListener("click", function(evt){
		if(window.getComputedStyle(evt.target.querySelector("p")).display == 'none'){
			evt.target.querySelector("p").style.display = "block";
		}
		else{
			evt.target.querySelector("p").style.display = "none";
		}
	});
}
