// agregando las variables del html
const boton = document.getElementById('boton')
const primerValor = document.getElementById('valor1')
const segundoValor = document.getElementById('valor2')
const total = document.getElementById('valortotal')

// aqui se crea el evento click y la funcion a llamar
boton.addEventListener('click', agregar)

// se crea la funcion 'agregar'
function agregar()
{
//    llamado de primero y segundo valor
   const sum1 = primerValor.value
   const sum2 = segundoValor.value
//    creando variable para resultado
   let resultado
//    el resultado es igual a suma 1 + suma 2,  parseInt significa convertir a numero ya que estaba en string
   resultado = parseInt(sum1) + parseInt(sum2)

//    aqui se imprime en el div total que creamos

   total.innerHTML = resultado
   console.log(resultado)
   
}
// la NUEVA tarea con lo aprendido crear un boton para resta multiplicacion y division

// los try catch es para pruebas de errores de backend


// function calcular() {
//     try {
//       const valor1 = parseFloat(document.getElementById('valor1').value) || 0
//       const valor2 = parseFloat(document.getElementById('valor2').value) || 0

//       document.getElementById("valortotal").value = valor1 * valor2;
    
//     } catch (e) {}
// }