const fs = require('fs')
const http = require('http')

require('./src/write-img-list')()

let server = http.createServer((req, res) => {
    let router = require('./router')(req.url)
    fs.readFile(`${__dirname}/${router.url}`, (err, data) => {
        if (err) {
            let errData = fs.readFileSync(`${__dirname}/src/notfound.html`)
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end(errData)
            return
        }
        res.writeHead(200, { 'Content-Type': router.type })
        res.end(data)
    })
})

let port = process.env.PORT || 5500
server.listen(port, () => {
    console.log('Server is running on port: 5500')
})

