import './questionItem.scss';

interface Props {
    question: string;
}

export function QuestionItem(props: Props) {
    return (
        <span className="question">{props.question}</span>
    )
}