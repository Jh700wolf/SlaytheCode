const notas = [{nombre:"Hola"}];

module.exports = class Nota{
    constructor(mi_nombre){
        this.nombre = mi_nombre;
    }

    save(){
        notas.push(this);
    }

    static fetchAll(){
        return notas;
    }

}