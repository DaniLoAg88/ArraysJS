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


/**
 * ACTIVIDAD 3.2
 * Crear un cuadro div y un desplegable indicando los colores, y según la elección cambiar su color
 */


let coloresRGB = new Array();
coloresRGB[0] = "#F39C12";
coloresRGB[1] = "#C0F312";
coloresRGB[2] = "#12F3E5";
coloresRGB[3] = "#F312AF";
coloresRGB[4] = "#F31212";

let nombreColores = ["Naranja", "Lima", "Turquesa", "Rosa", "Rojo"];

//Las dos formas son válidas para declarar e inicilizar un array


let colores = document.querySelector("#colores"); //Trae el select (con # por ID)

for (let i = 0; i < nombreColores.length; i++) {
    let opcion = document.createElement("option"); //Creamos un option para el select que tenemos en HTML(crea una etiqueta)
    opcion.textContent = nombreColores[i]; //Metemos el texto del option (nombre del color)
    opcion.setAttribute("value",i); //Le agregamos como atributo el value con el valor de i
    colores.appendChild(opcion); /*Le creamos un hijo al select que hemos recogido en éste objeto colores
    y se lo añadimos con todos los valores que le hemos dado al objeto opcion*/
}


let contenedor = document.querySelector(".container"); //Recogemos el contenedor que creamos en HTML (con . porque es por clase)

/*Ahora vamos a decirle al objeto colores que es el select que hemos recogido del HTML que escuche
    si hay algún cambio en la selección*/
colores.addEventListener("change", function(){

    if(colores.value == ""){
        contenedor.style.backgroundColor = "black"; //Si selecciona el valor vacío el fondo vuelve a negro
    } else{
        contenedor.style.backgroundColor = coloresRGB[colores.value];/* Como siempre está
        a la escucha de un cambio, cuando cambia recoge el valor seleccionado y se lo mete
        al color de fondo del contenedor*/
    }
    
});






