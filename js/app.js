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

window.addEventListener("load", () => {
    let basketBackground = document.getElementById("basketBackground"),
        basketShop = document.getElementById("basketShop"),
        addToCard = document.querySelectorAll(".addtocart"),
        btnCard = document.getElementById("btnCard"),
        articleImg = document.querySelectorAll(".objett"),
        numaro = document.querySelectorAll(".numaro");

    btnCard.addEventListener("click", basketShopOpen);
    basketBackground.addEventListener("click", basketShopClose)


    function basketShopClose() {
        basketShop.style.top = "-110%"
        basketBackground.style.display = "none";
        basketShop.style.animationName = "none";
    }

    function basketShopOpen() {
        basketBackground.style.display = "block";
        basketBackground.style.animationName = "showen1";
        basketShop.style.animationName = "showen";
        basketShop.style.animationDirection = "normal";
        basketShop.style.top = "5%";
    }

    for (let i = 0; i < addToCard.length; i++) {
        addToCard[i].addEventListener("click", () => {

            let item = document.createElement("div"),
                itemImg = document.createElement("img"),
                itemNum = document.createElement("p");

            itemNum.innerHTML += numaro[i].innerHTML;

            let checkHas = false;
            let numOfClid = basketShop.querySelectorAll("div")

            for (let a = 0; a < numOfClid.length; a++) {
                if (numOfClid[a].firstChild.getAttribute("src") == articleImg[i].getAttribute("src")) {
                    let z = Number(numOfClid[a].children[1].textContent);
                    z += Number(numaro[i].innerHTML)
                    numOfClid[a].children[1].textContent = z;
                    checkHas = true;
                    break;
                } else {
                    checkHas = false;
                }
            }

            if (!checkHas) {

                itemImg.setAttribute("src", articleImg[i].getAttribute("src"))

                item.appendChild(itemImg);
                item.appendChild(itemNum);

                basketShop.appendChild(item);
            }
        })
    }
})