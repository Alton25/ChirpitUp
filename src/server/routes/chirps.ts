import * as express from 'express';
import db from '../db';
 

const router = express.Router();
router.get('/api/chirps', async (req, res) => {
	try{
	res.json(await db.Chirps.allChirps());
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
	});


	router.post('/', async(req, res) => {
		try{
			 res.json(await db.Chirps.PostChirps());
		 }catch(e){
			 console.log(e);
			res.sendStatus(500);
		 }
	 });
	
	 router.put('/:id', async (req, res) => {
		 try{
			 res.json(await db.Chirps.EditChirps());
		 }catch(e){
			 console.log(e);
			 res.sendStatus(500);
		 }
	 });
	
	 router.delete('/:id', async (req, res) => {
		 let id = req.params.id;
		 try{
			 res.json(await db.Chirps.DeleteChirps());
		 }catch(e){
			 console.log(e);
			 res.sendStatus(500);
		 }
	 });

export default router;