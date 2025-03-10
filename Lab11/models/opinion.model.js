const db=require('../util/database')

module.exports = class Opinion{
    constructor(mi_opinion){
        this.opinion = mi_opinion;
    }

    save(){
        return db.execute('INSERT INTO opiniones(opinion) VALUES(?)', [this.opinion]);
            
    }

    static fetchAll(){
        return db.execute('SELECT * FROM opiniones');
    }

}