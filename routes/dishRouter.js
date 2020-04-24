const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) =>
{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();

})

.get((req,res,next)=>{
	res.end('This will retrive the dishes  from the database');
})

.post((req,res,next) =>{
	res.end('will add the dish:'+ req.body.name +'with details: '+req.body.description);
})

.put((req,res,next) =>{
	res.statusCode = 403;
	res.end('put operation is meaninigless!');
})

.delete((req,res,next) =>{
	res.end('Dishes will be deleted!');;
});

dishRouter.route('/:dishId')
// .all((req,res,next) =>
// {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	next();

// })

.get((req,res,next)=>{
	res.end('This will retrive the details of dish  from the database :'+req.params.dishId);
})

.post((req,res,next) =>{
	//res.writeHead('403','not supported!');
	res.statusCode = 403;
//\ 	res.end('post operation is not supported! ')
})

.put((req,res,next) =>{
	res.write('Updating  the dish :'+req.params.dishId);
	res.end('\nwill update the dish :'+req.body.name+' with details: '+req.body.description);
})

.delete((req,res,next) =>{
	res.end('will delete the dish:'+req.params.dishId);
});

module.exports = dishRouter;