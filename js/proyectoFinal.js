//funciones para Tio Sam
//proyectoFinalRavasi


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Quiero hacer una funcion que me pida ingresar un valor numerico y luego otro 'segundo' valor numerico mas (que quede enumerado por orden de entrada y guardado en una lista o base de datos) que se correlacione con el ingreso del nombre de la persona que ingresa. Esto que lo permita hacer a diferentes usuarios hasta llegar a las 1000 veces ingresados el 'segundo' valor numerico. Al completarse los 1000 ingresos del 'segundo' valor numerico me haga un BREAK  y me tire un numero aleatorio que 'represente' que va a ser el numero de orden que se ingresa como 'segundo' valor... una especie de SORTEO y que ese numero al corresponder a un nombre, arroje el numero aleatorio y el nombre al que corresponde ese numero.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//!!condicion
let nombre = prompt("          A JUGAR..!!          Ingresa tu nombre");
alert("Hola, " + nombre + "\n \n" + "click-me to enter");
///////////////////////////////////////////////
//bucle do-while
// let money=0;
// do{
// money=parseInt(prompt("ingresa un dolar"));
// }while(money!=1);
// alert("Gracias por ingresar one dollar");

//!!funcion con bucle 'Do-While', se agrupa bucle+ funcion
let dinero = 0;
do {
    dinero = parseInt(prompt("ingresa un dolar"));
} while (dinero != 1);
let intentos = parseInt(prompt("ingresa cuantas veces desear participar"))

function multiplicar(a, b) {
    valor = a * b;
}
multiplicar(dinero, intentos);
alert(nombre + " " + valor / dinero + " " + "posibilidades de competir en el sorteo..!!, " + "gracias por ingresar un total de: " + " $ " + valor + ".-");

//!!agregando un array
// let lugar = +prompt("ingresa un numero del 1 al 100");
// alert(nombre + " " + "ahora veras tu puesto para el sorteo 1Mil..." + "\n \n" + "click me to see")
// const incorporado = ['tu localizacion es']
// incorporado.push(" el numero" + " " + lugar)
// alert(incorporado);
// // //cierre 
// //!!interaccione con 'imput' de html
function close_window() {
    if (confirm("Seguro que quieres salir?")) {
        window.close();
    }
}
// //////////////////////////////////
// let nombr = prompt("ingresa un numero para ver si aciertas en el sorteo..?");
// const juega = () => {
//     if (juega == nombr) {
//         alert("felicitaciones, has ganado..!!");
//     } else {
//         return Math.round(Math.random(juega) * 100)
//     }
// }
// alert(juega());
/////////////////////////////////////////////////////

//??funciones de orden superior..
window.onload = function () {
    numeroAleatorio();
}
function numeroAleatorio() {

    let numeroAleatorio = Math.floor((Math.random() * (101 - 1)) + 1);
    // alert(numeroAleatorio);
    let contador = 1;
    let numeroUsuario = prompt("Introduzca un numero para empezar el sorteo:");
    while (numeroAleatorio != numeroUsuario) {
        if (numeroUsuario < numeroAleatorio) {
            numeroUsuario = prompt("El numero es mayor.Intentelo de nuevo:");
        } else {
            numeroUsuario = prompt("El numero es menor.  Intentelo de nuevo:");
        }
    }
    contador=intentos;
    if (contador > intentos) {
        alert("Ha superado los intentos que compro. El programa termina");
    } else {
        alert("Enhorabuena " + "el numero era el "+" "+numeroAleatorio +" "+ "y lo adivinaste en "+contador+" "+"veces");
    }
}
///////////////////////////////////////////
function count() {
    for(let i=1; i<=intentos; i++) {
      
      alert("intento N° " + i);
    }
  }


