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

onsole.log('main branch perform some action here')


console.log('this is the first commit after more than 5 months')
console.log('change border radius')
console.log('i want to create another commit')
console.log('colour should be black')
console.log('dont need it anymore')
console.log('it should be fine')

console.log('main is good branch')
console.log('king of branch')
console.log('master can do')
console.log('fishes')
console.log('master - shrimp')
console.log('hehe')
