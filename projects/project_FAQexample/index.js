const iconshow=`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16" id="icon" style="transform:rotate(0deg)">
<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>`

const faq=document.querySelectorAll(".faq")

faq.forEach(element=>{
    element.insertAdjacentHTML("beforeend",iconshow)
})

const icons=document.querySelectorAll("#icon")
faq.forEach(faqelement=>{
    icons.forEach(icon=>{
        icon.addEventListener("click",()=>{
            if(icon.style.transform=="rotate(0deg)"){
                icon.style.transform="rotate(180deg)";
                console.log("aca")
                icon.parentElement.style.height="max-content"
                icon.parentElement.style.backgroundColor="#eeeeee"
                icon.previousSibling.previousSibling.style.visibility="visible"
            }
            else if(icon.style.transform=="rotate(180deg)"){
                console.log("aca2")
                icon.style.transform="rotate(0deg)";
                icon.parentElement.style.height="80px"
                icon.parentElement.style.backgroundColor="transparent"
                icon.previousSibling.previousSibling.style.visibility="hidden"
            }
        })
    })
})
