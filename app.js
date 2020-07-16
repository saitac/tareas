const { argv } = require('./config/yargs');
const tareas = require('./tareas/tareas');
const colors = require('colors');
const { actualizar, eliminar } = require('./tareas/tareas');

const comando = argv._[0];
// tareas.cargaBD();
// console.log(argv);
switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        break;
    case 'listar':
        let listadoTareas = tareas.getTareas();
        for (let tarea of listadoTareas) {
            console.log("========== Tarea ==========".green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log("===========================".green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log("Registro actualizado correctamente.");
        } else {
            console.log("El registro no existe");
        }
        break;
    case 'eliminar':
        let eliminado = eliminar(argv.descripcion);
        if (eliminado) {
            console.log("Tarea eliminada correctamente");
        } else {
            console.log("La tarea no existe");
        }
        break;
    default:
        console.log('Comando desconocido');
        break;
}