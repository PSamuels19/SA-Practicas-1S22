import mongoose from "mongoose";

mongoose
    .connect('mongodb+srv://practica1:sa1111@cluster0.bqh7x.mongodb.net/SA-Practica1?retryWrites=true&w=majority')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

