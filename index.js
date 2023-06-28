const toggleBtn = document.querySelector('.checkbtn')
const navbar = document.querySelector('.hide')
toggleBtn.addEventListener("click",showNavbar)
let isShow = true
function showNavbar(){
    if(isShow){
        navbar.style.transform = "none"
        isShow = false
    }else{
        navbar.style.transform = 'translateX(100%)'
        isShow = true
    }
}