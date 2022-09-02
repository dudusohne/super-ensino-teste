import React from 'react'

import './answerButton.scss';

interface Props {
    isActive?: boolean;
    answer: string;
    onClickAnswer?: () => void;
    index?: any;
}

const letters = ['a', 'b', 'c', 'd']

export function AnswerButton({isActive, answer, onClickAnswer, index}: Props) {
    return (
        <button
            className="answerButton"
            onClick={onClickAnswer}>
            <div className="answer-letter-wrapper" style={{ backgroundColor: `${isActive ? '#38d0fc' : '#cfcfcf'}`, }}>
                <p style={{ color: `${isActive ? '#07333f' : '#7a7a7a'}`, }}>
                    {letters[index]}
                </p>
            </div>
            <span>{answer}</span>
        </button>
    )
}