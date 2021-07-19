
const http = require('http')

let server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('<h1>HELLO WORLD</h1>')
})

let port = process.env.PORT || 5500
server.listen(port, () => {
    console.log('Server is running on port: 5500')
})

