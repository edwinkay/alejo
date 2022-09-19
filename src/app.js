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



const boton2 = document.getElementById('boton2')
const resta1 = document.getElementById('valor1')
const resta2 = document.getElementById('valor2')
const totalva = document.getElementById('valortotal')


boton2.addEventListener('click', restar)




function restar()
{

   const sum1 = resta1.value
   const sum2 = resta2.value

   let resultado

   resultado = parseInt(sum1) - parseInt(sum2)



   total.innerHTML = resultado
   console.log(resultado)
   
}


const boton3 = document.getElementById('boton3')
const multiplicar1 = document.getElementById('valor1')
const multiplicar2 = document.getElementById('valor2')
const totalvar = document.getElementById('valortotal')


boton3.addEventListener('click', multiplicar)




function multiplicar()
{

   const sum1 = multiplicar1.value
   const sum2 = multiplicar2.value

   let resultado

   resultado = parseInt(sum1) * parseInt(sum2)



   total.innerHTML = resultado
   console.log(resultado)
}   


const boton4 = document.getElementById('boton4')
const dividir1 = document.getElementById('valor1')
const dividir2 = document.getElementById('valor2')
const totalvart = document.getElementById('valortotal')


boton4.addEventListener('click', dividir)




function dividir()
{

   const sum1 = dividir1.value
   const sum2 = dividir2.value

   let resultado

   resultado = parseInt(sum1) / parseInt(sum2)



   total.innerHTML = resultado
   console.log(resultado)
}   
