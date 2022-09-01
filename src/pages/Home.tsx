import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { AnswerButton } from "../components/AnswerButton";
import { Header } from "../components/Header";
import { QuestionButton } from "../components/QuestionButton";
import { QuestionItem } from "../components/QuestionItem";

export const answerCharIndex = ['a', 'b', 'c', 'd'];

import '../styles/home.scss';

export function Home() {
    const [questionToShow, setQuestionToShow] = useState<any>()
    const [active, setActive] = useState<string>()

    const [closeHeader, setCloseHeader] = useState<boolean>(false)

    const questions = [
        {
            "name": "Exercício 1",
            "id": 1,
            "questions": [
                "l - Queria saber o por quê dessa confusão.",
                "ll - Queria saber porque você faltou aula.",
                "lll - Acordo cedo porque gosto de estudar"
            ],
            "answers": [
                "ll e lll",
                "apenas a l",
                "l, ll e lll",
                "apenas a lll"
            ]
        },
        {
            "name": "Exercício 2",
            "id": 2,
            "questions": [
                "l - Queria saber o por quê dessa confusão.",
                "ll - Queria saber porque você faltou aula.",
                "lll - Acordo cedo porque gosto de estudar"
            ],
            "answers": [
                "l, ll e lll",
                "ll e lll",
                "apenas a lll",
                "apenas a l"
            ]
        },
        {
            "name": "Exercício 3",
            "id": 3,
            "questions": [
                "l - Queria saber o por quê dessa confusão.",
                "ll - Queria saber porque você faltou aula.",
                "lll - Acordo cedo porque gosto de estudar"
            ],
            "answers": [
                "l, ll e lll",
                "ll e lll",
                "apenas a lll",
                "apenas a l"
            ]
        },
        {
            "name": "Exercício 4",
            "id": 4,
            "questions": [
                "l - Queria saber o por quê dessa confusão.",
                "ll - Queria saber porque você faltou aula.",
                "lll - Acordo cedo porque gosto de estudar"
            ],
            "answers": [
                "l, ll e lll",
                "ll e lll",
                "apenas a lll",
                "apenas a l"
            ]
        },
        {
            "name": "Exercício 5",
            "id": 5,
            "questions": [
                "l - Queria saber o por quê dessa confusão.",
                "ll - Queria saber porque você faltou aula.",
                "lll - Acordo cedo porque gosto de estudar"
            ],
            "answers": [
                "l, ll e lll",
                "ll e lll",
                "apenas a lll",
                "apenas a l"
            ]
        }
    ]

    function handleQuestionSelect(question: any) {
        setActive('')
        setQuestionToShow(question)
    }

    return (
        <>
            <Header onClickClose={() => setCloseHeader(true)} close={closeHeader}>
                {questions.map((question: any) => {
                    return <QuestionButton name={question.name} click={() => handleQuestionSelect(question)} key={question.id} />
                })}
            </Header>
            {!!closeHeader ?
                <div className="container-closed">
                    <FaChevronCircleDown className="chevron-down" onClick={() => setCloseHeader(false)} />
                </div> : ''
            }
            <div className="container-answers">
                {questionToShow ?
                    <>
                        <span style={{ color: '#38d0fc' }}>Exercício {questionToShow?.id + `/11`}</span>

                        <span>(SUPER ENSINO) Analise as afirmativas a seguir:</span>

                        {questionToShow?.questions?.map((quest: any) => {
                            return <QuestionItem question={quest} key={quest} />
                        })}

                        <span style={{ marginTop: '1rem' }}>Com relação ao uso dos porquês, estão corretas:</span>

                        <div className="answers">
                            {questionToShow?.answers?.map((answer: any) => {
                                return (
                                    <AnswerButton isActive={active === answer} answer={answer} onClickAnswer={() => setActive(answer)} />
                                )
                            })}
                        </div>
                    </> :
                    <div className="noQuestionSelected">
                        <p>NENHUM EXERCÍCIO SELECIONADO</p>
                        <span>SELECIONE UM EXERCÍCIO!</span>
                    </div>
                }
            </div>
        </>
    )
}