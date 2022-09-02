import { useEffect, useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

import { AnswerButton } from "../components/AnswerButton";
import { Header } from "../components/Header";
import { QuestionButton } from "../components/QuestionButton";
import { QuestionItem } from "../components/QuestionItem";

export const answerCharIndex = ['a', 'b', 'c', 'd'];

import '../styles/home.scss';

const jsonData = [
    {
        "name": "Exercício 1",
        "id": 1,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["ll e lll", "apenas a l", "l, ll e lll", "apenas a lll"]
    },
    {
        "name": "Exercício 2",
        "id": 2,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    },
    {
        "name": "Exercício 3",
        "id": 3,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    },
    {
        "name": "Exercício 4",
        "id": 4,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    },
    {
        "name": "Exercício 5",
        "id": 5,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    },
    {
        "name": "Exercício 6",
        "id": 6,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    },
    {
        "name": "Exercício 7",
        "id": 7,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    },
    {
        "name": "Exercício 8",
        "id": 8,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    },
    {
        "name": "Exercício 9",
        "id": 9,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    },
    {
        "name": "Exercício 10",
        "id": 10,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    },
    {
        "name": "Exercício 11",
        "id": 11,
        "questions": [
            "l - Queria saber o por quê dessa confusão.",
            "ll - Queria saber porque você faltou aula.",
            "lll - Acordo cedo porque gosto de estudar"
        ],
        "answers": ["l, ll e lll", "ll e lll", "apenas a lll", "apenas a l"]
    }
]

export function Home() {
    const [questionToShow, setQuestionToShow] = useState<any>()
    const [activeAnswer, setActiveAnswer] = useState<string>()

    const [closeHeader, setCloseHeader] = useState<boolean>(false)

    const [questions, setQuestions] = useState<any>()

    const getData = () => {
        setQuestions(jsonData);
    }

    useEffect(() => {
        getData()
    }, [])

    function handleQuestionSelect(question: any) {
        setActiveAnswer('')
        setQuestionToShow(question)
    }

    function handleNextQuestion() {
        setActiveAnswer('')

        if (questionToShow?.id === questions.length) {
            setQuestionToShow(questions[0])
        } else {
            setQuestionToShow(questions[questionToShow?.id])
        }
    }

    function handlePrevQuestion() {
        setActiveAnswer('')

        if (questionToShow?.id === questions[0].id) {
            let size = questions.length - 1
            setQuestionToShow(questions[size])
        } else {
            setQuestionToShow(questions[questionToShow?.id - 2])
        }
    }

    return (
        <>
            <Header onClickClose={() => setCloseHeader(true)} close={closeHeader}>
                {questions?.map((question: any) => {
                    return <QuestionButton name={question.name} click={() => handleQuestionSelect(question)} key={question.id} active={questionToShow?.id === question.id} />
                })}
            </Header>
            {closeHeader &&
                <div className="container-closed">
                    <FaChevronCircleDown className="chevron-down" onClick={() => setCloseHeader(false)} />
                </div>
            }
            <div className="container-answers">
                {questionToShow ?
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MdArrowBackIos className="nav-icons" onClick={() => handlePrevQuestion()} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <span style={{ color: '#cccccc', fontWeight: 'bold' }}>(1762)</span>
                                <span style={{ color: '#38d0fc', fontWeight: 'bold', marginLeft: '8px' }}>Exercício {questionToShow?.id + `/${questions.length}`}</span>
                            </div>

                            <span style={{ marginTop: '6px', fontWeight: 'bold', fontSize: '16px', color: '#4e4e4e' }}>(SUPER ENSINO) Analise as afirmativas a seguir:</span>

                            {questionToShow?.questions?.map((quest: any) => {
                                return <QuestionItem question={quest} key={quest} />
                            })}

                            <span style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '16px', color: '#4e4e4e' }}>Com relação ao uso dos porquês, estão corretas:</span>

                            <div className="answers">
                                {questionToShow?.answers?.map((answer: any, index: any) => {
                                    return (
                                        <AnswerButton isActive={activeAnswer === answer} answer={answer} onClickAnswer={() => setActiveAnswer(answer)} index={index} />
                                    )
                                })}
                            </div>
                        </div>
                        <MdArrowForwardIos className="nav-icons" onClick={() => handleNextQuestion()} />
                    </div> :
                    <div className="no-question-selected">
                        <p>NENHUM EXERCÍCIO SELECIONADO</p>
                        <span>SELECIONE UM EXERCÍCIO!</span>
                    </div>
                }
            </div>
        </>
    )
}