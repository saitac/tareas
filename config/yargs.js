const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca compo compleada o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea', { descripcion })
    .command('actualizar', 'Actualiza una tarea', { descripcion, completado })
    .command('eliminar', 'Elimina una tarea', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}