let needAccessMessage = document.getElementById("need-access");
let popupMessage = document.getElementById("access-popup")
let popupCloseButton = document.getElementById("popup-close");

needAccessMessage.addEventListener("click", function() {
    setTimeout(() => {
        popupMessage.style.display = "grid";
    }, 300);
});

popupCloseButton.addEventListener("click", function() {
    popupMessage.style.display = "none";
});