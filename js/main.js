alert("¡Bienvenido a KAN nuestra tienda de zapatillas!");

let tallaZapatillas = prompt("¡Hola, estas en KAN Por favor, ingresa tu talla de zapatillas:");

if (tallaZapatillas >= 39 ) {
       alert("¡Excelente, has seleccionado la talla de zapatillas: " + tallaZapatillas);
   } else {
       alert("Por favor, ingresa una talla válida. Gracias por visitar nuestra tienda.");
   }

const nombretienda = ("KAN")
console.log ("estas en " + nombretienda + " Bienvenido") 
console.log ("podras encontrar todo lo que buscas en " + nombretienda)

let producto = ("adidas samba");
console.log (producto);

let numeracion = (" numeracion completa")
console.log (numeracion)

let descuento = (120000 - 20000)
console.log ("precio final de " + descuento);


for (let i = 39; i<= 46; i++){
    console.log(i)
   
}

let x = 39
while(x < 46){
    console.log("si hay talle"+ x);
    x = x +1;
}

function carrito(precio){
    console.log (" las new balance 57/40 " +" salen en " + precio)
}
carrito(120000);

const talle = function(numeracion){
    console.log("el talle es" + numeracion);
}
talle(43);

const productos = ["zapatillas", "ojotas","botines"];

const numeros = [39,40,41,42];

const usuario = [
    {
        nombre : "eladio",
        edad : 27,

    }
];

console.log (productos);

console.log(productos[0]);
console.log (productos[2]);

for(let i = 0; i < 2; i++){
    console.log(productos [2])
}

console.log(productos.length);

productos.push("zapatos");
console.log(productos)

productos.unshift("medias")
console.log(productos)

productos.shift()
console.log(productos);

productos.pop()
console.log(productos);

