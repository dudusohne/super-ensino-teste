import React from 'react'
import { Question } from '../../types';

import './questionButton.scss'

interface Button extends Question {
    click?: () => void;
    active?: boolean;
}

export function QuestionButton({ name, click, active }: Button) {
    return (
        <button onClick={click} className="button-comp" style={{ backgroundColor: `${!!active ? '#38d0fc' : '#fff'}`, }}>
            <span style={{ fontSize: '1rem', fontWeight: 'medium', color: '#313131' }}>{name}</span>
        </button>
    )
}