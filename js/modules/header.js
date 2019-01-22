export default function stickyNav() {
    window.onscroll = function() {myFun()};
    
    const nav = document.querySelector(".about-header");
    const logo = document.querySelector(".about-logo__text");

    const sticky = nav.offsetTop;

    function myFun() {
      if (window.pageYOffset > sticky) {
        nav.classList.add("about-header--sticky");
        logo.classList.add("about-logo__text--sticky");
      } else {
        nav.classList.remove("about-header--sticky");
        logo.classList.remove("about-logo__text--sticky");
      }
    }

}