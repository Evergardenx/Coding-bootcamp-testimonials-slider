const john = document.querySelector(".john");
const tanya = document.querySelector(".tanya");
const prev = document.querySelectorAll(".prev__button");
const next = document.querySelectorAll(".next__button");

john.classList.add("hide");

const slideChange = function() {
  if(john.classList.contains("hide")){
    john.classList.remove("hide");
    tanya.classList.add("hide");
  }else if(tanya.classList.contains("hide")){
    tanya.classList.remove("hide");
    john.classList.add("hide");
  } else{
    john.classList.add("hide");
  }
}

prev.forEach((item) => item.addEventListener("click", slideChange));
next.forEach((item) => item.addEventListener("click", slideChange));