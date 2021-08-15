import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const staticDir = path.resolve('public');
app.use(express.static(staticDir));

const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
    console.log('Express server started on port: ' + port);
});
