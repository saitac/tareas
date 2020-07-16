// Requires
const fs = require('fs');

let tareas = [];

const cargarBD = () => {
    try {
        tareas = require('../db/data.json');
    } catch (error) {
        tareas = [];
    }
    // console.log('esta', tareas);
};

const guardarDB = () => {
    let data = JSON.stringify(tareas);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        }
    });
};

const crear = (descripcion) => {

    cargarBD();

    let tarea = {
        descripcion,
        completado: false
    };

    tareas.push(tarea);

    guardarDB();

    return tarea;
};

const getTareas = () => {
    cargarBD();
    return tareas;
};

const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = tareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (index !== -1) {
        tareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const eliminar = (descripcion) => {
    cargarBD();
    let index = tareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (index !== -1) {
        tareas.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getTareas,
    actualizar,
    eliminar
};