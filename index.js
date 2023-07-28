const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelector(".image");
const bottom = document.querySelector(".bottom");

let sliderNumber = 1;
const length = image.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelector(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";
    });
};

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translate(-${sliderNumber * 800}px)`;
        sliderNumber = 1 + 1;
        button.style.backgroundColor = "white";
    });
});

const nextSlide = () => {
    slider.style.transform = `translate(-${sliderNumber * 800}px)`;
    sliderNumber++;
};

const prevSlide = () => {
    slider.style.transform = `translate(-${(sliderNumber - 2) * 800}px)`;
    sliderNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translate(0px)`;
    sliderNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translate(-${length - 1}*800}px)`;
    sliderNumber = length;
};

const changeColor = () => {
    resetBg();
    buttons[sliderNumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
    sliderNumber < length ? nextSlide() : getFirstSlide();
    changeColor();
});

left.addEventListener("click", () => {
    sliderNumber > 1 ? prevSlide() : getLastSlide();
    changeColor();
});
