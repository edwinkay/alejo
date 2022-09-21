// agregando las variables del html
const boton = document.getElementById('boton')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')
const boton4 = document.getElementById('boton4')
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



boton2.addEventListener('click', restar)


function restar()
{

   const res1 = primerValor.value
   const res2 = segundoValor.value

   let resultado

   resultado = parseInt(res1) - parseInt(res2)



   total.innerHTML = resultado
   console.log(resultado)
   
}



boton3.addEventListener('click', multiplicar)

function multiplicar()
{

   const mul1 = primerValor.value
   const mul2 = segundoValor.value

   let resultado

   resultado = parseInt(mul1) * parseInt(mul2)



   total.innerHTML = resultado
   console.log(resultado)
}   


boton4.addEventListener('click', dividir)

function dividir()
{

   const divi1 = primerValor.value
   const divi2 = segundoValor.value

   let resultado

   resultado = parseInt(divi1) / parseInt(divi2)



   total.innerHTML = resultado
   console.log(resultado)
}   
