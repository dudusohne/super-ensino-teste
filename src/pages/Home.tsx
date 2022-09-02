import { useEffect, useState } from "react";
import { FaChevronCircleDown, FaChevronCircleLeft, FaChevronCircleRight, FaChevronCircleUp } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { TiDocumentText } from "react-icons/ti";
import { AnswerButton } from "../components/AnswerButton";
import { Header } from "../components/Header";
import { QuestionButton } from "../components/QuestionButton";
import { QuestionItem } from "../components/QuestionItem";

export const answerCharIndex = ['a', 'b', 'c', 'd'];

import '../styles/home.scss';

export function Home() {
    const [questionToShow, setQuestionToShow] = useState<any>()
    const [activeAnswer, setActiveAnswer] = useState<string>()

    const [closeHeader, setCloseHeader] = useState<boolean>(false)

    const [questions, setQuestions] = useState<any>()

    const getData = () => {
        fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setQuestions(myJson);
            });
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