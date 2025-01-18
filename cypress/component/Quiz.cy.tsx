import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
	beforeEach(() => {
		cy.intercept('GET', '/api/questions/random', {
			body: [
				{
					_id: '1',
					question: 'Test Question',
					answers: [
						{ text: 'Answer 1', isCorrect: false },
						{ text: 'Answer 2', isCorrect: true },
					],
				},
			],
		}).as('getQuestions');
	});

	it('shows initial start button', () => {
		cy.mount(<Quiz />);
		cy.get('button').contains('Start Quiz').should('exist');
	});

	it('shows questions after starting quiz', () => {
		cy.mount(<Quiz />);
		cy.get('button').contains('Start Quiz').click();
		cy.wait('@getQuestions');

		// Check for question content
		cy.get('.card').should('exist');
		cy.get('h2').should('contain', 'Test Question');
		cy.get('.btn-primary').should('have.length', 2);
	});
});
