import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


///////////////all the routers i am importing /////////////////
import signup_router from './routes/signup_route.js';
import notes_router from './routes/notes_routes.js';
import login_router from './routes/login_route.js';
/////////////////////////////////////////////////////////////

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(signup_router);
app.use(notes_router);
app.use(login_router);

app.listen(port,()=>{
    console.log(`app is started on port no ${port}`);
})