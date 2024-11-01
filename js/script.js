//return to top button
window.onload = function(){

    let btnToTop = document.getElementById("btn-backToTop");

    window.onscroll = function() {
        userScrolling();
    }
    function userScrolling(){
        if(
            document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
        ){
            btnToTop.style.display = "block";
        } else{
            btnToTop.style.display = "none";
        }
    }

    btnToTop.addEventListener("click", backToTop);
    function backToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const myCarouselElement = document.querySelector('#myProjects')

    const projectCarousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: true,
    cycle: true
})
}
