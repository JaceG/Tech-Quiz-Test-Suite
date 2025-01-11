describe('Quiz E2E', () => {
	beforeEach(() => {
		cy.visit('/');
		// Intercept API calls and return mock data
		cy.intercept('GET', '/api/questions/random', {
			fixture: 'questions.json',
		}).as('getQuestions');
	});

	it('completes a full quiz flow', () => {
		// Wait for questions to load
		cy.wait('@getQuestions');

		// Verify initial question is displayed
		cy.get('h2').should('contain', 'What is the output of print(2 ** 3)?');

		// Click an answer
		cy.get('.btn-primary').first().click();

		// Verify quiz completion screen
		cy.get('h2').should('contain', 'Quiz Completed');
		cy.get('.alert-success').should('exist');
		cy.get('.alert-success').should('contain', '/1');

		// Verify new quiz can be started
		cy.get('button').contains('Take New Quiz').should('exist');
		cy.get('button').contains('Take New Quiz').click();

		// Verify new quiz loads
		cy.get('h2').should('contain', 'What is the output of print(2 ** 3)?');
	});
});
