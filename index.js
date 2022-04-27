const morgan = require('morgan')
const fs = require('fs')
const express = require('express') //call dependency - ES module
const app = express()
app.use(express.json()) // allow json body messages on all endpoints
app.use(express.urlencoded({extended: true})) // pass message as url

const minimist = require('minimist') // Require minimist module (make sure you install this one via npm).
const database = require('better-sqlite3')
const logdb = new database('log.db')
const args = minimist(process.argv.slice(2)) // splits, takes last input
args['port', 'debug', 'log', 'help'] // Define allowed argument names

// Store help text 
const help = (` server.js [options]

    --port	Set the port number for the server to listen on. Must be an integer
                between 1 and 65535.

    --debug	If set to true, creates endlpoints /app/log/access/ which returns
                a JSON access log from the database and /app/error which throws 
                an error with the message "Error test successful." Defaults to 
                false.

    --log		If set to false, no log files are written. Defaults to true.
                Logs are always written to database.

    --help	Return this message and exit.
`)

if (args.help || args.h) { // If --help or -h, echo help text to STDOUT and exit
    console.log(help)
    process.exit(0)
}

const port = args.port || process.env.PORT || 5000 // if defined => use args, if not defined => use env variable, else use 3000
const server = app.listen(port, () => {
    console.log('App running on port %PORT%'.replace('%PORT%', port))
})