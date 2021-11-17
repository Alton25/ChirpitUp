import { Query } from '../';


const all =async () => Query('SELECT * FROM users');
const DeleteUsers = async () => Query('DELETE FROM users WHERE id = "867"');
const PutUsers = async () => Query('UPDATE users SET password = "sD0J2260" WHERE id = "482"');
const PostUsers = async () => Query('INSERT INTO users (id, name, email, password) VALUES (190, "Shomari Louden", "londonLondon22@gmail.com", "GRU2DO")');

export default {
	all: all, 
	DeleteUsers: DeleteUsers, 
	PutUsers: PutUsers, 
	PostUsers: PostUsers
}