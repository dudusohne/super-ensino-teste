import { answerCharIndex } from '../pages/Home'

interface Props {
    isActive?: boolean;
    answer: string;
    onClickAnswer?: () => void;
}

export function AnswerButton(props: Props) {
    return (
        <button
            onClick={props.onClickAnswer}
            style={{
                display: 'flex',
                flexDirection: 'row',
                background: 'none',
                border: 'none',
            }}>
            <div style={{
                padding: '6px',
                backgroundColor: `${props.isActive ? 'blue' : 'gray'}`,
                borderRadius: '3px'
            }}>
                a
            </div>
            <span>{props.answer}</span>
        </button>
    )
}