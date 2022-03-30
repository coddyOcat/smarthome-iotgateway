const path = require("path")
let { PythonShell } = require('python-shell')

const axios = require("axios")
const sendData = async (feed_id, feed_value) => {
    axios.post('http://127.0.0.1:8989/post', {
        feed_id: feed_id,
        feed_value: feed_value
    })
    .then(function (response) {
      const data = response.data;
      console.log(data)
    })
    .catch(function (error) {
      console.log(error);
    })
}

module.exports =  (feed_id, feed_value) => {
    // var options = {
    //     pythonOptions: ['-u'], // get print results in real-time
    //         scriptPath: __dirname,
    //     args: [feed_id, feed_value]
    // }

    // PythonShell.run("microbit.py", options, function(err, data) {
    //     if (err) console.log(err)
    //     else console.log(data)
    // })
    sendData(feed_id, feed_value)
}

