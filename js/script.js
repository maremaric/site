
// Gallery filter item

const filterContainer = document.querySelector(".gallery__filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    galleryItems = document.querySelectorAll(".gallery__item"),
    totalGalleryItem = galleryItems.length;

    for(let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click", function() {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let j = 0; j < totalGalleryItem; j++) {
                if(filterValue === galleryItems[j].getAttribute("data-category")) {
                    galleryItems[j].classList.remove("hide");
                    galleryItems[j].classList.add("show");
                } else {
                    galleryItems[j].classList.remove("show");
                    galleryItems[j].classList.add("hide");
                }
                if(filterValue === "sve") {
                    galleryItems[j].classList.remove("hide");
                    galleryItems[j].classList.add("show");
                }
            }
        })
    }


// Gallery lightbox

const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox__img"),
    lightboxClose = lightbox.querySelector(".lightbox__close"),
    lightboxText = lightbox.querySelector(".caption__text"),
    lightboxCounter = lightbox.querySelector(".caption__counter");

    let itemIndex = 0;

    for(let i = 0; i < totalGalleryItem; i++) {
        galleryItems[i].addEventListener("click", function() {
            itemIndex = i;
            changeItem();
            toggleLightbox();
        })
    }

    function nextItem() {
        if(itemIndex === totalGalleryItem - 1) {
            itemIndex = 0;
        } else {
            itemIndex++;
        }
        changeItem();
    }   

    function prevItem() {
        if(itemIndex === 0) {
            itemIndex = totalGalleryItem - 1;
        } else {
            itemIndex--;
        }
        changeItem();
    }

    function toggleLightbox() {
        lightbox.classList.toggle("open");
    }

    function changeItem() {
        imgSrc = galleryItems[itemIndex].querySelector(".gallery__img img").getAttribute("src");
        lightboxImg.src = imgSrc;
        lightboxText.innerHTML = galleryItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalGalleryItem;
    }

// Close lightbox
lightbox.addEventListener("click", function(event) {
    if(event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }
});

$(window).on("load", function() {
    $(".preloader").addClass("loaded");
});

// Smooth scroll
$(document).ready(function(){

    // nav toggle
    $(".nav__toggle").click(function() {
        $(".header .nav").slideToggle();
    });

    $(".header .nav a").click(function() {
        if($(window).width() < 768) {
            $(".header .nav").slideToggle();
        }
    });

    // fixed header
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    })


    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});

