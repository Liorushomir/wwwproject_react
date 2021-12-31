import React from 'react';
import '../../../static/css/App.css';

export interface answerCardProps {
    answer: string,
}

export const answerCard: React.FC<answerCardProps> = ({
                                                                answer,
                                                            }) => {

    return (
        <div className='answer-card'>
            <h4> {answer} </h4>
            </div>
    );
}