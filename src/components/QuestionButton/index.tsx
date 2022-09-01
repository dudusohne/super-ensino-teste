import './questionButton.scss'

interface Button {
    name: string;
    click?: () => void;
}

export function QuestionButton({ name, click }: Button) {
    return (
        <button onClick={click} className="button-comp">
            <span style={{
                fontSize: '1rem',
                fontWeight: 'medium'
            }}>{name}</span>
        </button>
    )
}