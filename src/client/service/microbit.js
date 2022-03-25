const path = require("path")
let { PythonShell } = require('python-shell')
var options = {
    pythonOptions: ['-u'], // get print results in real-time
        scriptPath: __dirname,
    args: [data]
}

PythonShell.run("microbit.py", options, function(err, data) {
    if (err) console.log(err)
    else console.log(data)
})
