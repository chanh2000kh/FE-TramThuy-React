$(document).ready(function () {
  $(".list-new-product").owlCarousel({
    center: true,
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
  });
  $(".list-product-jewels").owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    dots: false,
    navText: [
      '<div class="home-btn-left-mobile home-btn-next-page-mobile"><img class="img-btn-left" src="./img/Vector-left.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
      '<div class="home-btn-right-mobile home-btn-next-page-mobile"><img class="img-btn-right" src="./img/Vector-right.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
    ],
    items: 1.4,
  });
  $(".list-product-incense").owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    dots: false,
    navText: [
      '<div class="home-btn-left-mobile home-btn-next-page-mobile" style="transform: translateY(-190.5px);"><img class="img-btn-left" src="./img/Vector-left.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
      '<div class="home-btn-right-mobile home-btn-next-page-mobile" style="transform: translateY(-210px);"><img class="img-btn-right" src="./img/Vector-right.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
    ],
    items: 1.4,
  });
});

$(document).ready(function () {
  $(".home-knowledge-for-product-mobile").owlCarousel({
    loop: true,
    margin: 5,
    dots: false,
    items: 1.4,
  });
});

$(document).ready(function () {
  $(".home-type-product2").owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    items: 1.2,
    center: false,
  });
});

$(document).ready(function () {
  $(".products1").owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    items: 1.4,
    autoplayTimeout: 1500,
  });
});

$(document).ready(function () {
  $(".list-new-product1").owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    items: 1.4,
    autoplay: true,
    autoplayTimeout: 1500,
  });

  var listHomeGallery = document.querySelectorAll(".home-gallery-item");
  var prevBtn = document.querySelector(".home-gallery-btn-left");
  var nextBtn = document.querySelector(".home-gallery-btn-right");

  var currentIndex = 1;
  function updateyContainerByIndex() {
    //remove home-gallery-item-1,2,3
    listHomeGallery.forEach((item) => {
      item.classList.remove("home-gallery-item-1");
      item.classList.remove("home-gallery-item-2");
      item.classList.remove("home-gallery-item-3");
    });
    if (currentIndex > 0 && currentIndex < listHomeGallery.length - 1) {
      //add home-gallery-item-1,2,3
      listHomeGallery[currentIndex - 1].classList.add("home-gallery-item-1");
      listHomeGallery[currentIndex].classList.add("home-gallery-item-2");
      listHomeGallery[currentIndex + 1].classList.add("home-gallery-item-3");
    }
    if (currentIndex == 0) {
      //add home-gallery-item-1,2,3
      listHomeGallery[listHomeGallery.length - 1].classList.add(
        "home-gallery-item-1"
      );
      listHomeGallery[currentIndex].classList.add("home-gallery-item-2");
      listHomeGallery[currentIndex + 1].classList.add("home-gallery-item-3");
    }
    if (currentIndex == listHomeGallery.length - 1) {
      //add home-gallery-item-1,2,3
      listHomeGallery[currentIndex - 1].classList.add("home-gallery-item-1");
      listHomeGallery[currentIndex].classList.add("home-gallery-item-2");
      listHomeGallery[0].classList.add("home-gallery-item-3");
    }
  }
  prevBtn.addEventListener("click", (e) => {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) currentIndex = listHomeGallery.length - 1;
    updateyContainerByIndex();
  });
  nextBtn.addEventListener("click", (e) => {
    currentIndex = currentIndex + 1;
    if (currentIndex > listHomeGallery.length - 1) currentIndex = 0;
    updateyContainerByIndex();
  });

  $(document).ready(function () {
    $('.list-new-product-about-us').owlCarousel({
        center: true,
        items: 2.7,
        loop: true,
        margin: 30,
        // autoplay: true,
        // autoplayTimeout: 3000,
    });
});
});
