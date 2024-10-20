let add_post = document.getElementById("addpost")
let modal = document.getElementById("modal")
let close_modal = document.getElementById("closemodal")
let textarea = document.getElementById("textarea")
let title_area = document.getElementById("title")
let postmes = document.getElementById("pushpostmess")
let updatepostmess = document.getElementById("updatepostmess")

let closedelmodal = document.getElementById("closedelmodal")
let delmodaldiv = document.getElementById("delmodal")

let closeupdatemodal = document.getElementById("closeupdatemodal")
let updatemodaldiv = document.getElementById("updatemodal")

let navclick = document.getElementById('navclick')

let mainbut = document.getElementsByClassName('mainbut')

let details =  document.getElementById('details')

let updateaccbtn = document.getElementById('updateaccbtn')
let updateaccdiv = document.getElementById('updateaccdiv')
let updateaccclose = document.getElementById('updateaccclose')
let updateaccmess = document.getElementById('updatedetailmess')

let delaccbtn = document.getElementById('delaccbtn')
let delaccdiv = document.getElementById('delacc')
let delaccclosebtn = document.getElementById('delclosebtn')

let loader = document.getElementById('loaderdiv')

add_post.addEventListener("click", ()=>{
    modal.style.visibility = "visible"
    modal.style.backdropFilter = "blur(10px)"
    modal.style.zIndex = "2"
})

close_modal.addEventListener("click", ()=>{
    modal.style.visibility = "hidden"
    modal.style.zIndex = "2"
    postmes.innerText =""
    textarea.value = ""
    title_area.value = ""
})

closedelmodal.addEventListener("click", ()=>{
    delmodaldiv.style.visibility = "hidden"
})

closeupdatemodal.addEventListener("click", ()=>{
    updatemodaldiv.style.visibility = "hidden"
    updatepostmess.innerText = ""
})

navclick.addEventListener('click',()=>{

    for(let i of mainbut){
        if(i.style.marginLeft != '10%'){
            i.style.marginLeft = '10%'
            details.style.backdropFilter = 'blur(10px)'
            details.style.height = '100vh'
            details.style.width = '100%'
            navclick.innerText = 'x'
        }else{
            i.style.marginLeft = '110%'
            details.style.backdropFilter = 'blur(0px)'
            details.style.height = '0vh'
            details.style.width = '0%'
            navclick.innerText = '='
        }
        
    }
})


updateaccbtn.addEventListener('click',()=>{
    if(updateaccdiv.style.height != '300px'){
        updateaccdiv.style.height = '300px'
        
    }else{
        updateaccdiv.style.height = '0px'
    }
})

updateaccclose.addEventListener('click',()=>{
    updateaccdiv.style.height = '0px'
    updatedetailmess.innerText=''
})

delaccbtn.addEventListener('click', ()=>{
    if(delaccdiv.style.display != 'flex'){
        delaccdiv.style.display = 'flex'
    }else{
        delaccdiv.style.display = 'none'
    }
})

delaccclosebtn.addEventListener('click',()=>{
    delaccdiv.style.display = 'none'
})

window.addEventListener('load',()=>{
    loader.style.display = 'none'
})
