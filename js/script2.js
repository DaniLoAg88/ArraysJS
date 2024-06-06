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