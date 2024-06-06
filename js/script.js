//variables -> tiene un nombre y utiliza un espacio en memoria para guardar un valor

let alumno1 = "Juan Perez";
let alumno2 = "Marina Torres";

//Para estructuras de datos -> se guardan en memoria como variables
//Se utilizan ARRAYS
//En JavaScrip los arrays pueden tener varios tipos de datos en el mismo y también se puede variar el tamaño

//DECLARACIÓN DE UN ARRAY
let alumnos = ["Juan Rodriguez", "Marina Torres", "Dani López", "Tania Pinero", "Sergio Castro"];
alumnos[5] = "Arantxa González";

console.log(alumnos[3]); //Te muestra el elemento 3 del array
console.log(alumnos); //Te muestra todos los elementos del array

//Declaración de estructura sin datos, NO es necesario decir el número de elementos
let profesores = new Array();


/*
let edades = new Array(18,21,34);
let edades = Array[18,21,34];
let edades = [18,21,34];
TODAS SON FORMAS VÁLIDAS DE DECLARAR UN ARRAY CON CONTENIDO
*/


//Reemplazar valor de alguna posición específica
alumnos[5] = "Arantxa González García";


/**
 * ACTIVIDAD 3.1
 * Crear un array de localidades y mostrar las que están en posiciones impares
 */

let localidades = ["Alcázar de San Juan","Argamasilla de Alba","Mota del Cuervo","Cinco Casas","Quintanar de la Orden","Tomelloso"];

for(i = 0; i < localidades.length; i++){
    if(i%2 != 0){
        console.log(localidades[i]);
    }
}


/**
 *  CREAR ARRAY BIDIMENSIONAL (MATRIZ)
 */

//Crear el array bidimensional con valores random del 1 al 10
//Crear 5 filas y 4 columnas

let notas = new Array(5); //NOS CREA UN ARRAY BIDIMENSIONAL DE 5 FILAS (SIN COLUMNAS)

for(let i = 0; i < 5; i++){

    notas[i] = new Array(4); //NOS CREA EN LA FILA i UN ARRAY DE 4 COLUMNAS

    for(let x = 0; x < 4; x++){
        notas[i][x] = parseInt((Math.random() * 10) + 1);
    }
}

console.log(notas);
