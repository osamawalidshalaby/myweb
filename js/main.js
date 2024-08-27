let x = document.querySelectorAll(".navbar-nav a");
let b = document.querySelector(".collapse");

b.addEventListener("click", function (e) {
  if ((e.target.tagName = "A")) {
    x.forEach((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});

let a = document.querySelectorAll(".navworks a");
let c = document.querySelector(".navworks");

c.addEventListener("click", function (e) {
  if ((e.target.tagName = "A")) {
    a.forEach((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});

let btn = document.querySelector(".btn-scroll");

window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display = "block"
    }else{
        btn.style.display = "none";
    }
}

btn.onclick = function(){
    window.scrollBy({
        top:-300,
        left:0,
        behavior :"smooth"
    })
}

