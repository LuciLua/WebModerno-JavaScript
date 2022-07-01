function save(req, res) {
    res.send("(POST) User > Save")
    console.log("Save")
}

function update(req, res) {
    res.send("(POST) User > Update")
    console.log("Update")
}

function remove(req, res) {
    res.send("(POST) User > Remove")
    console.log("Remove")
}

module.exports = { save, update, remove }