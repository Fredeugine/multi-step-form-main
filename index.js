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

    next.forEach((button, index) => {
        button.addEventListener("click", function clickButton() {
            if (index === 1){
                validateForm()
            }

            // Set display property of clicked button to "flex"
            container[index + 2].style.display = "flex";
            // Set display property of all other buttons to "none"
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


    icons.forEach((button,index) => {
        button.addEventListener("click", function changeContent() {
            if (index === 0){
                level.innerHTML = arcade.innerText + "(Monthly)";
                levelPrice.innerHTML = arcadePrice.innerText
            }
            if (index === 1){
                level.innerHTML = advanced.innerText + "(Monthly)";
                levelPrice.innerHTML = advancedPrice.innerText
            }
            if (index === 2){
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
    function validateForm(){

    }

})
