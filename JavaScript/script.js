// toogle class untuk mengaktifkan navbar
const navNav = document.querySelector(".navigation-nav");
const test = document.querySelector("#menu");
// Ketika logo menu diklik
test.addEventListener("click", () => {
  navNav.classList.toggle("active");
});

//membuat penutup nav ketika klik diluar slide nav
document.addEventListener("click", function (e) {
  if (!test.contains(e.target) && !navNav.contains(e.targer)) {
    navNav.classList.remove("active");
  }
});
