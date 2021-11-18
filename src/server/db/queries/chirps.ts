import { Query } from '../';

const allChirps =async () => Query('SELECT * FROM chirps');
const One = async (id:string) => Query("SELECT chirps.id, chirps.content, chirps._created, chirps.location FROM chirps JOIN users on chirps.userid = users.id WHERE chirps.id = ?", [id]);
const DeleteChirps = async (id:string) => Query('DELETE FROM chirps WHERE id = "942"');
const EditChirps = async (location:string, content:string) => Query('UPDATE chirps SET content = "What UP FOOL" where location = "Fort Knox"');
const PostChirps = async (userid:string, content:string) => Query('INSERT INTO chirps ( userid, content, location) VALUES (11, "thank you lord for waking me up this morning", "South Carolina")');
export default {
	allChirps,
	One,
	DeleteChirps,
	EditChirps,
	PostChirps
}