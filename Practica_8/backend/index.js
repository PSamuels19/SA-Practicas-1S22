const express = require('express');
const app = express();
const controller = require('./controller/index.controller')

let counter = 0

app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'Get request successful', value: counter });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.post('/', (req, res) => {
    try {
        controller.addCounter(counter, (value) => {
            counter = value
            res.status(200).json({ message: 'Post request successful', value: value });
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});