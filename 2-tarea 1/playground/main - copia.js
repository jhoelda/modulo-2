//Conceptos básicos de JavaScript
// ejercicio 1
var myName= "jhoelda";
console.log("My Name:",myName);

// ejercicio 2
var age= 22;
console.log("Age:",age);

// ejercicio 3
var ignasiAge= 32;
var ageDiff= age-ignasiAge;
console.log(ageDiff);

// ejercico 4
if (age > 21) {
    console.log("You are older than 21");
} else {
    console.log("You are not older than 21");
}
// ejercico 5
if (ignasiAge == age) {
    console.log("You have the same age as Ignasi");
} else {
    if (ignasiAge > age) {
        console.log("Ignasi is older than you");
    } else {
        console.log("Ignasi is younger than you");
    }
}

// Funciones de matriz de JavaScript
// ejercicio 1
//integrantes de Ctrol Z
var className = ["Belen","Catalina","Jhoelda","Luz","Magali","Yennyfer","Carla","Rodrigo","Branko","Andrea","Aylen","Azucena","Belen","Camila","Carolina","Florencia","Katy","Luana","Macarena","Malena","Maria","Micaela","Nadine","Nicole","Rocio","Reyna","Veronica","Victoria","Yael","Florencia","Janneth","Melissa","Florencia"]
className.sort()//ordena className alfabeticamente
console.log("Primer valor del array:",className[0]);//primera posicion 
console.log("Ultimo valor del array:",className[className.length-1])//ultima posicion
for(var i = 0; i < className.length; i++){
    console.log(className[i])
}
console.log("")//dejo un espacio para separar cada ejercicio en la consola

// ejercicio 2
var classAge = [20,21,22,23,20,19,24,18,22,20,23,21,23,26,32]
console.log("Todas las edades:")//saco por consola todos las edades
var i =0;
while(i<classAge.length){
    console.log(classAge[i]);
    i++;
}
console.log("Edades pares con WHILE:")//saco por consola todas las edades pares con while
var i =0;//tengo q reiniciar i antes de cada while
while(i<classAge.length){
    if((classAge[i] % 2) == 0){
    console.log(classAge[i]);
    }
    i++;
}
console.log("Edades pares con FOR:")//saca por consola todas las edades pares con for
for(var i = 0; i < classAge.length; i++){
    if((classAge[i] % 2) == 0){
        console.log(classAge[i]);
        }
}
console.log("")

// ejercicio 3
var matriz = [29,5,36,9,8,7,25,6,10,4,96,100];
function numeroMenor(array) {
    var numMenor=array[0];
    for (var i= 0; i< array.length; i++) {
        if (array[i] < numMenor) {
            numMenor = array[i];
        } 
    }
    console.log("Numero menor:",numMenor);
}
numeroMenor(matriz)

// ejercicio 4
var matriz = [29,5,36,9,8,7,25,6,10,4,96,100];
function numeroMayor(array) {
    var numMayor = array[0];
    for(var i=0; i < array.length; i++){
        if (array[i] > numMayor) {
            numMayor = array[i];
        } 
    }
    console.log("Numero mayor:",numMayor);
}
numeroMayor(matriz)

// ejercicio 5
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
function posicion(numeros,i) {
    console.log(numeros[i-1]);
}
posicion(array,index);

// ejercicio 6
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
function numeroIgual(array) {
    var numIgual = [];
    var objetoAux = {};
    for(var i = 0; i < array.length; i++) {
        if(!objetoAux[array[i]]) {
            objetoAux[array[i]] = 0;
        }
        objetoAux[array[i]] += 1;
    }

    for(propiedad in objetoAux) {
        if(objetoAux[propiedad] > 1) {
            numIgual.push(propiedad)
        }
    }
    //la palabra propiedad puede ser cambiada, pero se debe usar la misma en las 3

    console.log("Numeros repetidos del array:",numIgual);
}
numeroIgual(array)

// ejercicio 7

myColor = ["Red", "Green", "White", "Black"];
function arrayIntoString(array) {
    return array.toString()
}
console.log(arrayIntoString(myColor))

function arrayToString(array) {
    var frase = "";
    for (let i = 0; i < array.length; i++) {
        frase += '"';
        frase += array[i];
        frase += '"';
        if (i < array.length -1) {//menos 1 porque la ultima no tiene coma
            frase += ', ';
        }  
    }
    return frase;
}
console.log(arrayToString(myColor))

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

//repaso java clase viernes 2020-07-17

// for(var i = 0; i < 10; i++){
//     console.log(i)
// }
//console.log("")
//var num = [34,7,4,26,51];
//console.log(num[2]);
//console.log(num.length);//lento? cuenta el numero de posiciones q hay 
//console.log(num[num.length-1]);//con el corchete muestra el contenido de la caja
//console.log(num[400]);//llama la posicion 400 pero no existe
//num[6] = 99;//da un valor a la posicion 6
//console.log(num);//llamar por pantalla
//num[221] = 90;//da un valor a la posicion 221
//console.log(num);