var link = document.querySelector(".search-btn");

var popup = document.querySelector(".search-hotels");


link.addEventListener("click", function(event) {
	if (popup.classList.contains("search-hotels-show")) {
	event.preventDefault(); 
	popup.classList.remove("search-hotels-show");
} 
    else {
	event.preventDefault();
	popup.classList.add("search-hotels-show");
}
});