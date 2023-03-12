var coll = document.getElementsByClassName("collapse__title");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab-content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " tablink_active",
      ""
    );
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " tablink_active";
}

//comment
function openVerticalTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("vertical-tab-content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("vertical-tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " vertical-tablink_active",
      ""
    );
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " vertical-tablink_active";
}
var toggleButton = document.querySelector(".toggle-menu");
var navBar = document.querySelector(".nav-bar");
toggleButton.addEventListener("click", function () {
  navBar.classList.toggle("toggle");
});

$(document).ready(function () {
  console.log("ready!");
  $(".slider-content").hide();
  let slides = 3;
  var windowSize = $(window).width();
  if (windowSize > 575 && windowSize <= 767) {
    slides = 2;
    console.log(slides);
  } else if (windowSize <= 575) {
    slides = 1;
    console.log(slides);
  }
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: slides,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        if (number < 10) {
          return "0" + number;
        }
        return number;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $(".slider-content").show();
  $("#go_top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#go_top").show().fadeIn();
    } else {
      $("#go_top").fadeOut().hide();
    }
  });
  $("#go_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 360);
    return false;
  });
  $("#go_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
