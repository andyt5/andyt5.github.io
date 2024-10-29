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
}