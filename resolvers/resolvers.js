import { getTotalQuestions } from '../model/questions.model.js';

const resolvers = {
    Query: {
        totalQuestions: async () => {
            return await getTotalQuestions();
        },
    },
};

export default resolvers;