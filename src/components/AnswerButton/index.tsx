import React from 'react'

import './answerButton.scss';

interface Props {
    isActive?: boolean;
    answer: string;
    onClickAnswer?: () => void;
}

export function AnswerButton(props: Props) {
    return (
        <button
            className="answerButton"
            onClick={props.onClickAnswer}>
            <div className="answer-letter-wrapper" style={{ backgroundColor: `${props.isActive ? '#38d0fc' : '#cfcfcf'}`, }}>
                <p style={{ color: `${props.isActive ? '#07333f' : '#7a7a7a'}`, }}>a</p>
            </div>
            <span>{props.answer}</span>
        </button>
    )
}