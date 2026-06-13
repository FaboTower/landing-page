const navbar = document.querySelector("#navbar");
const btnTheme = document.querySelector("#btnTheme");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

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

    setInterval(function(){
        currentSlide++;
        if(currentSlide >= slides.length){
            currentSlide = 0;
        }
        showslide(currentSlide);
    },4000)
}

showslide(currentSlide);