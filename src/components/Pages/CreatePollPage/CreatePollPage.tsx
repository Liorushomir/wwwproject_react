import React from 'react';
import '../../../../src/App.css';

// export interface AmigosPageProps {
//     characters: Character[];
//     setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
// }

export interface CreatePollPageProps{
    question: string;
    answers: string[];
    multiple_answer: boolean;
    setAnswers: React.Dispatch<React.SetStateAction<string[]>> //todo: ???
    setQuestion: React.Dispatch<React.SetStateAction<string>> //todo: ???
}

export const CreatePollPage: React.FC<CreatePollPageProps> = ({
                                                                  question,
                                                                  answers,
                                                                  multiple_answer,
                                                                  setAnswers,
                                                                  setQuestion
                                                              }) =>{
    const [currentInput, setCurrentInput] = React.useState<string>('');

    const addQuestion = () => {
        if (currentInput === '') {
            //todo: add validation and security to this
            alert('Please input an answer!');
            return;
        }
        setQuestion(currentInput);
    }

    const addAnswer = () => {
        if (currentInput === '') {
            //todo: add validation and security to this
            alert('Please input an answer!');
            return;
        }
        const answer_list = [...answers, currentInput];
        setAnswers(answer_list);
    }



    const SendPoll = () => {

    }


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{{
        // What is the problem with this approach? Read about debouncing.
        e.preventDefault();
        setCurrentInput(e.target.value); // Hint <- this is the problem. think about state and re-rendering.
    }}




    return (
        <>
            <h2> Create a New Poll</h2>
            <div className='page-container'>
                <div className='Question'>
                    <input onChange={handleInputChange} />
                    <button className='add-button' onClick={addQuestion}> + </button>
                </div>
                <div className='Answers'>
                    <input onChange={handleInputChange} />
                    <button className='add-button' onClick={addAnswer}> + </button>
                </div>
                <div>
                    <button className='add-button' onClick={SendPoll}> Send </button>
                </div>
            </div>
        </>
    );
}

