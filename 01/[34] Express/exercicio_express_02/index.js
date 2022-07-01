// Express imports
const express = require('express')
const app = express()
// Body-Parser imports
// const bodyParser = require('body-parser')
// User module imports
const user = require('./API/user')
//---------------------------------
// Json imports LIST_USERS
const LIST_USERS = require('./users.json')
//---------------------------------


//---------------------------------
// First call
app.use((req, res, next) => {
    console.log("Starting process")
    next()
})
//---------------------------------
// Middle call (test)
app.use((req, res, next) => {
    console.log("Running process...")
    next()
})
//---------------------------------


//------------PATHS: GET-----------
// case path = plane
app.get('/', (req, res, next) => {
    console.log("action: run app without call nothing more")
    res.send("Plane Path")
    next()
})
// case path = user
app.get('/user', (req, res, next) => {
    console.log("action: get user  (but nothing was found)")
    res.send("Nothing user called!")
    next()
})

// case path = user + id
// (em baixo)

// case path = users
app.get('/users', (req, res, next) => {
    console.log("action: get users_list")
    res.json(LIST_USERS)
    next()
})
//---------------------------------


//-----------PATHS: POST-----------
//--case path = user + id > save--
// app.post('/user/:id', user.save)

//--case path = user + id > update--
// app.post('/user/:id', user.update)

//--case path = user + id > remove--
// app.post('/user/:id', user.remove)
//---------------------------------

//--------------POST---------------
app.post('/user/:id', (req, res, next) => {

    if (req.query.action == "delete") {
        console.log("deleted: " + req.params.id)
        res.send("deleted: " + req.params.id)
    }
    if (req.query.action == "update") {
        console.log("updated: " + req.params.id + " > " + req.query.for)
        res.send("updated: " + req.params.id + " > " + req.query.for)
    } else {
        next()
    }
    next()
})
//---------------------------------


//--------------GET---------------

app.get('/user/:id', (req, res, next) => {
    const query_name = req.params.id
    const users = LIST_USERS.users[query_name]
    res.json(users)

    console.log('-----------')
    console.log("action: get user:id > " + users.name)
    console.log('-----------')

    next()
})
//---------------------------------


//---------------------------------
// Last call (not is needed next())
app.use((req, res) => {
    console.log("Finishing process")
})
//---------------------------------
// Listen port 3000
app.listen('3000', () => {
    console.log("Backend running in port 3000")
})