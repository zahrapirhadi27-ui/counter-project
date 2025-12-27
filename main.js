const resault = document.getElementById("value");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
console.log(resault);
console.log(btn1);
console.log(btn2);
console.log(btn3);

let num = 0;

btn1.addEventListener("click", () => {
  num -= 1;
  resault.textContent = num;
  if (num < 0) {
    resault.style.color = "red";
  }
});

btn2.addEventListener("click", () => {
    num = 0
    resault.textContent = num;
    if (num == 0) {
        resault.style.color = "black"
    }
    
});

btn3.addEventListener("click", () => {
    num += 1;
    resault.textContent = num
    if (num > 0) {
        resault.style.color = "green"
    }
});
