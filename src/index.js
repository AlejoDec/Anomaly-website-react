import express from 'express';
import morgan from 'morgan';
import { join,dirname} from 'path'
import {fileURLToPath} from 'url'
import { engine } from 'express-handlebars';


//INITIALIZATION
const app = express();
const __dirmname = dirname(fileURLToPath(import.meta.url));
//SETTINGS
app.set('port', process.env.PORT || 5511); 
app.engine('.hbs', engine({ 
    defaultLayout: 'main', 
    layoutsDir: join(app.get('views'), 'layouts'), 
    partialsDir: join(app.get('views'), 'partials'), 
    extname: '.hbs' 
}));
app.set('view engine', '.hbs');
//MIDDELWARE
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//ROUTES
app.get('/',(req,res)=>{
        res.json({"message": "hola"});  
});
//PUBLIC FILES
app.use(express.static(join(__dirmname, 'public')));
//RUN SERVER 
app.listen(app.get('port'),()=>
    console.log(`Server running on port ${app.get('port')}`));