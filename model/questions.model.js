import { MongoClient } from 'mongodb';

let client;
let config;

async function initializeDbConnection() {
    config = process.env;
    if (!(config.MONGO_URI && config.MONGO_DB)) {
        console.error("UNDEFINED RUNTIME CONFIGURATION - NO MONGODB ENV VARIABLES")
        throw new Error("UNDEFINED RUNTIME CONFIGURATION - NO MONGODB ENV VARIABLES");
    }

    client = new MongoClient(config.MONGO_URI, {
        serverApi: {
            version: '1', // MongoDB server API version
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
}

async function getTotalQuestions() {
    if (!client) {
        await initializeDbConnection();
    }
    try {
        await client.connect();
        const db = client.db(config.MONGO_DB);
        const collection = db.collection("Questions");

        const count = await collection.countDocuments();
        return count;
    } finally {
        await client.close();
    }
}

async function getLastQuestion() {
    if (!client) {
        await initializeDbConnection();
    }
    try {
        await client.connect();
        const db = client.db(config.MONGO_DB);
        const collection = db.collection("Questions");

        const latestQuestion = await collection.findOne({}, { sort: { '_id': -1 } });
        return latestQuestion;
    } finally {
        await client.close();
    }
}

async function getQuestionsByCoachingModel(coachingModel, limit) {
    if (!client) {
        await initializeDbConnection();
    }
    try {
        await client.connect();
        const db = client.db(config.MONGO_DB);
        const collection = db.collection("Questions");

        let filterLimit = 100;
        // Apply the limit if it's provided
        if (typeof limit === 'number') {
            filterLimit = limit;
        }

        const query = { coachingModel: coachingModel };
        const matchingQuestions = await collection.find(query).limit(filterLimit).toArray();
        return matchingQuestions;
    } finally {
        await client.close();
    }
}

async function getQuestionsByQuestionType(questionType, limit) {
    if (!client) {
        await initializeDbConnection();
    }
    try {
        await client.connect();
        const db = client.db(config.MONGO_DB);
        const collection = db.collection("Questions");

        let filterLimit = 100;
        // Apply the limit if it's provided
        if (typeof limit === 'number') {
            filterLimit = limit;
        }

        const query = { questionType: questionType };
        const matchingQuestions = await collection.find(query).limit(filterLimit).toArray();
        return matchingQuestions;
    } finally {
        await client.close();
    }
}

async function addQuestion(input) {
    if (!client) {
        await initializeDbConnection();
    }
    try {
        await client.connect();
        const db = client.db(config.MONGO_DB);
        const collection = db.collection("Questions");

        const newQuestion = {
            question: input.question,
            coachingModel: input.coachingModel,
            questionType: input.questionType
        };

        const result = await collection.insertOne(newQuestion);

        if (result.acknowledged) {
            return {
                ...newQuestion,
                _id: result.insertedId
            };
        } else {
            throw new Error("Failed to add the question");
        }
    } finally {
        await client.close();
    }
}

export { getTotalQuestions, getLastQuestion, getQuestionsByCoachingModel, getQuestionsByQuestionType, addQuestion };



