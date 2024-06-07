
//Rellenado de datos automático o manual:

//Automático
let clasificacion = new Array(10); //CAMBIAR A 10 CUANDO FUNCIONE OK
clasificacion[0] = ["Athletic", 65, 38, 20, 8, 10, 78, 34];
clasificacion[1] = ["Alavés", 42, 38, 10, 12, 16, 45, 56];
clasificacion[2] = ["Atlético", 64, 38, 20, 12, 8, 85, 66];
clasificacion[3] = ["Real Madrid", 64, 38, 23, 8, 4, 95, 36];
clasificacion[4] = ["Barcelona", 62, 38, 20, 10, 8, 75, 36];
clasificacion[5] = ["Girona", 63, 38, 22, 10, 6, 75, 36];
clasificacion[6] = ["Villarreal", 50, 38, 15, 12, 11, 65, 56];
clasificacion[7] = ["Valencia", 42, 38, 16, 12, 10, 55, 46];
clasificacion[8] = ["Rayo Vallecano", 42, 38, 10, 12, 16, 55, 66];
clasificacion[9] = ["Real Sociedad", 42, 38, 10, 12, 16, 45, 56];


//Manual
// for (let i = 0; i < clasificacion.length; i++) {

//     clasificacion[i] = new Array(8);

//     clasificacion[i][0] = prompt("Introduzca el nombre del equipo");
//     clasificacion[i][1] = prompt("Puntos obtenidos del equipo");
//     clasificacion[i][2] = prompt("Número de partidos jugados del equipo");
//     clasificacion[i][3] = prompt("Número de partidos ganados del equipo");
//     clasificacion[i][4] = prompt("Número de partidos empatados del equipo");
//     clasificacion[i][5] = prompt("Número de partidos perdidos del equipo");
//     clasificacion[i][6] = prompt("Goles a favor del equipo");
//     clasificacion[i][7] = prompt("Goles en contra del equipo");
// }


let tabla = document.querySelector("#tabClasificacion");

for (let i = 0; i < clasificacion.length; i++) {
    
    let fila = document.createElement("tr");
    tabla.appendChild(fila);

    for (let j = 0; j < clasificacion[i].length; j++) {
        let celda = document.createElement("td");
        celda.textContent = clasificacion[i][j];
        fila.appendChild(celda);
    }

}

//Ahora vamos a comprobar cuál es el equipo ganador y a mostrarlo en una tabla:
let posicion = 0;
let puntos = 0;

for (let i = 0; i < clasificacion.length; i++) {

    if (clasificacion[i][1] > puntos) {
        puntos = clasificacion[i][1];
        posicion = i;
    }
}

document.getElementById("NombreG").innerHTML = clasificacion[posicion][0];
document.getElementById("PuntosG").innerHTML = clasificacion[posicion][1];
document.getElementById("JugadosG").innerHTML = clasificacion[posicion][2];
document.getElementById("GanadosG").innerHTML = clasificacion[posicion][3];
document.getElementById("EmpatadosG").innerHTML = clasificacion[posicion][4];
document.getElementById("PerdidosG").innerHTML = clasificacion[posicion][5];
document.getElementById("FavorG").innerHTML = clasificacion[posicion][6];
document.getElementById("ContraG").innerHTML = clasificacion[posicion][7];
