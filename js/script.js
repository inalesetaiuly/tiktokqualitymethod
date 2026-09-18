const questions = document.querySelectorAll(".faq-question");


questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const symbol = question.querySelector("span");


        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

            symbol.textContent = "+";

        } else {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            symbol.textContent = "−";

        }

    });

});
const sliderRange = document.getElementById("sliderRange");
const afterImageWrapper = document.getElementById("afterImageWrapper");
const sliderLine = document.getElementById("sliderLine");
const sliderHandle = document.getElementById("sliderHandle");

if (sliderRange && afterImageWrapper && sliderLine && sliderHandle) {

    sliderRange.addEventListener("input", () => {

        const value = sliderRange.value;

        afterImageWrapper.style.clipPath =
            `inset(0 0 0 ${value}%)`;

        sliderLine.style.left = value + "%";

        sliderHandle.style.left = value + "%";

    });

}