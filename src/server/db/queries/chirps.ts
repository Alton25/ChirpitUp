import { Query } from '../';

const allChirps =async () => Query('SELECT * FROM chirps');
const DeleteChirps = async () => Query('DELETE FROM chirps WHERE id = "942"');
const EditChirps = async () => Query('UPDATE chirps SET content = "What UP FOOL" where location = "Fort Knox"');
const PostChirps = async () => Query('INSERT INTO chirps (id, userid, content, location) VALUES (3040, 100, "thank you lord for waking me up this morning", "South Carolina")');
export default {
	allChirps,
	DeleteChirps,
	EditChirps,
	PostChirps
}