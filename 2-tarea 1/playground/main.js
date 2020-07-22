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
    console.log(numeros[i]);
}
posicion(array,index);

// ejercicio 6
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
function numeroIgual(array) {
    var numIgual = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = (i+1); j < array.length; j++) {
            if ( array[i] == array[j]) {
                numIgual[numIgual.length] = array[i];
            }
        }
    }
    console.log("Numeros repetidos del array:",numIgual);
}
numeroIgual(array);
//esto solo funciona solo si hay dos numeros iguales, si hay mas el numero se repite

// ejercicio 7


