import mongoose from 'mongoose';

mongoose
	.connect('mongodb://localhost/practica1')
	.then((db) => console.log('DB is connected'))
	.catch((err) => console.error(err));
