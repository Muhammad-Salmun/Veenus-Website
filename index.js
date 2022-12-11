// nav bar styling on scrolling down
window.onscroll = function () { scrollFunction() };

//////////////////////////////////////////////// functions ////////////////////////////////////////////////////////////////////////
function scrollFunction() {
        if (document.documentElement.scrollTop > 380) {
                document.getElementById("nav").style.boxShadow = "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)";
        } else {
                document.getElementById("nav").style.boxShadow = "none";        //on top
        }
}