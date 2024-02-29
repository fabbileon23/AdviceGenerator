const idAdvice = document.getElementById("id-Advice");
const advice = document.getElementById("advice");
const advicebtn = document.getElementById("advicebtn");

function generateAdvice() {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
        .then((response) => response.json())
        .then((response) => {
            let data = response.slip;
            let dataId = data.id;
            let dataAdvice = data.advice;

            idAdvice.innerHTML = `Advice # ${dataId}`;
            advice.innerHTML = `"${dataAdvice}"`;
        });
}

advicebtn.addEventListener("click", () => {
    generateAdvice();
});

document.body.onload = generateAdvice