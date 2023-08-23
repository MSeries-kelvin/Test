// FOR SEARCH BAR
let searchClick = false;
let searchForm = document.querySelector(".user-info form");
let searchIcon = document.querySelector(".user-info form i");
let navIphone = document.querySelector(".nav ul li.iphone");
document.querySelector("body").addEventListener("click", function() {
    if (searchClick) {searchClick = false} else {
        search.classList = "";
        navIphone.style.display = "inline-block";
        setTimeout(function() {
            searchForm.classList = "";
            searchIcon.classList = "fa-solid fa-magnifying-glass";
        }, 400);
        search.placeholder = "search";
    }
})
let search = document.getElementById("search");
search.addEventListener("click", function() {
    searchClick = true;
    search.classList = "active";
    searchForm.classList = "active";
    searchIcon.classList += " active";
    if (window.innerWidth <= 1115 && window.innerWidth >= 1071) {
        navIphone.style.display = "none";
    }
    this.placeholder = "enter any phone name";
});
// END

// menu
let menu = document.getElementById("menu");
let mobileList = document.querySelector(".mobile-list");
let menuVisi = false;
menu.addEventListener("click", function() {
    if (!menuVisi) {
        mobileList.style.left = "0";
        menuVisi = true;
    } else {
        menuVisi = false;
        mobileList.style.left = "-100%";
    }
});
// END