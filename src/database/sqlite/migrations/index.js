const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers');

async function runMigrations(){
    const schemas  = [
        createUsers
    ].join('');

    sqliteConnection().then(db => db.exec(schemas)).catch(err => console.log(err))
}

module.exports = runMigrations;