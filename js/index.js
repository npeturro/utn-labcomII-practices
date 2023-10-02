function message () {
    confirm("Hola esto es una prueba");
    if(message){
        console.log("Boton ok");
        alert("Gracias");
    } else{
        console.log("Boton cancelar");
    }
}
document.getElementById("botonClick").onclick = message;
//Esto es un DOM
//Esto lo q hace es recuperar lo que se encuentre en un li posicion 1 y le cambia el texto
document.getElementsByTagName('li')[1].innerText="Texto"