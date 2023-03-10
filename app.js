document.addEventListener("DOMContentLoaded", (thisArg) => {
    const circles = document.querySelectorAll(".circle");
    const container = document.documentElement.children[1].children[0].children;
    const next = document.querySelectorAll(".next");
    const back = document.querySelectorAll(".go_back")
    const icons = document.querySelectorAll(".icons");
    const checkBoxes = document.querySelectorAll(".checkboxes")
    const checkboxLabels  = document.querySelectorAll(".labels")
    const floatPrice =  document.querySelectorAll(".float_month")
    const finish_up = document.querySelectorAll(".finish_up")
    const changeButton = document.querySelector("#changeButton")
    const level = document.getElementById("level");
    const levelPrice = document.getElementById("level_price")
    const arcade = icons[0].children[1].children[0]
    const advanced = icons[1].children[1].children[0]
    const pro = icons[2].children[1].children[0]
    const arcadePrice = icons[0].children[1].children[1]
    const advancedPrice = icons[1].children[1].children[1]
    const proPrice = icons[2].children[1].children[1]
    const form = document.querySelectorAll(".form")
    const toggleButton = document.querySelector(".toggle")
    const prices = document.querySelectorAll(".price")
    const bull_m1 =  document.querySelector(".bull_m1")
    const bull_m2 =  document.querySelector(".bull_m2")
    const container2_5 = document.querySelector(".container2_5")
    const addonsPrices = document.querySelectorAll(".float_month")
    const sumNumbers = document.querySelectorAll('.finish_up_price');
    let mode = "/mo"


    circles.forEach((button, index) => {
        button.addEventListener("click", function clickButton() {
            // Set display property of clicked button to "flex"
            container[index + 1].style.display = "flex";
            // Set display property of all other buttons to "none"
            circles.forEach((otherButton, otherIndex) => {
                if (otherIndex !== index) {
                    container[otherIndex + 1].style.setProperty("display", "none");
                }
            });
        });
    });

    toggleButton.addEventListener("change", () => {
        if (toggleButton.checked){
            toggleButton.style.transform = "translate(100%)"
            prices[0].innerHTML = "$90/yr"
            prices[1].innerHTML = "$120/yr"
            prices[2].innerHTML = "$150/yr"
            addonsPrices[0].innerHTML = "$10/yr"
            addonsPrices[1].innerHTML = "$20/yr"
            addonsPrices[2].innerHTML = "$20/yr"
           bull_m1.style.fontWeight= "normal"
            bull_m1.style.setProperty("opacity","60%");
            bull_m2.style.fontWeight= "bold"
            bull_m2.style.opacity = "100%";
             mode = "/yr"

        }
        else{
            toggleButton.style.transform = "translate(-100%)"
            prices[0].innerHTML = "$9/yr"
            prices[1].innerHTML = "$12/mo"
            prices[2].innerHTML = "$15/mo"
            bull_m1.style.fontWeight= "bold"
            bull_m1.style.opacity= "100%"
            bull_m2.style.fontWeight= "normal"
            bull_m2.style.opacity = "60%";
            mode = "/mo"


        }
    })

    next.forEach((button, index) => {
        button.addEventListener("click", function clickButton() {
            // Set display property of clicked button to "flex"
            container[index + 2].style.display = "flex";
            // Set display property of all other buttons to "none"
            let total = 0
            if(index === 2){
                sumNumbers.forEach(paragraph => {
                    const numbers = paragraph.innerHTML.match(/\d+/g);
                    if (numbers) {
                        for (let i = 0; i < numbers.length; i++) {
                            total += parseInt(numbers[i]);
                        }
                    }
                });
                document.getElementById("total").innerHTML = "$"+ total + mode
            }
            if(index === 3) {
                for(let i = 0; i < circles.length; i++) {
                    circles[i].disabled = true;
                }
            }

            next.forEach((otherButton, otherIndex) => {
                if (otherIndex !== index) {
                    container[1].style.setProperty("display", "none");
                    container[otherIndex + 2].style.setProperty("display", "none");
                }
            });
        });
    });
    back.forEach((button, index) => {
        button.addEventListener("click", function clickButton() {
            // Set display property of clicked button to "flex"
            container[index].style.setProperty("display", "flex")
            container[index + 1].style.setProperty("display", "none")
            // Set display property of all other buttons to "none"

        });
    });
   next[1].disabled = true
    circles[2].disabled = true
    circles[3].disabled = true

    icons.forEach((button,index) => {
        button.addEventListener("click", function changeContent() {
        if (icons){
            next[1].disabled = false
            circles[2].disabled = false
            circles[3].disabled = false
          }
            if (icons[0]) {
                level.innerHTML = arcade.innerText + "(Monthly)";
                levelPrice.innerHTML = arcadePrice.innerText
            }
            if (icons[1]){
                level.innerHTML = advanced.innerText + "(Monthly)";
                levelPrice.innerHTML = advancedPrice.innerText
            }
            if (icons[2]){
                level.innerHTML = pro.innerText + "(Monthly)";
                levelPrice.innerHTML = proPrice.innerText
            }
        });
    })

    checkBoxes.forEach((button) => {
        button.addEventListener("change", function changeContent2() {
            if (checkBoxes[0].checked) {
                finish_up[1].children[0].innerHTML = checkboxLabels[0].children[0].innerText;
                finish_up[1].children[1].innerHTML = floatPrice[0].innerText;

            } else {
                finish_up[1].children[0].innerHTML = ""
                finish_up[1].children[1].innerHTML = ""
            }
            if (checkBoxes[1].checked) {
                finish_up[2].children[0].innerHTML = checkboxLabels[1].children[0].innerText;
                finish_up[2].children[1].innerHTML = floatPrice[1].innerText;
            } else {
                finish_up[2].children[0].innerHTML = ""
                finish_up[2].children[1].innerHTML = ""
            }
            if (checkBoxes[2].checked) {
                finish_up[3].children[0].innerHTML = checkboxLabels[2].children[0].innerText;
                finish_up[3].children[1].innerHTML = floatPrice[2].innerText;
            } else {
                finish_up[3].children[0].innerHTML = ""
                finish_up[3].children[1].innerHTML = ""
            }

        })
    })
        changeButton.addEventListener("click", () => {
            container[2].style.setProperty("display", "flex");
            container[4].style.setProperty("display", "none")
        })


})
