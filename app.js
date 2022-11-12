const links = document.querySelectorAll(".navMenu li");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}


//typing animation script//
var typed = new Typed('.typing', {
  strings: ["Designer", " U.S. Army Veteran", "Web Developer","Freelancer"],
  typeSpeed: 90,
  backSpeed: 60,
  loop: true
});


// Scroll to Top
const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

function showBtn(){
 const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
 if(rootEl.scrollTop / scrollTotal > 0.69){
   scrollBtn.classList.add("show-btn");
 } else {
   scrollBtn.classList.remove("show-btn");
 }
}
function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

// Dark MODE
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}