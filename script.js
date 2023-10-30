




let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let activelink = document.getElementsByClassName("active-link")


function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

// ----------------menu------------------

let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}


// ---------contact form------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbxAJgfjxOorQ9P4-hmSwnUZsrr0d_ivrVeyDb3jFbQ96Ybrw2z7wG4EK_EbT2iqazA8/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML="Message sent succesfully."
        setTimeout(function(){
            msg.innerHTML=""
        },2000)
        form.reset()
    } )
    .catch(error => console.error('Error!', error.message))
})
