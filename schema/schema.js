import { gql } from "apollo-server-express";

const typeDefs = gql`
type Query {
    totalQuestions: Int!
}`;

export default typeDefs;
