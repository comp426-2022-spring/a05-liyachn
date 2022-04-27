import database from 'better-sqlite3'
import { Console } from 'console';

const logdb = new database('./data/db/access.log')

const stmt = logdb.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='access.log';`) // setting up new database - create if doesn't already exist
let row = stmt.get(); // returns first row
if (row == undefined) {
    console.log('log database empty. creating log database')
    const sqlInit = `
        CREATE TABLE access.log ( id INTEGER PRIMARY KEY, username TEXT, password TEXT );
    `; 
    logdb.exec(sqlInit) // create table
    console.log('your database has been initialized with a new table')
}
else {
    console.log('log database exists') // row now undefined => database already exists
}

export {logdb}