import * as express from 'express';
import db from '../db';
const router = express.Router();

router.get('/', async (req, res) => {
	try{
		console.log("test")
	res.json(await db.Users.all());
		
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
	});

 router.post('/', async(req, res) => {
	try{
		const name = req.body.name;
		const email = req.body.email;
 		const DB = await db.Users.PostUsers(name, email);

		 res.json(DB);
 	}catch(e){
 		console.log(e);
		res.sendStatus(500);
 	}
 });

 router.put('/:id', async (req, res, next) => {
 	try{
		 const ID = req.params.id;
		 const name = req.body.name;
 	const DB = await db.Users.PutUsers(ID, name);
	 res.json(DB);
 	}catch(error){
 		console.log(error);
 		res.sendStatus(error);
 	}
 });

 

export default router