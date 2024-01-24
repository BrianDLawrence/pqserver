// Import the module where the functions to be mocked are located
import * as questionsModel from '../model/questions.model.js';

// Import your resolvers
import resolvers from '../resolvers/resolvers.js';

// Jest mock functions
jest.mock('../model/questions.model.js');

describe('Resolvers', () => {

    // Save the original environment variables
    const originalEnv = process.env;

    beforeAll(() => {
        // Mock the environment variables
        process.env.MONGO_URI = 'mongodb://mockuri';
        process.env.MONGO_DB = 'mockdb';
    });

    afterAll(() => {
        // Restore the original environment variables
        process.env = originalEnv;
    });

    describe('Query', () => {
        test('totalQuestions returns the correct value', async () => {
            // Arrange
            const mockCount = 42;
            questionsModel.getTotalQuestions.mockResolvedValue(mockCount);

            // Act
            const result = await resolvers.Query.totalQuestions();

            // Assert
            expect(result).toBe(mockCount);
            expect(questionsModel.getTotalQuestions).toHaveBeenCalledTimes(1);
        });

        // ... other tests for getLastQuestion, getQuestionsByCoachingModel, etc.
    });

    describe('Mutation', () => {
        test('addQuestion adds a new question and returns it', async () => {
            // Arrange
            const input = { question: "New Question", coachingModel: "GROW", questionType: "Goal" };
            const expectedResponse = { ...input, _id: 'some-id' };
            questionsModel.addQuestion.mockResolvedValue(expectedResponse);

            // Act
            const result = await resolvers.Mutation.addQuestion(null, { input });

            // Assert
            expect(result).toEqual(expectedResponse);
            expect(questionsModel.addQuestion).toHaveBeenCalledWith(input);
            expect(questionsModel.addQuestion).toHaveBeenCalledTimes(1);
        });

        // ... other tests for addQuestion with different inputs, error cases, etc.
    });
});
