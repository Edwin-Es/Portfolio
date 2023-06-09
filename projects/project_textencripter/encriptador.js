const texto=document.getElementById("mensaje");
const encriptar=document.getElementById("encriptar");
const desencriptar=document.getElementById("desencriptar");
const copiar=document.getElementById("copiar");
const resultado=document.getElementById("resultado");
const inicio=document.getElementById("inicio");
const final=document.getElementById("show");

encriptar.addEventListener("click",encriptacion)
desencriptar.addEventListener("click",desencriptacion)
copiar.addEventListener("click",()=>{
    navigator.clipboard.writeText(resultado.textContent)
    document.getElementById("copiado").style.display="inline-block";
})

function encriptacion(){
    let enc=texto.value;
    let todo;
    let newt=enc.split("");
    for(let i=0;i<newt.length;i++){
        if(newt[i]=="a")newt[i]="ai";
        else if(newt[i]=="e")newt[i]="enter";
        else if(newt[i]=="i")newt[i]="imes";
        else if(newt[i]=="o")newt[i]="ober";
        else if(newt[i]=="u")newt[i]="ufat";
        
    }
    resultado.textContent=todo=newt.join('');
    final.style.display="flex";
    inicio.style.display="none";
    document.getElementById("copiado").style.display="none";

}

function desencriptacion(){
    let enc=texto.value;
    let todo=enc.replaceAll("enter","e")
    todo=todo.replaceAll("imes","i")
    todo=todo.replaceAll("ai","a")
    todo=todo.replaceAll("ober","o")
    todo=todo.replaceAll("ufat","u");
    resultado.textContent=todo;
    final.style.display="flex";
    inicio.style.display="none";
    document.getElementById("copiado").style.display="none";
}