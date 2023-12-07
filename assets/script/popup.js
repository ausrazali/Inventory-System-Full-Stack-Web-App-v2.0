let needAccess320pxClicker = document.getElementById("need-access-320px-clicker");
let needAccessMessage320px = document.getElementById("need-access-message-320px");
let topGrid = document.getElementById("top-grid");
let middleGrid = document.getElementById("middle-grid");
let bottomGrid = document.getElementById("bottom-grid");

needAccess320pxClicker.addEventListener("click", function() {
    topGrid.style.display = "none";
    middleGrid.style.display = "none";
    bottomGrid.style.display = "none";
    needAccessMessage320px.style.display = "grid";
});

let needAccessMessage320pxButtonClose = document.getElementById("need-access-message-320px-button-close")

needAccessMessage320pxButtonClose.addEventListener("click", function() {
    topGrid.style.display = "grid";
    middleGrid.style.display = "grid";
    bottomGrid.style.display = "grid";
    needAccessMessage320px.style.display = "none";
});
