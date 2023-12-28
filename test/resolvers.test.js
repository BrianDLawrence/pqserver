import resolvers from '../resolvers/resolvers.js';

describe('Resolvers', () => {
    describe('Query', () => {
        test('totalQuestions returns the correct value', () => {
            // Mock any necessary context or arguments if your resolver requires them
            const args = {}; // Example, adjust as needed
            const context = {}; // Example, adjust as needed

            // Call the resolver
            const result = resolvers.Query.totalQuestions(null, args, context);

            // Check the result
            expect(result).toBe("10"); // Adjust the expected value based on your resolver logic
        });
    });
});
