import path from 'path';
import express from 'express';
import connectToDatabase from './databaseService';
import rootRouter from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectToDatabase();

const staticDir = path.resolve('public');
app.use(express.static(staticDir));

app.use('/', rootRouter);

const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
    console.log('Express server started on port: ' + port);
});
