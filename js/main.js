let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
  }else{
    nav.classList.remove("scroll-on");
  }
}

// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Form berhasil dikirim!');
  });
});



const produkSelect = document.getElementById('produk');
const produkGambar = document.getElementById('produk-gambar');


const produkGambarMap = {
    "1": "images/feature/shawarma.jpg", 
    "2": "images/feature/ricebox.jpg", 
    "3": "images/feature/chickenstrip.jpg", 
    "4": "images/feature/satay.jpg", 
    "5": "images/feature/chickenplatter.jpg", 
    "6": "images/feature/frencfries.jpg" 
};


produkSelect.addEventListener('change', function() {
    const selectedProduct = produkSelect.value;
    if (produkGambarMap[selectedProduct]) {
        produkGambar.src = produkGambarMap[selectedProduct];
    } else {
        produkGambar.src = "images/offer/shawarma.jpg"; 
    }
});


const submitBtn = document.getElementById('submitBtn');
const emailInput = document.getElementById('emailInput');
const thankYouMessage = document.getElementById('thankYouMessage');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const emailValue = emailInput.value;


  if (emailValue) {
    thankYouMessage.style.display = 'block';
    emailInput.value = '';
  } else {
    alert("Harap masukkan email!");
  }
});
