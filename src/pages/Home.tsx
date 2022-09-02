import { useEffect, useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

import { AnswerButton } from "../components/AnswerButton";
import { Header } from "../components/Header";
import { QuestionButton } from "../components/QuestionButton";
import { QuestionItem } from "../components/QuestionItem";

import '../styles/home.scss';

import { Question } from "../types";

const jsonData: Question[] = [
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
    const [questionToShow, setQuestionToShow] = useState<Question>()
    const [activeAnswer, setActiveAnswer] = useState<string>()

    const [closeHeader, setCloseHeader] = useState<boolean>(false)

    const [questions, setQuestions] = useState<Question[]>([])

    const getData = () => {
        setQuestions(jsonData);
    }

    useEffect(() => {
        getData()
    }, [])

    function handleQuestionSelect(question: Question) {
        setActiveAnswer('')
        setQuestionToShow(question)
    }

    function handleNextQuestion() {
        setActiveAnswer('')

        if (questionToShow?.id === questions.length) {
            setQuestionToShow(questions[0])
        } else {
            const index = questionToShow?.id ?? 0
            setQuestionToShow(questions[index])
        }
    }

    function handlePrevQuestion() {
        setActiveAnswer('')

        if (questionToShow?.id === questions[0].id) {
            let size = questions.length - 1
            setQuestionToShow(questions[size])
        } else {
            let id = questionToShow?.id ?? 0
            let index = id - 2
            setQuestionToShow(questions[index])
        }
    }

    return (
        <>
            <Header onClickClose={() => setCloseHeader(true)} close={closeHeader}>
                {questions?.map((question: Question) => {
                    return <QuestionButton name={question?.name} click={() => handleQuestionSelect(question)} key={question.id} active={questionToShow?.id === question.id} />
                })}
            </Header>
            {closeHeader &&
                <div className="container-closed">
                    <FaChevronCircleDown className="chevron-down" onClick={() => setCloseHeader(false)} />
                </div>
            }
            <div className="container-answers">
                {questionToShow ?
                    <div className="container-wrapper">
                        <MdArrowBackIos className="nav-icons" onClick={() => handlePrevQuestion()} />
                        <div className="wrapper-questions">
                            <div className="container-title">
                                <span className="number">(1762)</span>
                                <span className="exerc">Exercício {questionToShow?.id + `/${questions?.length}`}</span>
                            </div>

                            <span className="questions-title">(SUPER ENSINO) Analise as afirmativas a seguir:</span>

                            {questionToShow?.questions?.map((quest: string) => {
                                return <QuestionItem question={quest} key={quest} />
                            })}

                            <span className="questions-title">Com relação ao uso dos porquês, estão corretas:</span>

                            <div className="answers">
                                {questionToShow?.answers?.map((answer: string, index: number) => {
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