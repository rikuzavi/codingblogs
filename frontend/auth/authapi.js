
let regname = document.getElementById("regname") 
let regemail = document.getElementById("regemail")
let regpas = document.getElementById("regpas")
let register_but = document.getElementById("register")
let logemail =document.getElementById("logemail")
let logpas =document.getElementById("logpas")
let login_but =document.getElementById("login")
let log_mes= document.getElementById("logmes")
let reg_mes = document.getElementById("regmes")
let forget_but = document.getElementById("forgetpass")
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const backendlink = 'https://codingblogsbackend.vercel.app/'

const route = 'frontend/auth/'
const link = backendlink+route

register_but.addEventListener("click",async(e)=>{
    e.preventDefault()
    let reg_obj = {
        'auth' : 'register',
        'name' : regname.value,
        'email' : regemail.value,
        'pas' : regpas.value
    }
    if(reg_obj.name === '' || reg_obj.email === '' || reg_obj.pas === '' || /\s/.test(reg_obj.email)===true){
        reg_mes.innerText = "Empty Fields !"
        reg_mes.style.color = "red"
    }else if(!emailPattern.test(reg_obj.email)){
        reg_mes.innerText = "Email validation error !"
        reg_mes.style.color = "red"
    }else{
        const res = await fetch(link,
            {
                method : "POST",
                headers : {"content-type" : "application/json"},
                body : JSON.stringify(reg_obj)
        });
        const response = await res.json()
        reg_mes.innerText = response.mes
        if(response.mes === 'email already registered'){
            reg_mes.style.color = 'yellow'
        }else{
            reg_mes.style.color = 'lightgreen'
        }
    }
    
})

login_but.addEventListener("click",async(e)=>{
    e.preventDefault()
    let log_obj = {
        'auth' : 'login',
        'email' : logemail.value,
        'pas' : logpas.value
    }
    if(log_obj.email === '' || log_obj.pas === '' || /\s/.test(log_obj.email)===true){
        log_mes.innerText = 'Empty fields'
        log_mes.style.color = "red"
        logemail.style.outline = " 2px solid red"
        logpas.style.outline = " 2px solid red"
    }else if(!emailPattern.test(log_obj.email)){
        log_mes.innerText = "Email validation error"
        log_mes.style.color = "red"
    }else{
        const res = await fetch(link,
            {
                method : "POST",
                headers : {"content-type" : "application/json"},
                credentials: 'include',
                body : JSON.stringify(log_obj)
        });
        const response = await res.json()
        log_mes.innerText = response.mes
        if(response.mes === 'success login'){
            log_mes.style.color = 'lightgreen'
            location.href = '../main/index.html'
        }else{
            log_mes.style.color = 'red'
        }
    }  
})

forget_but.addEventListener("click",async(e)=>{
    e.preventDefault()
    let forget_obj = {
        'auth' : 'forgetpass',
        'email' : logemail.value,
    }
    if(forget_obj.email === '' || /\s/.test(forget_obj.email)===true){
        log_mes.innerText = 'Empty fields'
        log_mes.style.color = "red"
    }else if(!emailPattern.test(forget_obj.email)){
        log_mes.innerText = "Email validation error"
        log_mes.style.color = "red"
    }else{
        window.open('../changeportal/change.html','_blank')
    }  
})
