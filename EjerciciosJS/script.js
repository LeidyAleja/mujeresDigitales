// variables y condicionales

// ciclos son declaraciones repetitivas 
 
function listNumbers(){
    let numbers = 0 ;
    for (let i =1; i <= 50; i++){
    if( i % 2 == 0)  {numbers += i;

    }
    }
    return numbers; 
}
// arreglos
function sumArray(arr){
    
}

//JSON

function getPersonInfo(){
const person ={
 name: "leidy",
 age: "22 años",
 city: "bucaramanga"
};
return JSON.stringify(person,null,2);
}

/*
1-crear funcion que procese la informacion de un estudiante
2. debe tener 3 parametros o 3 argumentos
3. determinar si su edad es mayor de 18 años o no
4.calcular promedio de calificaciones
5. determinar el rango de la calificacion final
6. devolver un objeto json con la informacion
*/
const calificacion= [20, 30, 100, 25, 70, 80]
function processStudentData(nombre, edad, [calificacion]){
let esMayoredad= edad >=18
let promedio;
let sumaCalificaciones= 0

for(let i=0; i<calificacion.length; i++){
    sumaCalificaciones += calificacion[i];
}
promedio= sumaCalificaciones/calificacion.length

const rangoPromedio = gradelevel (promedio)
const informacionEstudiante ={
    nombre:nombre,
    edad:esMayorEdad ? "Es mayor de edad": "Es menor de edad",
    calificacion: rangoPromedio,

}

 return informacionEstudiante

}

console.log(proccessStudentData("daniela",27, calificacion))