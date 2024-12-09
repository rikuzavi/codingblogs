let navbut = document.getElementById('navbut')
let but = document.getElementById('but')

let nvbut = document.getElementsByClassName('nvbut')
let nav = document.getElementById('nav')
let navbar = document.getElementById('navbar')
let loaderdiv = document.getElementById('loaderdiv')

let paralaxleaf = document.getElementById('paralaxleaf')
let paralaxhill = document.getElementById('paralaxhill')
let paralaxplant = document.getElementById('paralaxplant')

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

let scrolltracker = window.scrollY
window.addEventListener('scroll', ()=>{
    if(scrolltracker < window.scrollY){
        if(scrolltracker>0 && scrolltracker<300){
            paralaxleaf.style.transform = `translateX(${window.scrollY}px)`
            paralaxhill.style.transform = `translateX(-${window.scrollY}px)`
        }
    }else{
        paralaxleaf.style.transform = `translateX(${window.scrollY}px)` 
        paralaxhill.style.transform = `translateX(-${window.scrollY}px)`
    }
    scrolltracker = window.scrollY
})


window.addEventListener('load',()=>{
    loaderdiv.style.display = 'none'
})

let d = new Date()
let year = d.getFullYear()

footer.children[0].style.color = 'lightgreen'
footer.children[0].innerText = year