/** use express */
var app = require('express')()

/** use port */
const port = 3011

/** create server */
var http = require('http').createServer(app)

/** create socket */
var io = require('socket.io')(http)

/** set observer event */
io.on('connection', (socket) => {
  
  socket.on('message', (msg) => {
    io.emit('message', msg)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

/** listen at port  */
http.listen(port, () => {
  console.log('listening on :' + port)
})
