//??Pruebas 2
// let precio=+prompt("ingrese el perecio justo");
// if (precio<=20) { //!!if siempre debe ser < que..
//     alert("es una verdadera ganga, lo conseguiste por, 20");
// } else if(precio<50){
//     alert("lo consegiste a menos de, 50");
// }else if(precio<=100){
//     alert("es un precio justo");
// }else{
//     alert("el precio es demasiado alto");
// }

// let nombre = prompt("ingrese su nombre");
// let apellido = prompt("ingrese su apellido");
// if ((nombre != "") && (apellido != "")) {
//     alert("tu nombre es, " + nombre + "\ny tu apellido es, " + apellido);
// } else {
//     alert("ingresa tu nombre y apellido... boludoooooooooo");
// }

// let nombre=prompt("ingresa tu nombre");
// if ((nombre!="")&&((nombre=="nico")||(nombre=="Nico"))) {
//     alert("hola Nico..!!");
// } else {
//     alert("ingrese nombre valido");
// }

//??Pruebas 3
// let numero = parseInt(prompt("ingresa un numero"));
// for (let index = 0; index < 10; index++) {
//     let resultado = numero * index;
//     alert(resultado);

// }



/////////////////////////////////////////////////////////

//1° usamos parseInt para convertir a numero el ingreso por prompt
let ingresaNumero = parseInt(prompt("ingresa un numero"));
for (let index = 1; index <= 10; index++) {
    let igual = ingresaNumero / index;
    alert(ingresaNumero + "/" + index + "=" + igual);
}

//2° en vez de usar 'esc' usamos claudio
let dato = prompt("ingrese un dato");
while (dato != "claudio") {
    alert("ingreso" + " " + dato + " " + "si quiere salir del bucle, ingrese Claudio");
    dato = prompt("ingrese dato");
}

//3° usamos 'break para acoplar el numero de veces que queremos que aparezca por pantalla: 'Hola'
let ingresaNum = parseInt(prompt("ingresa el numero de veces que quiera que aparezca 'Hola' en cada entrada"));
for (let index = 0; index <= 1000; index++) {
    if (index == ingresaNum) {
        break;
    }
    alert("Hola");
}