let navbut = document.getElementById('navbut')
let but = document.getElementById('but')

let nvbut = document.getElementsByClassName('nvbut')
let nav = document.getElementById('nav')
let navbar = document.getElementById('navbar')

navbut.addEventListener('click',()=>{
    for(let i of nvbut){
        if(i.style.marginLeft !='10%'){
            i.style.marginLeft = '10%'
            but.style.width = '100%'
            but.style.height = '100vh'
            navbut.innerText = 'x'
        }else{
            i.style.marginLeft = '110%'
            but.style.width = '0%'
            but.style.height = '100vh'
            navbut.innerText = '='
        }
    }
    
})

if(window.innerWidth >1099){
    window.addEventListener('scroll', ()=>{
        const navPosition = nav.getBoundingClientRect().top;
        if(navPosition <= 0){
            navbar.style.width = '100%'
            navbar.style.borderRadius = '0px'
            navbar.style.padding = '0px'
            navbar.style.paddingTop = '20px'
            navbar.style.paddingBottom = '20px'
        }else{
            navbar.style.width = '80%'
            navbar.style.borderRadius = '50px'
            navbar.style.padding = '20px'
        }
        
    })
}
