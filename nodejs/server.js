const http = require('http');
const server = http.createServer((req, res)=> {
	const resp = []
	resp['/'] = 'home'
	resp['/contato'] = 'contato'
	resp['semURL'] = 'URL não existe no servidor'

	console.log(req.url)

	res.end(resp[req.url] || resp['semURL']);

});

server.listen(3000, 'localhost', ()=>{
	console.log('Servidor rodando em http://localhost:3000')
})