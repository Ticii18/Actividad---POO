// PUNTO 1
String.prototype.concatenarPalabra = function(palabra){
    return `${this} ${palabra}`.trim();
}

const frase = "Hola";
frase.concatenarPalabra("Mundo");

console.log(frase.concatenarPalabra("Mundo"));

// PUNTO 2
String.prototype.toUpperCase= function(){
    return "ESTO ESTÁ PROHIBIDO";
}

const frase2 = "Hola"
console.log(frase2)
console.log(frase2.toUpperCase())