//funcion para mostrar la lista de estudiantes
const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantes registrados");
    estudiantes.forEach((estudiante)=>{
        console.log (`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    });
};

module.exports = {mostrarListaEstudiantes};