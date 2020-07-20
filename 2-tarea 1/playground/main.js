// Funciones de matriz de JavaScript
// ejercicio 1
//integrantes de Ctrol Z
var className = ["Belen","Cata","Jhoelda","Luz","Maga","Yennir","Carla","Rodrigo","Branko"]
className.sort()//ordena className alfabeticamente
console.log(className[0]);//primera posicion 
console.log(className[className.length-1])//ultima posicion
console.log("")
for(var i = 0; i < className.length; i++){
    console.log(className[i])
}
console.log("")//dejo un espacio para separar cada ejercicio en la consola
// ejercicio 2
var classAge = [20,21,22,23,20,19,24,18,22,20,23,21,23,26,32]
i =0;
//saco por consola todos las edades
while(i<classAge.length){
    console.log(classAge[i]);
    i++;
}
console.log("")
//saco por consola todas las edades pares con while
i =0;//tengo q reiniciar iantes de cada while
while(i<classAge.length){
    if((classAge[i] % 2) == 0){
    console.log(classAge[i]);
    }
    i++;
}
console.log("")
//saca por consola todas las edades pares con for
for(var i = 0; i < classAge.length; i++){
    if((classAge[i] % 2) == 0){
        console.log(classAge[i]);
        }
}
console.log("")

// ejercicio 3
var matriz = [29,5,36,9,8,7,25,6,10,4,96,100];
var numMenor = 0;
for(var i=0; i < matriz.length; i++){
    // console.log(matriz);
    if (matriz[i] < matriz[i+1]) {
        numMenor = matriz[i] 
        matriz[i] = matriz[i+1]
        matriz[i+1] = numMenor
    }
    else{
        numMenor = matriz[i]
    }
}
console.log("Numero menor:",numMenor);

// ejercicio 4
var numMayor = 0;
for(var i=0; i < matriz.length; i++){
    // console.log(matriz);
    if (matriz[i] > matriz[i+1]) {
        numMayor = matriz[i] 
        matriz[i] = matriz[i+1]
        matriz[i+1] = numMayor
    }
    else{
        numMayor = matriz[i]
    }
}
console.log("Numero mayor:",numMayor);

// ejercicio 5

// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// var index = 1;
// function posicion (array,index)
//no entendi muy bien el problema

// ejercicio 6




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