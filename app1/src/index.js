const http = require('http')
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()

app.get('/', (req, res, next) => {
  console.log('testes')
  return res.send('testes')
})

var server = http.createServer(app)
server.listen(3000)
