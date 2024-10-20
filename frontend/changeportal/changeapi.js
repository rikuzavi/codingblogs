
let submitemail = document.getElementById('submitemail')
let emailinp = document.getElementById('emailinp')
let displaymes = document.getElementById('displaymes')
let maindiv = document.getElementById('maindiv')
let p = document.getElementById('p')

const backendlink = 'https://codingblogsbackend.vercel.app/'
const route = 'frontend/changeportal/'
const link = backendlink+route

let codediv = document.createElement('div')
function add_code_div(email){
    let codeinp = document.createElement('input')
    codeinp.id = 'codeinp'
    codeinp.placeholder = 'Enter code'
    let newpass = document.createElement('input')
    newpass.type = 'password'
    newpass.id ='newpass'
    newpass.placeholder = 'new password'
    let btn = document.createElement('button')
    btn.id = 'codebtn'
    btn.innerText = 'change'
    codediv.appendChild(codeinp)
    codediv.appendChild(newpass)
    codediv.appendChild(btn)

    btn.addEventListener('click',async()=>{
        let codeobj = {
            'task' : 'checkcode',
            'code' : codeinp.value,
            'newpass' : newpass.value,
            'email' : email
        }
        if(codeobj.code === '' || codeobj.newpass === ''){
            displaymes.innerText = 'empty field'
        }else{
            const res = await fetch(link,
                {
                    method : "POST",
                    headers : {"content-type" : "application/json"},
                    credentials: 'include',
                    body : JSON.stringify(codeobj)
            });
            let response = await res.json()
            if(response.mes === true){
                codediv.remove()
                maindiv.remove()
                p.remove()
                displaymes.innerText = 'Password Updated Successfully'
                displaymes.style.color = 'lightgreen'
            }else if(response.mes === 'error'){
                codediv.remove()
                maindiv.remove()
                p.remove()
                displaymes.innerText = 'Some error Occured'
            }
            else{
                displaymes.innerText = 'Wrong OTP....'
                displaymes.style.color = 'red'
            }
        }
    })
}
submitemail.addEventListener('click', async()=>{
    let em = {
        'email' : emailinp.value,
        'task' : 'checkemail'
    }
    if(em == ''){
        emailinp.style.border = '2px solid red'
    }else{
        const res = await fetch(link,
            {
                method : "POST",
                headers : {"content-type" : "application/json"},
                credentials: 'include',
                body : JSON.stringify(em)
        });
        const response = await res.json()
        if(response.mes == 'notfounduser'){
            displaymes.innerText = 'Email id not Registered'
            displaymes.style.color = 'red'
        }else{ 
            displaymes.innerText = 'code send to your mail id'
            add_code_div(em.email)
            maindiv.after(codediv)
            submitemail.remove()
            start('4:5')
        }
    }
})

function start(time){
    let countdown = setInterval(()=>{
      let t = time.split(':')
      let m = parseInt(t[0])
      let s = parseInt(t[1])
      p.innerText = `${m}:${s < 10 ? `0${s}` : s}`
      s--
      if(s==0){
        s=59
        m-=1
      }
      if(m<0){
        clearInterval(countdown)
        p.innerText = 'Refresh page'
        codediv.remove()
        maindiv.remove()
      }
      time = `${m}:${s}`
    },1000)
  }
