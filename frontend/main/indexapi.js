
let mainmes = document.getElementById('mes')
let element_a = document.createElement('a')
let element_p = document.createElement('p')
element_a.appendChild(element_p)
element_a.className = "nvbut"
let buttons = document.getElementById('but')
let content = document.getElementById('content')
let searchinp = document.getElementById('searchinp')
let searchbut = document.getElementById('searchbut') 

const backendlink = 'https://codingblogsbackend.vercel.app/'
const route = 'frontend/main'
const link = backendlink+route

function datadiv(data){
    content.innerHTML=''
    for(let i=data.length-1;i>=0;i--){
        let outdiv = document.createElement('div')
        outdiv.className = 'outdiv'
        
        let inner = document.createElement('div')
        let heading = document.createElement('h1')
        let p = document.createElement('p')
        let ack = document.createElement('h1')
        inner.className = 'inner'
        heading.className = 'contentheading'
        p.className = 'contentpost'
        ack.className = 'contentack'
        heading.innerText = data[i]['title']
        p.innerText = data[i]['post']
        ack.innerText = `~ ${data[i]['name']}`
        inner.append(heading)
        inner.append(p)
        inner.append(ack)
        outdiv.appendChild(inner)
        let iframe = document.createElement('iframe')
        iframe.className = 'iframe'
        if(i['link']!=''){
            let iframelink = data[i]['link']
            iframelink= iframelink.replace('/pen/','/embed/')
            iframe.src = iframelink
            outdiv.appendChild(iframe)
        }else{
            inner.style.gridColumnStart = '1'
            inner.style.gridColumnEnd = '3'
            inner.style.borderRadius = '30px'
            inner.style.border = '5px solid lightgreen'
            if(window.innerWidth <1100){
                inner.style.marginBottom = '50px'
            }
        }
        content.appendChild(outdiv)
    }
    setupPagination()
}


async function main(){
    const res = await fetch(link,
        {
            method : "POST",
            headers : {"content-type" : "application/json"},
            credentials:'include'
    });

    const response = await res.json()
    if(response.user_logged){
        element_p.innerText = 'ACC'
        element_a.href = '../user/user.html'
        buttons.appendChild(element_a)
    }else{
        element_p.innerText = 'SIGN UP'
        element_a.href = '../auth/auth.html'
        buttons.appendChild(element_a)
    }
    datadiv(response.data)
    let totaldata = response.data
    searchbut.addEventListener('click',()=>{
        let search=searchinp.value.toLowerCase()
        let new_total_data = totaldata.filter(item => {
            return item.title.toLowerCase().includes(search);
        });
        datadiv(new_total_data)
    })
    
}
function setupPagination() {
    let outdiv = document.getElementsByClassName('outdiv');
    let nextbtn = document.getElementById('next');
    let count = 3;

    for (let i = 3; i < outdiv.length; i++) {
        outdiv[i].style.display = "none";
    }
    if (!nextbtn.hasAttribute('data-listener')) {
        nextbtn.setAttribute('data-listener', 'true');
        nextbtn.addEventListener('click', () => {
            for (let j = 0; j < 3; j++) {
                if (count < innerdiv.length) {
                    outdiv[count].style.display = "grid";
                    count++;
                } else {
                    break;
                }
            }
        });
    }
}

main()
