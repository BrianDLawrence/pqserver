import { gql } from "apollo-server-express";

const typeDefs = gql`

type Questions {
    question: String!
    coachingModel: COACHING_MODEL!
    questionType: QUESTION_TYPE!
}

enum COACHING_MODEL {
    TOMS
    GROW
}

enum QUESTION_TYPE {
    Topic
    Outcome
    Meaning
    Success
    Goal
    Reality
    Options
    Will
}


type Query {
    """
    The total amount of questions (documents) in the Questions collection of our Powerful Questions database.
    """
    totalQuestions: Int!
    """
    The last question that was added to the database
    """
    getLastQuestion: Questions
    """
    Gets questions by the coaching Model type with optional limit (default is 100)
    """
    getQuestionsByCoachingModel(coachingModel: COACHING_MODEL!, limit: Int): [Questions]
    """
    Gets questions by the coaching Question type with optional limit (default is 100)
    """
    getQuestionsByQuestionType(questionType: QUESTION_TYPE!, limit: Int): [Questions]
}

input AddQuestionInput {
    question: String!
    coachingModel: COACHING_MODEL!
    questionType: QUESTION_TYPE!
}

type Mutation {
    """
    Adds a new question to the database.
    """
    addQuestion(input: AddQuestionInput!): Questions
}

`;

export default typeDefs;
