let but_signin = document.getElementById("butin")
let but_signup = document.getElementById("butup")

let in_div = document.getElementById("signin")
let up_div = document.getElementById("signup")

let cover = document.getElementById("cover")

let goback_but = document.getElementById("goback")

let h1=document.getElementById("h1")

let span1 = document.getElementsByTagName("span")[0]
let span2 = document.getElementsByTagName("span")[1]

let pass1 = document.getElementsByClassName("password")[0]
let pass2 = document.getElementsByClassName("password")[1]

let signin_form = document.getElementById("form_in")
let signup_form = document.getElementById("form_up")

if(window.innerWidth > 1099){
    but_signin.addEventListener("click", ()=>{
        up_div.style.visibility = "hidden"
        in_div.style.visibility = "visible"
        cover.style.transform = "rotate(-30deg)"
        h1.innerText = "SIGN IN"
        h1.style.left = "70%"
        signup_form.reset()
    })
    
    
    but_signup.addEventListener("click", ()=>{
        in_div.style.visibility = "hidden"
        up_div.style.visibility = "visible"
        cover.style.transform = "rotate(30deg) translateX(-110%) translateY(400px)"
        h1.innerText = "SIGN UP"
        h1.style.left = "10%"
        signin_form.reset()
    })
    
    span1.addEventListener("click",()=>{
        if(span1.innerText=='⚇'){
            span1.innerText="⚉"
            pass1.type = "text"
            pass1.style.width = "85%"
        }else{
            span1.innerText="⚇"
            pass1.type = "password"
        }
        
    })
    
    span2.addEventListener("click",()=>{
        if(span2.innerText=='⚇'){
            span2.innerText="⚉"
            pass2.type = "text"
            pass2.style.width = "85%"
        }else{
            span2.innerText="⚇"
            pass2.type = "password"
        }
    })
}else{
    but_signin.addEventListener("click", ()=>{
        up_div.style.visibility = "hidden"
        in_div.style.visibility = "visible"
        h1.innerText = "SIGN IN"
        signup_form.reset()
    })
    
    
    but_signup.addEventListener("click", ()=>{
        in_div.style.visibility = "hidden"
        up_div.style.visibility = "visible"
        h1.innerText = "SIGN UP"
        
        signin_form.reset()
    })
    
    span1.addEventListener("click",()=>{
        if(span1.innerText=='⚇'){
            span1.innerText="⚉"
            pass1.type = "text"
        }else{
            span1.innerText="⚇"
            pass1.type = "password"
        }
        
    })
    
    span2.addEventListener("click",()=>{
        if(span2.innerText=='⚇'){
            span2.innerText="⚉"
            pass2.type = "text"
        }else{
            span2.innerText="⚇"
            pass2.type = "password"
        }
    })
}
