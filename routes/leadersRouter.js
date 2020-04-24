const express = require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();
leadersRouter.use(bodyParser.json());

leadersRouter.route('/')
.all((req,res,next) =>
{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();

})

.get((req,res,next)=>{
	res.end('This will retrive the leaders  from the database');
})

.post((req,res,next) =>{
	res.end('will add the leader :'+req.body.name +' with details: '+req.body.description);
})

.put((req,res,next) =>{
	res.statusCode = 403;
	res.end('put operation is not supported!');
})

.delete((req,res,next) =>{
	res.end('leaders will be deleted!');;
});

leadersRouter.route('/:leadId')
// .all((req,res,next) =>
// {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	next();

// })

.get((req,res,next)=>{
	res.end('This will retrive the details of leader  from the database : '+ req.params.leadId);
})


.put((req,res,next) =>{
	res.write('Updating  the leader : '+req.params.leadId);
	res.end('\nwill update the leader : '+req.body.name+' with details: '+req.body.description);
})

.delete((req,res,next) =>{
	res.end('will delete the leader:'+req.params.leadId);
})

.post((req,res,next) =>
{
	//res.writeHead('403','not supported!');
	res.statusCode = 403;
	res.end('post operation is not supported !');
});


module.exports = leadersRouter;