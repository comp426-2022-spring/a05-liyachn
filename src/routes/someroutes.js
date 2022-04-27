const { restart } = require("nodemon");

// Route (endpoint) definitions go in this directory
app.get('/app/', (req, res) => { // root endpoint
    res.status(200).end('200 OK') // 200 = success
    res.type("text/plain")
})

if (args.debug == true)
{
    app.get('/app/log/access/', (req, res) => {
        const stmt = logdb.prepare('SELECT * FROM accesslog').all() // log all data in accesslog
        res.status(200).json(stmt)
        res.type("text/plain")
    });

    app.get('/app/error/', (req, res) => {
        throw new Error('Error test successful.')
    });
}

if (args.log == true) // create file, write access log to it in combined format
{
    // Use morgan for logging to files
    // Create a write stream to append (flags: 'a') to a file
    const logstream = fs.createWriteStream('./access.log', { flags: 'a' })
    // Set up the access logging middleware
    app.use(morgan('combined', { stream: logstream }))
}

app.get('/app/flip/', (req, res, next) => { // returns results of random coin flip
    res.status(200).json({ 'flip' : coinFlip() }) // add 'flip' key => becomes json
    res.type("text/plain")
})

app.get('/app/flips/:number/', (req, res, next) => { // returns json array of raw random flips + summary
    const raw = coinFlips(req.body.number)
    res.status(200).json({ 'raw' : raw, 'summary' : countFlips(raw)})
    res.type("text/plain")
})

app.get('/app/flip/call/heads/', (req, res) => { // returns result of random flip match against heads
    res.status(200).json(flipACoin('heads'))
    res.type("text/plain")
})

app.get('/app/flip/call/tails/', (req, res) => { // returns result of random flip match against tails
    res.status(200).json(flipACoin('tails'))
    res.type("text/plain")
})

app.post('/app/flip/coins/', (req, res, next) => {
    const flips = coinFlips(req.body.number)
    const count = countFlips(flips)
    res.status(200).json({"raw":flips,"summary":count})
})

app.post('/app/flip/call/', (req, res, next) => {
    const game = flipACoin(req.body.guess)
    res.status(200).json(game)
})

app.get('/app/log/error/', (req, res) => {
    //create error log => error.log
})

app.post('/app/user/login/', (req, res, next) => {
    // create access log => access.log
})

app.post('/app/user/new/', (req, res, next) => {
    // create access log => access.log
})

app.post('/app/user/update/', (req, res, next) => {
    // update access log => access.log
})

app.use(function(req, res) { // error if endpoint not found
    res.status(404).send("404 NOT FOUND")
    res.type("text/plain")
})