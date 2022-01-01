import React, { MouseEvent } from 'react';
import '../../../static/css/App.css';


export const CreatePoll = () => {
    const [text, setText] = React.useState<string>('');
    const [answers, setAnswers] = React.useState<string[]>([]);

    const handleChangeText = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;
        setText(value);
        console.log("event---->", evt.target)
    }

    const addAnswer = (e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        console.log(e)
        const new_answer = ``;
        const answerList = [...answers, new_answer];

        setAnswers(answerList);
        console.log('current list ---->', answerList)
    }

    const handleSubmit = () =>{
        if (answers.length <=0){
            alert("You must have at least one option!")
        }
    }

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>,index: number) =>{
        answers[index]= e.target.value;
        console.log("answers--->", index, answers)
    }

    return  (
        <div className="create-poll-container">
            <form>
                <label>
                    Your Question:
                    <input type="text" name="question" value={text} onChange={handleChangeText}/>
                </label>
                <div className="answers-container">
                    {answers.length > 0?
                        <ol className='answer-text-container'>
                            {answers.map((answer) => (
                                <li key={answers.indexOf(answer)}>
                                    <input
                                        className="answer-text"
                                        onChange={(e) => handleAnswerChange(e, answers.indexOf(answer))}
                                    />
                                    {/*<button className="remove-button"> - </button>*/}
                                </li>
                            ))}
                        </ol>:
                        <h2> No answers yet </h2>
                    }
                </div>
                <button className='add-answer' onClick={addAnswer}> + </button>
                <button className='submit-poll-button' onClick={handleSubmit}> Submit! </button>
            </form>
        </div>
    );
}

// export const CreatePoll2 = () => {
//     const [answers, setAnswers] = React.useState<string[]>([]);
//     const [currentInput, setCurrentInput] = React.useState<string>('');
//
//     const addAnswer = () =>{
//         const answerList = [...answers, currentInput];
//
//         setAnswers(answerList);
//         console.log('current list ---->', answerList)
//     }
//
//     const submitPoll = () =>{
//         if (answers.length <=0){
//             alert("You must have at least one option!")
//         }
//     }
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         //todo: redo this one
//         // What is the problem with this approach? Read about debouncing.
//         e.preventDefault();
//         setCurrentInput(e.target.value); // Hint <- this is the problem. think about state and re-rendering.
//     }
//
//
//
//     return (
//         <>
//         <h2>Create a New Poll</h2>
//         <div className="create-poll-container">
//             Here you create a new poll
//             Your question:
//             <input className="create-poll-question" />
//             Your answers:
//             <div>
//                 <input className="create-poll-answer" onChange={handleInputChange} />
//                 <button className='add-answer' onClick={addAnswer}> + </button>
//             </div>
//             <div className="answers-container">
//                 {
//                     answers.length > 0?
//                         <ol className='answer-text-container'>
//                             {answers.map((answer) => (
//                                 <li >
//                                     <p className='answer-text'>{answer}</p>
//                                     <button className="remove-button"> - </button>
//                                 </li>
//                             ))}
//                         </ol>:
//                         // <answerCard key={answers.indexOf(answer)} answer={answer}/>
//                         <h2> No answers yet </h2>
//                 }
//             </div>
//             <button className='submit-poll-button' onClick={submitPoll}> Submit! </button>
//         </div>
//         </>
//     );
// }


