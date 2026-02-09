const box1 = document.getElementById("box-1");
box1.addEventListener("click", () => {
  box1.style.color = "white ";
  box1.style.backgroundColor = "red";
});

const box2 = document.getElementById("box-2");
box2.addEventListener("click", () => {
  box2.style.color = "white ";
  box2.style.backgroundColor = "blue";
});

const box3 = document.getElementById("box-3");
box3.addEventListener("click", () => {
  box3.style.color = "white ";
  box3.style.backgroundColor = "green";
});

const box4 = document.getElementById("box-4");
box4.addEventListener("click", () => {
  box4.style.color = "balck";
  box4.style.backgroundColor = "yellow ";
});

const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let h1 = document.getElementById("head");
  let input = document.getElementById("in").value;
  if(input!=""){
    h1.innerHTML = `Hello, ${input}`;
  }
  else{
    h1.innerHTML = `Hello`;
  }
});

