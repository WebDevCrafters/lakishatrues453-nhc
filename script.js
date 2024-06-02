const navbar = document.getElementsByTagName("nav")[0];





const menu = document.querySelector(".menu")
const routes = document.querySelector(".routes")
const menuOpenSrc = "./assets/menu.svg";
const menuClosedSrc = "./assets/close.svg";
const menuIcon = document.getElementById("menuIcon");


menu.addEventListener("click", () => {
    if (routes.style.display === "none" || routes.style.display === "") {
        routes.style.display = "block";
        menuIcon.src = menuClosedSrc;

    } else {
        menuIcon.src = menuOpenSrc;
        routes.style.display = "none";
    }
})