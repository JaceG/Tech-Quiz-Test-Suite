import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';
import questionData from './pythonQuestions.json' assert { type: 'json' };

async function seed() {
	try {
		await db();
		await cleanDB();

		// Log the data being inserted
		console.log(
			'Inserting questions:',
			JSON.stringify(questionData, null, 2)
		);

		const questions = await Question.insertMany(questionData);
		console.log(`Successfully seeded ${questions.length} questions`);

		process.exit(0);
	} catch (error) {
		console.error('Error seeding database:', error);
		process.exit(1);
	}
}

seed();
