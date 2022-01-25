import express from 'express';

const app = express();

app.use('/', (_req, res) => {
	res.status(200).json({ uptime: process.uptime() });
});

app.listen(4004, () => {
	console.log('Running at localhost:4004');
});
