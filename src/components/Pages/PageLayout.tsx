import React from 'react';
import '../../../src/App.css';
import { About } from './GetPollsPage/About';
import {CreatePollPage} from './CreatePollPage/CreatePollPage';
import { FAQ } from './FAQPage/FAQ';
import { HomePage } from './HomePage/HomePage';
export interface PageLayoutProps {
    page: number,
    question: string;
    answers: string[];
    multiple_answer: boolean;
    setAnswers: React.Dispatch<React.SetStateAction<string[]>> //todo: ???
    setQuestion: React.Dispatch<React.SetStateAction<string>> //todo: ???
}
export const PageLayout: React.FC<PageLayoutProps> = ({
    page,
    question,
    answers,
    multiple_answer,
    setAnswers,
    setQuestion,
}) => {

    switch(page) {
        case 0:
            return <HomePage />
        case 1:
            return <CreatePollPage question={question} answers={answers} multiple_answer={multiple_answer} setAnswers={setAnswers} setQuestion={setQuestion} />
        case 2:
            return <About />
        case 3:
            return <FAQ />
        default:
            return null;            

    }
}