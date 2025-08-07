// PUNTO 3
String.prototype.concatenarPalabra = function(palabra){
    return `${this} ${palabra}`.trim();
}

const frase = "Hola";
frase.concatenarPalabra("Mundo");

console.log(frase.concatenarPalabra("Mundo"));
