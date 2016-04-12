import mongoose from 'mongoose';

let tasks = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	score: { type: Number, required: true },
	creator: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
	doneby: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
	date: { type: Date },
});

export default mongoose.model('Tasks', tasks);
