const Koa = require('koa');
const Router = require('koa-router');
const server = new Koa();
const router = new Router();

server.use(router.routes());

router.get('/', (ctx)=> {
	ctx.body = `It works!`
}).get('/contato', ()=> {
	ctx.body = 'here is the contact page'
})

server.listen(3000, ()=> {
	console.log('Console is up.')
	console.log('Access http://localhost:3000')
})