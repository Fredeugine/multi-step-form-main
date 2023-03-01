document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".circle");
    const container = document.documentElement.children[1].children[0].children

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (index  === 0) { // Check if button 1 is clicked
                container[index + 1].style.removeProperty("display"); // Remove display property from button 1
            } else {
                // Set display property of clicked button to "flex"
                container[index + 1].style.display = "flex";

                // Set display property of all other buttons to "none"
                buttons.forEach((otherButton, otherIndex) => {
                    if (otherIndex !== index) {
                        container[otherIndex + 1].style.setProperty("display", "none");
                    }
                });
            }
        });
    });
});
