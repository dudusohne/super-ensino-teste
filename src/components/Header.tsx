import { useState } from 'react';
import { TiDocumentText } from 'react-icons/ti'
import { FaChevronCircleUp } from 'react-icons/fa'

import { QuestionButton } from './QuestionButton';

import '../styles/header.scss';

export function Header() {
    // const [questions, setQuestions] = useState<any>([])

    const questions = [
        {
            "name": "Exercício 1",
            "id": 1,
            "questions": [
                "Queria saber o por quê dessa confusão.",
                "",
                "Queria saber porque você faltou aula.",
                "Acordo cedo porque gosto de estudar"
            ],
            "answers": [
                { "a": "ll e lll" },
                { "b": "apenas a l" },
                { "c": "l, ll e lll" },
                { "d": "apenas a lll" }
            ]
        },
        {
            "name": "Exercício 2",
            "id": 2,
            "questions": [
                "Queria saber o por quê dessa confusão.",
                "",
                "Queria saber porque você faltou aula.",
                "Acordo cedo porque gosto de estudar"
            ],
            "answers": [
                { "a": "apenas a l" },
                { "b": "apenas a l" },
                { "c": "apenas a l" },
                { "d": "apenas a l" }
            ]
        }
    ]

    return (
        <div className="header" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f6fcfe'
        }}>
            <div className="top" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: '8vh'
            }}>
                <span style={{
                    fontWeight: 'bold',
                }}>Acentuação Gráfica</span>
                <FaChevronCircleUp />
            </div>
            <div className="title" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: '100%',
                height: ' 5vh'
            }}>
                <TiDocumentText />
                <span style={{
                    fontWeight: 'bold',
                }}>Uso dos Porquês</span>
            </div>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%'
            }}>
                {questions.map((question: any) => {
                    return <QuestionButton name={question.name} />
                })}
            </div>
        </div >
    )
}