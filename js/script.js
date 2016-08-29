var link = document.querySelector(".search-btn");

var popup = document.querySelector(".search-hotels");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("search-hotels-show");
      });