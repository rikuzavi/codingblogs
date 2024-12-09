let adminbtn = document.getElementById('adminbtn') 
let adminpas = document.getElementById('adminpas')
let admindiv = document.getElementById('admindiv')

const backendlink = 'https://codingblogsbackend.vercel.app/'
const route = 'frontend/admin/'
const link = backendlink+route

function userdata(data){
    let table = document.createElement('table')
    table.style.color = 'white'
    table.border = '2'
    table.cellSpacing = '10'
    let htr = document.createElement('tr')
    let thname = document.createElement('th')
    thname.innerText = "NAME"
    let them = document.createElement('th')
    them.innerText = "EMAIL"
    let thacc = document.createElement('th')
    thacc.innerText = "ACCESS"
    htr.appendChild(thname)
    htr.appendChild(them)
    htr.appendChild(thacc)
    table.appendChild(htr)
    for(let user of data){
        let tr = document.createElement('tr')
        let tdname = document.createElement('td')
        let tdemail = document.createElement('td')
        let tdaccess = document.createElement('td')
        let grant = document.createElement('button')
        let revoke = document.createElement('button')
        let del = document.createElement('button')
        grant.innerText = 'GRANT'
        grant.className = 'grantbtn'
        revoke.innerText = 'REVOKE'
        revoke.className = 'revokebtn'
        del.className = 'delbtn'
        del.innerText = 'DELETEUSER'
        tdname.innerText = user.name
        tdemail.innerText = user.email
        tdaccess.innerText = user.access

        tr.append(tdname)
        tr.append(tdemail)
        tr.append(tdaccess)
        tr.append(grant)
        tr.append(revoke)
        tr.append(del)
        table.append(tr)
    }
    admindiv.after(table)
    let grantbtn = document.getElementsByClassName('grantbtn')
    for(let e of grantbtn){
        e.addEventListener('click', async()=>{
            let grantobj = {
                'task' : 'grantaccess',
                'email' : e.parentNode.children[1].innerText,
                'access' : e.parentNode.children[2].innerText
            }
            const res = await fetch(link,
                {
                    method : "POST",
                    headers : {"content-type" : "application/json"},
                    credentials:'include',
                    body : JSON.stringify(grantobj)
            });
            let response = await res.json()
            let h3 = document.createElement('h3')
            h3.innerText = response.success
            h3.style.color = 'lightgreen'
            admindiv.before(h3)
        })
    }
    let revokebtn = document.getElementsByClassName('revokebtn')
    for(let e of revokebtn){
        e.addEventListener('click', async()=>{
            let revokeobj = {
                'task' : 'revokeaccess',
                'email' : e.parentNode.children[1].innerText,
                'access' : e.parentNode.children[2].innerText
            }
            const res = await fetch(link,
                {
                    method : "POST",
                    headers : {"content-type" : "application/json"},
                    credentials:'include',
                    body : JSON.stringify(revokeobj)
            });
            let response = await res.json()
            let h3 = document.createElement('h3')
            h3.innerText = response.success
            h3.style.color = 'lightgreen'
            admindiv.before(h3)
        })
    }
    let delbtn = document.getElementsByClassName('delbtn')
    for(let e of delbtn){
        e.addEventListener('click', async()=>{
            let delobj = {
                'task' : 'deleteuser',
                'email' : e.parentNode.children[1].innerText,
            }
            const res = await fetch(link,
                {
                    method : "POST",
                    headers : {"content-type" : "application/json"},
                    credentials:'include',
                    body : JSON.stringify(delobj)
            });
            let response = await res.json()
            let h3 = document.createElement('h3')
            h3.innerText = response.success
            h3.style.color = 'lightgreen'
            admindiv.before(h3)
        })
    }
}

adminbtn.addEventListener('click', async(e)=>{
    e.preventDefault()
    let adminobj = {
        'task' : 'adminlogin',
        'adminpas' : adminpas.value
    } 
    const res = await fetch(link,
        {
            method : "POST",
            headers : {"content-type" : "application/json"},
            credentials:'include',
            body : JSON.stringify(adminobj)
    });
    let response = await res.json()
    if(response.status !=true){
        adminpas.style.border = '3px solid red'
    }else{
        admindiv.style.display = 'none'
        userdata(response.data)
    }
})

let d = new Date()
let year = d.getFullYear()

footer.children[0].style.color = 'lightgreen'
footer.children[0].innerText = year