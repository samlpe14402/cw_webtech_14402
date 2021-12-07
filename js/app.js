let quantity_minus = document.querySelectorAll(".quantity");
let quantity_plus = document.querySelectorAll(".quantity-plus");
let numaro = document.querySelectorAll(".numaro");
let num;

for (let i = 0; i < quantity_minus.length; i++) {
    quantity_minus[i].addEventListener("click", ()=>{
        if(numaro[i].innerHTML <= 0) {
            numaro[i].innerHTML = 0;
        } else {
            numaro[i].innerHTML -= 1;
        }
    })
}
for (let i = 0; i < quantity_plus.length; i++) {
    quantity_plus[i].addEventListener("click", ()=>{
        num = numaro[i].innerHTML;
        num++
        numaro[i].innerHTML = num;
    })
}
