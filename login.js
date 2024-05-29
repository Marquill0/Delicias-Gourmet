const usuario = document.getElementById("user");
const contrasenya = document.getElementById("pass");
const form = document.getElementById("formulary");


function validateForm() {
    if(!validateUser() || constrasenya.value.trim() === ""){
        alert("Usuario o contrasenya estan vacios");
        return false;
    }
    return true;
}

function validateUser() {
    //Definir los criterios para un nombre de usuario valido
    let minlength = 8;
    let regex = /^[a-zA-Z0-9]$/;

    //Obtener el valor del usuario
    let userValue = usuario.value.trim();

    //Comprobar la longitud
    if(userValue.length < minlength){
        alert("El usuario debe contener minimo 8 caracteres");
        return false;
    }

    return true;
}


form.addEventListener('submit', function(event){
    if(!validateForm()){
        event.preventDefault();
    }
})

