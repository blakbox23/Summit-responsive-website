
const burgerButton = document.getElementById('burger');
const closeButton = document.getElementById("close")
const mobileLinks = document.querySelector(".mobile-links");
burgerButton.addEventListener("click",()=>{
    mobileLinks.style.display="flex";

    
})

closeButton.addEventListener("click", ()=>{
    mobileLinks.style.display="none";


})