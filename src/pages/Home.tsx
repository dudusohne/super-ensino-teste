import { useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { AnswerButton } from "../components/AnswerButton";
import { QuestionButton } from "../components/QuestionButton";

export const answerCharIndex = ['a', 'b', 'c', 'd'];

export function Home() {
    const [questionToShow, setQuestionToShow] = useState<any>()
    const [active, setActive] = useState<string>()

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
                        return <QuestionButton name={question.name} click={() => handleQuestionSelect(question)} key={question.id} />
                    })}
                </div>
            </div >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                {questionToShow ?
                    <>
                        <span style={{
                            marginTop: '10px',
                            color: '#38d0fc'
                        }}>Exercício {questionToShow?.id + `/11`}</span>
                        <span>(SUPER ENSINO) Analise as afirmativas a seguir:</span>
                        {questionToShow?.questions?.map((quest: any) => {
                            return <span key={quest} style={{
                                marginTop: '1rem'
                            }}>{quest}</span>
                        })}
                        <span style={{
                            marginTop: '1rem'
                        }}>Com relação ao uso dos porquês, estão corretas:</span>
                        <div style={{ marginTop: '1.3rem' }}>
                            {questionToShow?.answers?.map((answer: any) => {
                                return (
                                    <AnswerButton isActive={active === answer} answer={answer} onClickAnswer={() => setActive(answer)} />
                                )
                            })}
                        </div>
                    </> : <span>SELECIONE UMA QUESTÃO!</span>
                }
            </div>
        </>
    )
}