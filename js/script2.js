/**
 *  ACTIVIDAD 3.3
 */

let numeros = new Array(100);

for(let i = 0; i < numeros.length; i++){
    if(i != 10 && i != 20 && i!= 30 && i!= 40 && i!= 50){
        numeros[i] = parseInt(Math.random() * 100);
    } else{ //Los índices 10, 20, 30, 40, 50 los dejamos vacíos
        numeros[i] = undefined;
    }
    
}
console.log(numeros);

/**
 * FOR IN
 */
//Para mostrar el array y valorar si es par, utilizamos el for-in
//El for-in lo que hace es entrar solo en los elementos que tengan valor
//Si algún elemento está vacío se lo salta (10,20,30,40,50)
//COGE LOS ELEMENTOS POR ÍNDICE
for(let i in numeros){
    if(numeros[i] %2 == 0){
        console.log(`Número par en el índice ${i} con valor ${numeros[i]}`);
    }
}


/**
 * FOR OF
 */
let mascotas = ["perro", "gato", "tortuga"];

for (let mascota of mascotas) {
    console.log(mascota);
}
//ÉSTE no recorre por índice si no que recorre por elemento dentro del array
//ÉSTE NO se salta los vacíos


let matriz = [[5,1,2],[4,6,7],[7,2,3],[1,9,8]];

// Recorrer el array bidimesional de distinta manera
for (let i = 0; i < matriz.length; i++) { // Recorre 4 veces
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Valor de la fila ${i} y columna ${j} es ${matriz[i][j]}`);
        
    }
}


/**
 * ACTIVIDAD RESUELTA 3.2
 */

let diagonal = new Array(3);

for (let i = 0; i < diagonal.length; i++) {

    diagonal[i] = new Array(3);

    for (let j = 0; j < diagonal[i].length; j++) {
        //Rellenado del Array de cada fila
        diagonal[i][j] = Math.floor(Math.random() * 100 + 1);
        //Mostramos en la tabla los valores asignados
        document.getElementById("d" + i + j).innerHTML = diagonal[i][j]; 

        if(i == j){
            //Cambiamos a color rojo los números que pertenecen a la diagonal (0,0 - 1,1 - 2,2)
            document.getElementById("d" + i + j).style.color = "red";
        }
    }
}

