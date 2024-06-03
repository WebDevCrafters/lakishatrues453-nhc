const slideShow = document.querySelector(".slides");
const img1 = document.querySelector(".slide-show-1");
const img2 = document.querySelector(".slide-show-2");
const img3 = document.querySelector(".slide-show-3");
const img4 = document.querySelector(".slide-show-4");

const arr = [img1, img2, img3, img4];
let i = 0;

setInterval(() => {
    if (slideShow.scrollLeft + slideShow.clientWidth >= slideShow.scrollWidth) {
        slideShow.scrollTo(0, 0)
    }
    else {
        slideShow.scrollBy(1018, 0)
    }
}, 2000);
