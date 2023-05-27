let form = document.querySelector("#Formulario");
let btn = document.querySelector("#continue");

function validar(){
    let desabilitar = false;
    if(form.description.value === ""){
        desabilitar = true;
    }
    if(desabilitar == false){
        btn.disabled = true;
    }
    else{
        btn.disabled = false;
    }
}