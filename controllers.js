const mongoose = require('mongoose')
const model = require('./model.js') 
const controller = {
	createPerson: ()=>{
	const create =	new Person({name: 'robert'})	
	return create	
	}
}
