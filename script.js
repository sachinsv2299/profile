const textArray = ["Data Analyst", "Design Enthusiast", "IT Engineer"];
let index = 0;
let charIndex = 0;
let typingSpeed = 150;
let erasingSpeed = 100;
let delayBetweenWords = 2000;

function type() {
    const textElement = document.getElementById("typing-text");
    if (charIndex < textArray[index].length) {
        textElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    const textElement = document.getElementById("typing-text");
    if (charIndex > 0) {
        textElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, typingSpeed + 300);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, delayBetweenWords);
});
