const restify = require('restify')
const server = restify.createServer()

server.get('/', (req, res)=> {
	console.log('rota para home');
	res.end('AEWWWW')
})

server.listen(3000, ()=> {
	console.log('Server up')
})

