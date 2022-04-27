// Middleware function definitions go here
import {logdb} from "./src/services/database"

app.use( (req, res, next) => { // middleware function inserting new record in database
    /*let logdata = {
        remoteaddr: req.ip,
        remoteuser: req.user,
        time: Date.now(),
        method: req.method,
        url: req.url,
        protocol: req.protocol,
        httpversion: req.httpVersion,
        status: res.statusCode,
        referer: req.headers['referer'],
        useragent: req.headers['user-agent']
    } */
    const stmt = logdb.prepare('INSERT INTO access.log (username, password) VALUES (req.username, req.password)')
    //stmt.run(logdata.remoteaddr, logdata.remoteuser, logdata.time, logdata.method, logdata.url, logdata.protocol, logdata.httpversion, logdata.status, logdata.referer, logdata.useragent)
    next()
})