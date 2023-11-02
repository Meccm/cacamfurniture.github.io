// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika produk di klik
document.querySelector("#produk").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side bar untuk menghilangkan nav
const produk = document.querySelector("#produk");

document.addEventListener("click", function (e) {
  if (!produk.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
