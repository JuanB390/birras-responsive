const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const contentPortada = document.querySelector(".content-portada");
const main = document.querySelector(".main");



navToggle.addEventListener("click" ,()=>{
    
    navMenu.classList.toggle("nav-menu_visible");
    todos();
    
});



function todos(){
    funcion1();
    funcion2();
    funcion3();
    funcion4();
}

function funcion1(){
   
    const navVisible = navMenu.classList.contains("nav-menu_visible");
    if(navVisible){
        main.style.display = "none";
      }else{
        main.style.display = "block";
      }

}
function funcion2(){
    console.log("funcion dos");
}
function funcion3(){
    console.log("funcion tres");
}
function funcion4(){
    console.log("funcion cuatro");
}
