const  readlineSync = require("readline-sync");
const {mostrarListaEstudiantes} = require("./lista_estudiantes");
const registrarEstudiantes = () =>{
    const cantidadEstudiantes = readlineSync.question ("Cantidad de estudiantes a registrar: ");
    const estudiantes = [];
    //agrego al arreglo de estudiantes, cada estudiante con su nombre y edad
    for (let i = 0; i <cantidadEstudiantes; i++){
        const nombre = readlineSync.question (`Nombre del estudiante ${i+1}: `);
        const edad = readlineSync.question (`Edad de ${nombre}: `);

        const estudiante = {
            nombre, edad
        };
        estudiantes.push(estudiante);    
    };
    mostrarListaEstudiantes(estudiantes);
};

//inciar el registro de estudiantes
registrarEstudiantes();