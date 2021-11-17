import * as express from 'express';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import config from './config';
import * as path from 'path';
import apiRouter from './routes/index'

const app = express();
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', apiRouter)
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.listen(config.port, () => console.log(`Server listening on port: ${config.port}`));
