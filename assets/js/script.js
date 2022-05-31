var myNav;
var header;
window.onload = function()
{
    myNav = document.getElementById("mynav");
}
 
window.onscroll = function () { 
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.add("nav-colored");
        myNav.classList.add("responsivenav");
        myNav.classList.remove("nav-transparent");
        
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        myNav.classList.remove("responsivenav");
    }
};


