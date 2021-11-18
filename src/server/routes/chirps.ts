import * as express from 'express';
import db from '../db';


const router = express.Router();

router.get('/', async (req, res) => {
	try {
		res.json(await db.Chirps.allChirps());
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});



router.get('/:id', async (req, res, next) => {
	try {
		const ID = req.params.id;
		const dbRes = await db.Chirps.One(ID);

		res.send(dbRes);
	} catch (error) {
		console.log(error);

		res.send(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const userid = req.body.userid;
		const content = req.body.content;
		const dbRes = await db.Chirps.PostChirps(userid, content);
		res.send(dbRes);
	} catch (error) {
		console.log(error);

		res.send(error);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const location = req.body.location;
		const content = req.body.content;
		const DB = await db.Chirps.EditChirps(location, content);
		res.send(DB);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

router.delete('/:id', async (req, res) => {
	let ID = req.params.id;
	try {
		res.json(await db.Chirps.DeleteChirps(ID));
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

export default router;