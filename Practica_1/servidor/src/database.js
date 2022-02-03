// const {MongoClient} = require('mongodb');

// async function main() {
// 	// The Magic is Here
// 	const uri = "mongodb+srv://practica1:sa1111@cluster0.bqh7x.mongodb.net/SA-Practica1?retryWrites=true&w=majority";
// 	const client = new MongoClient(uri);

// 	try {
// 		await client.connect();

// 		await listDatabases(client);
// /*
// 		await createOrder(client, {
// 			cliente: "Cash Luna",
// 			pedido: "2 Ravioles de Pollo",
// 			restaurante: "Marbella"
// 		}) */

// 	} catch (e) {
// 		console.error(e);
// 	} finally {
// 		await client.close();
// 	}
// }

// main().catch(console.error);

// async function createOrder(client, newOrder) {
// 	const result = await client.db("SA-Practica1").collection("Ordenes").insertOne(newOrder);

// 	console.log(`Nueva Orden Ingresada #${result.insertedId}`);
// }

// async function listDatabases(client) {
// 	const databasesList = await client.db().admin().listDatabases();
// 	console.log("Bases de Datos:");
// 	databasesList.databases.forEach(db => {
// 		console.log(`- ${db.name}`);
// 	});
// }