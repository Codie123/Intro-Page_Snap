const dropBtn = document.querySelectorAll('.drop-container')
const dropDown = document.querySelectorAll('.drop-content')
const menu = document.getElementById('menu')
const close =document.getElementById('menu-close')
const nav = document.querySelector('.nav')
dropBtn.forEach((x ,idx) => {
    
    x.addEventListener('click',()=>{
        if(x.classList.contains('show')){
            x.classList.remove('show')
            
        }else{
            x.classList.add('show')
            
        }
    })
});

menu.addEventListener('click',updateMenu)
close.addEventListener('click',updateMenu)


function updateAngle(value){
}
function updateMenu(){
    dropBtn.forEach(x=>{
        if(x.classList.contains('show')){
            x.classList.remove('show')
        }
    })
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')
    }
}   
