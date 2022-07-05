
/*------------------ scroll-menu ------------------*/

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0)
})

/*-------------------- menu-hamburger -------------*/
$(document).ready(function(){
    $(".hamberger").on("click", function(){
        $("nav ul").toggleClass("menu");
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

/*-------------------- scroll defilement -------------*/
const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveave-visible')
            observer.unobserve(entry.target)
        }
    })
  }
  
  const observer = new IntersectionObserver(handleIntersect, options)
  document.querySelectorAll('.reveave').forEach(function (r) {
     observer.observe(r)
  })
  