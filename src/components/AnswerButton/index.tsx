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