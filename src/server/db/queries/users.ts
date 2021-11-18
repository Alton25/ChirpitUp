import { Query } from '../';


const all =async () => Query('SELECT * FROM users');

const PutUsers = async (name:string, id:number) => Query('UPDATE users SET password = "sD0J2260" WHERE id = "482"');
const PostUsers = async (name:string, email:string) => Query('INSERT INTO users ( name, email, password) VALUES ( "Sierra Hawkins", "hogwarts@gmail.com", "DETROIT2MEM")');

export default {
	all: all,  
	PutUsers: PutUsers, 
	PostUsers: PostUsers
}