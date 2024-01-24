import { getTotalQuestions, getLastQuestion, getQuestionsByCoachingModel, getQuestionsByQuestionType, addQuestion } from '../model/questions.model.js';

const resolvers = {
    Query: {
        totalQuestions: async () => {
            return await getTotalQuestions();
        },
        getLastQuestion: async () => {
            const question = await getLastQuestion()
            return question
        },
        getQuestionsByCoachingModel: async (parent, args) => {
            const questions = await getQuestionsByCoachingModel(args.coachingModel, args.limit)
            return questions;
        },
        getQuestionsByQuestionType: async (parent, args) => {
            const questions = await getQuestionsByQuestionType(args.questionType, args.limit)
            return questions;
        },
    },
    Mutation: {
        addQuestion: async (parent, args) => {
            const result = await addQuestion(args.input)
            return result;
        },
    }
};

export default resolvers;