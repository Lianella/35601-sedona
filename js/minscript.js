var link=document.querySelector(".search-btn"),popup=document.querySelector
(".search-
hotels");link.addEventListener("click",function(a){popup.classList.contains
("search-hotels-show")?(a.preventDefault(),popup.classList.remove("search-
hotels-show")):(a.preventDefault(),popup.classList.add("search-hotels-
show"))});
