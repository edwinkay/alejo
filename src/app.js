// agregando las variables del html
const boton = document.getElementById('boton')
const almacenaTexto = document.getElementById('agregaTexto')

// aqui se crea el evento click y la funcion a llamar
boton.addEventListener('click', agregar)

// se crea la funcion 'agregar'
function agregar()
{
    // llamamos el input almacenaTexto  .value es lo que se escribe
    console.log(almacenaTexto.value)
}

//tarea imprimir estos datos en el documento

//tarea : crea dos inputs y un boton  que sumen un valor

// NOTA: hay que utilizar un poco mas de ingles