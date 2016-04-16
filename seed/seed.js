import MongooseSeed from 'mongoose-seed-db';
import config from '../src/config/config';

MongooseSeed.connect(config.mongodb).then(() => {
	MongooseSeed.loadModels(__dirname + '/../src/models');
	MongooseSeed.clearAll().then(() => {
		MongooseSeed.populate(__dirname + '/data').then(() => {
			process.exit();
		});
	});
});
