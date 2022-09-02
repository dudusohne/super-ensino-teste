import React from 'react'

import { Answer } from '../../types';

import './answerButton.scss';

interface Props extends Answer {
    isActive?: boolean;
    onClickAnswer?: () => void;
}

const options = ['a', 'b', 'c', 'd']

export function AnswerButton({ isActive, answer, onClickAnswer, index }: Props) {
    return (
        <button
            className="answerButton"
            onClick={onClickAnswer}>
            <div className="answer-letter-wrapper" style={{ backgroundColor: `${isActive ? '#38d0fc' : '#cfcfcf'}`, }}>
                <p style={{ color: `${isActive ? '#07333f' : '#7a7a7a'}`, }}>
                    {options[index]}
                </p>
            </div>
            <span>{answer}</span>
        </button>
    )
}