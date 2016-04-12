import {Router} from 'express';
import {Tasks} from '../models/tasks';

export default function() {
	let api = Router();

	api.get('', (req, res) => {
		Tasks.find().then(tasks => {
			res.json(tasks);
		}).catch(error => {
			res.status(500).send(error);
		});
	});

	api.get('/:id', (req, res) => {
		Tasks.findOne({ _id: req.params.id }).then(task => {
			res.json(task);
		}).catch(error => {
			res.status(500).send(error);
		});
	});

	api.post('', (req, res) => {
		Tasks.create(req.body).then(task => {
			res.json(task);
		}).catch(error => {
			res.status(500).send(error);
		});
	});

	api.put('/:id', (req, res) => {
		Tasks.findOne({ _id: req.params.id }).then(task => {
			for(let prop in req.body) {
				task[prop] = req.body[prop];
			}
			task.save().then(() => {
				res.json(task);
			}).catch(error => {
				res.status(500).send(error);
			});
		}).catch(error => {
			res.status(500).send(error);
		});
	});

	api.delete('/:id', (req, res) => {
		Tasks.remove({ _id: req.params.id }).then(task => {
			res.json({ message: 'Successfully deleted' });
		}).catch(error => {
			res.status(500).send(error);
		});
	});

	return api;
}
