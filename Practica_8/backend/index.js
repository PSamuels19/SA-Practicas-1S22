const express = require('express');
const cors = require('cors');
const app = express();
const controller = require('./controller/index.controller')

let counter = 0

const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

app.listen(port, () => {
    console.log(`Server up and running on port ${port}!`);
});