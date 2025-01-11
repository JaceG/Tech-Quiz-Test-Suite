import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
	beforeEach(() => {
		// Intercept API calls and return mock data
		cy.intercept('GET', '/api/questions/random', {
			fixture: 'questions.json',
		}).as('getQuestions');
	});

	it('renders loading state initially', () => {
		cy.mount(<Quiz />);
		cy.get('[role="status"]').should('exist');
		cy.get('.spinner-border').should('be.visible');
	});

	it('displays question and answers after loading', () => {
		cy.mount(<Quiz />);
		cy.wait('@getQuestions');

		// Verify question is displayed
		cy.get('h2').should('contain', 'What is the output of print(2 ** 3)?');

		// Verify all answers are present
		cy.get('.alert').should('have.length', 4);
		cy.get('.alert').first().should('contain', '6');
	});
});
