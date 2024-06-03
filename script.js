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



if (window.innerWidth >= 800) {
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var homeBanner = document.getElementById('homeBanner');
        var overlay = document.querySelector('.overlay');
        var opacity = Math.min(scrollPosition * 0.001, 1);
        overlay.style.backgroundColor = `rgb(51, 211, 199, ${opacity})`;
        homeBanner.style.backgroundSize = 'calc(100% + ' + scrollPosition * 1.5 + 'px)';
    });

    let index = 0;
    const slides = document.querySelector('.slides');
    const slideWidth = slides.clientWidth;
    const totalSlides = slides.childElementCount;
}
