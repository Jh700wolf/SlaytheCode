const db=require('../util/database')

module.exports = class Nota{
    constructor(mi_nombre, mi_imagen){
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
    }

    save(){
        return db.execute('INSERT INTO notas(nombre, imagen) VALUES(?,?)', [this.nombre, this.imagen]);
            
    }

    static fetchAll(){
        return db.execute('SELECT * FROM notas');
    }

    static retryNota(){
        return db.execute
    }

}