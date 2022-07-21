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
        tablinks[i].className = tablinks[i].className.replace(" tablink_active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " tablink_active";
}

function openVerticalTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("vertical-tab-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("vertical-tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" vertical-tablink_active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " vertical-tablink_active";
}

$(document).ready(function () {
    console.log("ready!");
    $(".slider-content").hide();
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                if (number < 10) {
                    return '0' + number;
                }
                return number;
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    $(".slider-content").show();

});
