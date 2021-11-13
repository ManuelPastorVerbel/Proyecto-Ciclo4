const db= require('mongoose');

db.Promise = global.Promise;


async function connect (url){
    await db.connect(url);
    
    console.log('Conectado a Database')
}
module.exports = connect;




