import { MongoClient } from 'mongodb';

const config = process.env;

if (!(config.MONGO_URI && config.MONGO_DB)) {
    console.error("UNDEFINED RUNTIME CONFIGURATION - NO MONGODB ENV VARIABLES")
    throw new Error("UNDEFINED RUNTIME CONFIGURATION - NO MONGODB ENV VARIABLES");
}

const client = new MongoClient(config.MONGO_URI, {
    serverApi: {
        version: '1', // MongoDB server API version
        strict: true,
        deprecationErrors: true,
    }
});

async function getTotalQuestions() {
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

export { getTotalQuestions, getLastQuestion, getQuestionsByCoachingModel, getQuestionsByQuestionType };



