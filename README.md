# GraphQL Server - for Powerful-questions.com

This is graphQL server that is designed to pull from the powerful-questions.com database.<br> 
Currently hosted on vercel here: https://pqserver.vercel.app/

## EXAMPLES
```gql

    query {
        totalQuestions
    }

    query {
        getLastQuestion {
            question
            coachingModel
            questionType
        }
    }

    query {
        getQuestionsByCoachingModel(coachingModel:GROW, limit:2) {
            question
            coachingModel
            questionType
        }
    }

    query Query {
        getQuestionsByQuestionType(questionType: Outcome) {
        coachingModel
        question
        }
    }

    mutation AddNewQuestion {
        addQuestion(input: {
            question: "What steps will you take to reach your goal?",
            coachingModel: GROW,
            questionType: Goal
        }) {
            question
            coachingModel
            questionType
        }
    }

```

## API - QUERIES

### totalQuestions: Int!
  
Returns the total number of questions stored in the Powerful Questions database

### getLastQuestion: Questions

Returns the last question saved to the Powerful Questions database

### getQuestionsByCoachingModel(coachingModel: COACHING_MODEL!, limit: Int): [Questions]

Returns an array of Questions by the coachingModel
optional limit - default is set to 100

### getQuestionsByQuestionType(questionType: QUESTION_TYPE!, limit: Int): [Questions]

Returns an array of Questions by the coaching Type. 
optional limit - default is set to 100

## API - MUTATIONS

###  addQuestion(input: AddQuestionInput!): Questions

Add a one question to the database and returns that Question

### INPUT & RESULT TYPES + ENUMS
```gql
    type Questions {
        question: String!
        coachingModel: COACHING_MODEL!
        questionType: QUESTION_TYPE!
    }

    input AddQuestionInput {
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
```
## License

The MIT License (MIT)

Copyright &copy; 2024 Spero Autem LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


