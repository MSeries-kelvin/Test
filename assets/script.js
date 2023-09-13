// FOR SEARCH BAR
let searchClick = false;
let searchLabel = document.getElementById("exclude-from-body");
let searchForm = document.querySelector(".user-info form");
let searchIcon = document.querySelector(".user-info form i");
let navIphone = document.querySelector(".nav ul li.iphone");
document.querySelector("body").addEventListener("click", function() {
    if (searchClick) {searchClick = false;} else {
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
    search.classList = "active";
    searchForm.classList = "active";
    searchIcon.classList += " active";
    if (window.innerWidth <= 1115 && window.innerWidth >= 1071) {
        navIphone.style.display = "none";
    }
    this.placeholder = "enter any phone name";
});
searchLabel.addEventListener("click", () => {
    searchClick = true;
})
// END

// menu
let menu = document.getElementById("menu");
let mobileList = document.querySelector(".mobile-list");
let cancel = document.querySelector(".mobile-list-header .fa-xmark");
menu.addEventListener("click", function() {
    mobileList.style.left = "0";
});
cancel.addEventListener("click", function() {
    mobileList.style.left = "-100%";
});
// END