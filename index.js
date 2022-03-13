
//si--condicion
if (true){
    "a=b";
    console.log("b!=c");
}

if (false){
    "a=b";
    console.log("no vas a poder ver este mensaje, no se muestra en consola, porque es falso!!");
}
/*ejemplo practico*/
let num=5;

if(num==5){
    console.log("vas a ver este mensaje");
}
if(num==6){
    console.log("no vas a ver este mensaje");
}
//if--else
let color="rojo";
if(color=="rojo"){
    console.log("es OKK..!!");
}else{
        console.log("no hagas nada");
}

//en consola
let col="rojo";
if(col=="verde"){
    console.log("no hagas nada");
}else{
    console.log("dale OKK..!!");
}

//en pagina
let nombre=prompt("ingresa tu nombre");
if (nombre==""){
    alert("no ingresaste tu nombre");
}else{
    alert("Tu nombre es,"+" "+ nombre);
}

let precio=prompt("ingrese el precio, para conocer si esta en oferta..!!")
if(precio==""){
alert("no ingreso nada");
}else if(precio==100){
    alert("el precio es de:"+" "+precio);
}else if(precio>=100){
    alert("el precio es mayor a 100");
}else if(precio<=100){
    alert("excelente..!!"+" "+ "has conseguido la mejor OFERTA!!"+" "+"a"+" "+"$"+precio);
}else {
    alert("no esta a la venta");
}