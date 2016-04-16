let argv = require('yargs').argv;

export default {
	port: 8000,

	mongodb: 'mongodb://' + (argv.db || 'localhost') + ':27017/task-scoreboard',

	session: {
		name: 'task-scoreboard-api-session',
		secret: 'task-scoreboard-api-secret'
	}
}
