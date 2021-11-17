import * as express from 'express';
import db from '../db';
const router = express.Router();

router.get('/', async (req, res) => {
	try{
		console.log("test")
	res.json(await db.Users.all());
		// res.send("test")
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
	});

 router.post('/', async(req, res) => {
	try{
 		res.json(await db.Users.PostUsers());
 	}catch(e){
 		console.log(e);
		res.sendStatus(500);
 	}
 });

 router.put('/:id', async (req, res) => {
 	try{
 		res.json(await db.Users.PutUsers());
 	}catch(e){
 		console.log(e);
 		res.sendStatus(500);
 	}
 });

 router.delete('/:id', async (req, res) => {
	 let id = req.params.id;
	 try{
		 res.json(await db.Users.DeleteUsers());
	 }catch(e){
		 console.log(e);
		 res.sendStatus(500);
	 }
 });

export default router