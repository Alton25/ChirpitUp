import * as mysql from 'mysql';
import config from '../config';
import Chirps from './queries/chirps'
import Users from './queries/users'

const Connection = mysql.createPool(config.mysql);

export const Query = (query: string, values?: Array<string | number >) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export default {
  Chirps, Users
}