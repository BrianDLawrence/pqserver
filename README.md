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

```


## API

### totalQuestions
  
Returns the total number of questions stored in the Powerful Questions database

### getLastQuestion

Returns the last question saved to the Powerful Questions database

### getQuestionsByCoachingModel(coachingModel:GROW or TOMS, limit:n) 

Returns an array of questions by the coachingModel - coachingModel is an ENUM that can be either GROW or TOMS
optional limit - default is set to 100

### getQuestionsByQuestionType(questionType:[Goal,Reality,Options,Will,Topic,Outcome,Meaning,Success], limit:n) 

Returns an array of questions by the coaching Type. The questionType is ENUM that can be any of the above values
optional limit - default is set to 100

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


