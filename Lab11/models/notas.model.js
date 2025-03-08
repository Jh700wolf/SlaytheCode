const db=require('../util/database')

module.exports = class Nota{
    constructor(mi_nombre){
        this.nombre = mi_nombre;
    }

    save(){
        return db.execute('INSERT INTO notas(nombre) VALUES(?)', [this.nombre]);
            
    }

    static fetchAll(){
        return db.execute('SELECT * FROM notas');
    }

}