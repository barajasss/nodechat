var MongoClient = require('mongodb').MongoClient;

//mongodb configs

const url = 'mongodb://localhost:27017/';
const dbName = 'myproject';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function(err){
	if(err){
		console.log("There is some error");
	}
	else{
		console.log("Connect successfully");
		const db = client.db(dbName);
		const collection = db.collection('mycollection');
		collection.insert({name: "Baraja", class: "BSc"}, function(err, result){
			if(err)
				console.log(err);
			else
				console.log(result);
		})
		client.close();
	}

})


