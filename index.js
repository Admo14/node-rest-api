const express = require('express');
const mongoose = require('mongoose');
const app = express();
const schema = new mongoose.Schema({
	name: String
}, {collection: 'person'})

const Person = mongoose.model('Person', schema)

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/test3', {useNewUrlParser: true, useUnifiedTopology: true});
app.get('/people',  (req,res)=>{
 Person.find({}).then((data)=>res.send({data}))
})
app.post('/people', (req,res)=>{
new Person({name: req.body.name}).save().then(()=>{
	res.send({message: 'new person created succesfully'})
}).catch((err)=>res.send({error: err}))
})

app.listen(3000, ()=>console.log('server listening on: http://localhost:3000'))
