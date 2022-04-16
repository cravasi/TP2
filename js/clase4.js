//funciones simples (sin parametros)
function nombre() {
    let ingresaNom = prompt("ingresa tu nombre");
    alert(`Hi ${ingresaNom}, Bye..!!`);
}
nombre();
////////////////////////////////////////////
//con parametros simple
function saludo(uno, dos) {
    alert(uno + " " + dos);
}
saludo("Hola", "Claudio");

//con pametros de suma
function suma(num1, num2) {
    alert(num1 + " " + num2);
}
suma(3 + 6);


// function sumar(aca, alla) {
//     let resultado=aca+alla;
//     return resultado
// }
// sumar(3, 6);

// function calculadora(numero1, numero2, operacion) {
//     switch (operacion) {
//         case "+":
//             return numero1 + numero2;
//             break;

//         case "-":
//             return numero1 - numero2;
//             break;

//         default:
//             return 0;
//             break;
//     }
// }
// alert(calculadora(10, 5, "+"));


// function sumar(param1, param2) {
//     return param1+param2;
    
// }
// let resultado=sumar(5,7);
// console.log(resultado); ....................MO SALIO..............!!

// function calcular(num1, num2, resultado) {
//     switch (resultado){
// case"+":
// return num1+num2;
// break;

// case "-":
//     return num1-num2;
//     break;

//     case"*":
//     return num1*num2;
//     break;

//     case "/":
//     return num1/num2;
//     break;

//     default:
//         return 0;
//         break;
//     }
// }
// alert(calcular(10, 5,"*"))

//funciones anonimas y flecha
//no tienen DEFINIDA la funcion y estan dentro de una variable/constante y se quita el nombre 'function' y 'return'
// const suma=(a,b)=>a+b;
// const resta=(a,b)=>a-b;
// const iva=x=>x*0.21;

// let precio=500;
// let descuento=50;

// let valor=(precio+iva)-(descuento);
// console.log(valor);
