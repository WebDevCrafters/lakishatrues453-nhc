const slideShow = document.querySelector(".slides");
const img1 = document.querySelector(".slide-show-1");
const { width: imgWidth } = img1.getBoundingClientRect();

setInterval(() => {
    if (slideShow.scrollLeft + slideShow.clientWidth >= slideShow.scrollWidth) {
        slideShow.scrollTo(0, 0)
    }
    else {
        slideShow.scrollBy(imgWidth, 0)
    }
}, 2000);

