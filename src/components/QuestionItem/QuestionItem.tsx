import './questionItem.scss';

interface Props {
    question: string;
}

export function QuestionItem({ question }: Props) {
    return (
        <span className="question">{question}</span>
    )
}