const http = require('http')
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()

app.get('/', (req, res, next) => {
  console.log('teste 3')
  return res.send('teste 3')
})

var server = http.createServer(app)
server.listen(3001)
