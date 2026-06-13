const navbar = document.querySelector("#navbar");
const btnTheme = document.querySelector("#btnTheme");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let counterStarted = false;

window.addEventListener("scroll", function(){
    navbar.classList.toggle("scrolled", window.screenY > 80);
});

btnTheme.addEventListener("click", function(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains("dark")){
        btnTheme.textContent = '☀️';
    }
    else{
        btnTheme.textContent = '🌙';
    }
});

function showslide(index) {
    slides.forEach(function (slide){
        slide.classList.remove('active');
    });
    
    slides[index].classList.add('active');

    setTimeout(function(){
        currentSlide++;
        if(currentSlide >= slides.length){
            currentSlide = 0;
        }
        showslide(currentSlide);
    },3000)
}

showslide(currentSlide);

function startCounter() {
    
}

window.addEventListener("scroll", function(){
    const aboutSection = document.querySelector("#about");
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(sectionPosition < screenHeight -150 && counterStarted === false){
        startCounter()
        counterStarted = true;
    }
});