const path = require("path")
let { PythonShell } = require('python-shell')

module.exports =  (feed_id, feed_value) => {
    var options = {
        pythonOptions: ['-u'], // get print results in real-time
            scriptPath: __dirname,
        args: [feed_id, feed_value]
    }

    PythonShell.run("microbit.py", options, function(err, data) {
        if (err) console.log(err)
        else console.log(data)
    })
}
