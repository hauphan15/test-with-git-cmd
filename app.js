const express = require('express');
const morgan = require('morgan');

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({
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

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
})