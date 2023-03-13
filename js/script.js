$(function () {
  $("#lorem").hover(
    function () {
      $(this).attr("src", "img/lorem.jpg");
    },
    function () {
      $(this).attr("src", "img/lorem.png");
    }
  );
});

$(function () {
  $("#cv").hover(
    function () {
      $(this).attr("src", "img/curriculum.jpg");
    },
    function () {
      $(this).attr("src", "img/curriculum.png");
    }
  );
});

$(function () {
  $("#lorem2").hover(
    function () {
      $(this).attr("src", "img/lorem.jpg");
    },
    function () {
      $(this).attr("src", "img/lorem.png");
    }
  );
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
