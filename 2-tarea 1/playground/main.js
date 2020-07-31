// Funciones de cadena de JavaScript
// ejercicio 1
function reverseString(input) {
    var string = ""+input;
    var reverse = [];
    var array = string.split("")//divide el elemento por los espacios
    for (var i = array.length; i >= 0; i--) {
        reverse.push(array[i])
    }
    return reverse.join("");//une el elemento
}
console.log(reverseString("escribir"))
console.log(parseInt(reverseString(32443),10))
// typeof()
// parseInt()
//buscar: eso pregunta si es un numero para convertilo de nuevo en un numero

// ejercicio 2
function sortAlphabetically(input) {
    var string = ""+input;
    var array = string.split("");
    return array.sort().join('');//sort: ordena alfabeticamente
}
console.log(sortAlphabetically("webmaster"))

// ejercicio 3
function capitalCase(string) {
    var enMayuscula = string.split(" ").map((palabra)=>{
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }).join(" ");
    //split: divide el array en los espacios, map:cada elemento en mayuscula
    return enMayuscula;
}
console.log(capitalCase("prince of persia"))

// ejercicio 4
function palabraLarga(string) {
    var array = string.split(" ");
    var contador = 0;
    var palabraLarga = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > contador) {
            contador = array[i].length;
            palabraLarga = array[i]            
        }        
    } 
    return palabraLarga;   
}
console.log(palabraLarga("Web Development Tutorial"))