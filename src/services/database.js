import database from 'better-sqlite3'
import { Console } from 'console';

const logdb = new database('log.db')

const stmt = logdb.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`) // setting up new database - create if doesn't already exist
let row = stmt.get(); // returns first row
if (row == undefined) {
    console.log('log database empty. creating log database')
    /*const sqlInit = ` 
        CREATE TABLE access ( id INTEGER PRIMARY KEY, remote-addr VARCHAR, remote-user VARCHAR, dateline VARCHAR, method VARCHAR, url VARCHAR, http-version NUMERIC, status INTEGER, content-length NUMERIC )
    ` // common log format */
    const sqlInit = `
        CREATE TABLE accesslog ( id INTEGER PRIMARY KEY, remoteaddr TEXT, remoteuser TEXT, time TEXT, method TEXT, url TEXT, protocol TEXT, httpversion TEXT, status TEXT, referer TEXT, useragent TEXT );
    `; 
    logdb.exec(sqlInit) // create table
    console.log('your database has been initialized with a new table')
}
else {
    console.log('log database exists') // row now undefined => database already exists
}

export {logdb}