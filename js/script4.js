// Array.push("Tomelloso"); //Insertar al final
// Array.unshift("Mota del Cuervo"); // Insertar al principio

// multiplosCinco.pop; //Elimina el último elemento
// multiplosCinco.shift; //Elimina el primer elemento

/**
 * ACTIVIDAD PROPUESTA 3.5
 */

//Creación Array 10 elementos
let multiplosCinco = new Array(10);

//Inicialización de Array con números random múltiplos de 5, del 0 al 100
for (let i = 0; i < multiplosCinco.length; i++) {
  
    multiplosCinco[i] = parseInt((Math.random()*21)) * 5;

}

console.log(multiplosCinco);


//Comprobación del primer valor del Array
while(multiplosCinco[0] < 50){
    multiplosCinco.shift;
    multiplosCinco.unshift(parseInt((Math.random()*21)) * 5);
}

//Comprobación del último valor del Array
while(multiplosCinco[9] > 50){
    multiplosCinco.pop;
    multiplosCinco.push(parseInt((Math.random()*21)) * 5);
}

console.log(multiplosCinco);