const navbar = document.querySelector("#navbar");
const btnTheme = document.querySelector("#btnTheme");

window.addEventListener("scroll", function(){
    navbar.classList.toggle("scrolled", window.screenY > 90);
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
