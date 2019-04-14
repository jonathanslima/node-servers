const express = require('express')
const server = express()

server.get('/', (req, res)=> {
	res.send('HOME PAGE')
})

server.listen(3000, ()=>{
	console.log('ok')
});