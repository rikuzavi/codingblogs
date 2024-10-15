let username = document.getElementById('username')
let logout_but = document.getElementById("logoutbut")
let addpost_but = document.getElementById("pushpost")
let title = document.getElementById("title")
let post = document.getElementById("textarea")
let pushpostmess = document.getElementById("pushpostmess")
let content = document.getElementById("in1")
let likes = document.getElementById("in2")
let body = document.getElementsByTagName('script')[0]
let delmodal = document.getElementById('delmodal')
let postidinp = document.getElementById('postidinp')
let updatemodal = document.getElementById('updatemodal')
let updateidinp = document.getElementById('updateidinp')
let updatetextarea = document.getElementById('updatetextarea')
let updatetitle = document.getElementById('updatetitle')
let deletepostbut = document.getElementById('deletepostbut')
let deletepostmess = document.getElementById('deletepostmess')
let updatepostbut = document.getElementById('updatepost')
let updatepostmessege = document.getElementById('updatepostmess')
let updatedetailbut = document.getElementById('updatedetail')
let updatename = document.getElementById('updatename')
let updatepass = document.getElementById('updatepass')
let updatedetailmess = document.getElementById('updatedetailmess')
let confirmdelacc =document.getElementById('confirmdelacc')
let delaccmess = document.getElementById('delaccmes')

const backendlink ='http://localhost:3000/'
const route = 'frontend/user/'
const link = backendlink+route

async function authentication(){
    const res = await fetch(backendlink,
        {
            method : "GET",
            headers : {"content-type" : "application/json"},
            credentials:'include'
    });

    const response = await res.json()
    if(response.user_logged === false){
        document.write(`<body style="background-color : black;"><center><img src='../images/trollface.gif'></center></body>`)
    }
}
authentication()

logout_but.addEventListener("click", async()=>{
    let logout_obj ={
        'task' : 'logout'
    }
    const res = await fetch(link,
        {
            method : "POST",
            headers : {"content-type" : "application/json"},
            credentials:'include',
            body : JSON.stringify(logout_obj)
    });
    let response =await res.json()

    if(response.mes = 'success logout'){
        location.href = '../main/index.html'
    }
})

addpost_but.addEventListener("click", async()=>{
    let addpost_obj ={
        'task' : 'addpost',
        'title' : title.value,
        'post' : post.value
    }
    if(addpost_obj.title === '' || addpost_obj.post === ''){
        pushpostmess.innerText = "Empty Field !"
        pushpostmess.style.color = "red"
    }else{
        const res = await fetch(link,
            {
                method : "POST",
                headers : {"content-type" : "application/json"},
                credentials : 'include',
                body : JSON.stringify(addpost_obj)
        });
        let response =await res.json()
        if(response.mes === 'success post'){
            pushpostmess.innerText = "Upload Success"
            pushpostmess.style.color = "lightgreen"
        }else{
            pushpostmess.innerText = "Unable to post"
            pushpostmess.style.color = "red"
        }
    }
})

function post_holder(title,desc,id,like){
    let inner1 = document.createElement('div')
    let inner2 = document.createElement('div')
    let h1 = document.createElement("h1")
    let p_desc = document.createElement("h3")
    let post_key = document.createElement("input")
    post_key.type = 'text'
    post_key.value = `${id}`
    post_key.hidden = true
    let del_but = document.createElement('button')
    let upd_but = document.createElement('button')
    del_but.className = "delbut"
    del_but.innerText = "DELETE POST"
    upd_but.className = "updatebut"
    upd_but.innerText = "UPDATE POST"
    inner1.className = "inner"
    inner1.id = "in1"
    inner2.className = "inner"
    inner2.id = "in2"
    inner1.appendChild(h1)
    inner1.appendChild(p_desc)
    h1.innerText = `${title}`
    p_desc.innerText = `${desc}`
    inner2.appendChild(del_but)
    inner2.appendChild(post_key)
    inner2.appendChild(upd_but)
    return [inner1,inner2]
}

async function show_data(){
    const res = await fetch(link,
        {
            method : "GET",
            headers : {"content-type" : "application/json"},
            credentials:'include'
    });
    let outer = document.createElement('div')
    outer.id = "outer"
    const response = await res.json()
    username.innerText = response['username']
    if( response.useraccess == 'false'){
        outer.innerHTML=`<h1 style="color:white;">YOU ARE NOT AUTHORISED TO POST</h1>`
    }else{
        for(let i of response.userData){
            outer.appendChild(post_holder(i.title,i.post,i._id)[0])
            outer.appendChild(post_holder(i.title,i.post,i._id)[1])
        }
    }
    body.before(outer)
}

show_data().then(()=>{
    let delete_post_but = document.getElementsByClassName('delbut')
    let update_post_but = document.getElementsByClassName('updatebut')
    for(let i of delete_post_but){
        i.addEventListener("click", ()=>{
            delmodal.style.visibility = 'visible'
            postidinp.value = i.nextSibling.value
        })
    }
    for(let i of update_post_but){
        i.addEventListener("click", ()=>{
            updatemodal.style.visibility = 'visible'
            updateidinp.value = i.previousSibling.value
            let data = i.parentElement.previousSibling.childNodes
            updatetextarea.value = data[1].innerText
            updatetitle.value = data[0].innerText
        })
    }
})

deletepostbut.addEventListener("click",async()=>{
    let delpost_obj={
        'task' : 'deletepost',
        'postid' : postidinp.value
    }
    const res = await fetch(link,
        {
            method : "POST",
            headers : {"content-type" : "application/json"},
            credentials : 'include',
            body : JSON.stringify(delpost_obj)
    });
    let response =await res.json()
    if(response.mes === 'success delete'){
        deletepostmess.innerText = 'POST DELETED SUCCESSFULLY'
        deletepostmess.style.color = "lightgreen"
    }else{
        deletepostmess.innerText = 'ERROR OCCURED IN DELETION'
        deletepostmess.style.color = "red"
    }
})

updatepostbut.addEventListener('click', async()=>{
    let updpost_obj={
        'task' : 'updatepost',
        'postid' : updateidinp.value,
        'title' : updatetitle.value,
        'post' : updatetextarea.value
    }
    const res = await fetch(link,
        {
            method : "POST",
            headers : {"content-type" : "application/json"},
            credentials : 'include',
            body : JSON.stringify(updpost_obj)
    });
    let response =await res.json()
    if(response.mes === 'success update'){
        updatepostmessege.innerText = 'POST UPDATED SUCCESSFULLY'
        updatepostmessege.style.color = "lightgreen"
    }else{
        updatepostmessege.innerText = 'UPDATION COMPLETE'
        updatepostmessege.style.color = "red"
    }
})

updatedetailbut.addEventListener('click',async()=>{
    let updatedetailobj ={
        'task' : 'updatedetail',
        'name' : updatename.value,
        'pass' : updatepass.value
    }
    if(updatedetailobj.name === '' || updatedetailobj.pass === ''){
        updatedetailmess.innerText = 'EMPTY FIELD'
    }else{
        const res = await fetch(link,
            {
                method : "POST",
                headers : {"content-type" : "application/json"},
                credentials : 'include',
                body : JSON.stringify(updatedetailobj)
        });
        let response = await res.json()
        if(response.mes === 'Updated Successfully'){
            updatedetailmess.innerText = 'Updated Successfully'
        }else{
            updatedetailmess.innerText = 'Error occured'
        }
    }
})

confirmdelacc.addEventListener('click',async()=>{
    let accdeletionobj = {
        'task' : 'accdeletion'
    }
    const res = await fetch(link,
        {
            method : "POST",
            headers : {"content-type" : "application/json"},
            credentials : 'include',
            body : JSON.stringify(accdeletionobj)
    });
    let response = await res.json()
    if(response.mes === 'Request Send'){
         delaccmess.innerText = 'Account will be shortly deleted\nby The ADMIN'
    }else{
         delaccmess.innerText = 'Some error Occured '
    }
})