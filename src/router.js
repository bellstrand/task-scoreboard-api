import {Router} from 'express';
import {auth, admin} from './middleware/auth';
import login from './api/login';
import users from './api/users';
import tasks from './api/tasks';


export default function() {
	let api = Router();

	api.use('/api/', login());

	api.use('/api/users', users());
	api.use('/api/tasks', auth, tasks());

	api.get('/api', (req, res) => {
		res.json({
			version: '0.1'
		});
	});

	return api;
}
