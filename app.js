import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

const app = express()
app.use(json())
app.use(morgan('dev'))
app.use(urlencoded({
    extended: true
}))

app.get('/', function(req, res) {
    res.send('Hello from Mrhauphan !!');
})

app.get('/employee-list', function(req, res) {
    const list = [
        {id: 0, name: 'phan van hau'},
        {id: 1, name: 'phan van nhon'},
        {id: 2, name: 'nguyen thuy kieu'},
        {id: 3, name: 'phan van tho'},
    ]
    res.send(list);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
})

console.log('main branch perform some action here')