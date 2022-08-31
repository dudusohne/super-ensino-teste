interface Button {
    name: string;
    click?: () => void;
}

export function QuestionButton({ name, click }: Button) {
    return (
        <button onClick={click} className="button-comp" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            border: '2px solid #38d0fc',
            maxWidth: '30rem',
            padding: '5px 38px 5px 38px',
            marginLeft: '1rem',
            marginTop: '5px',
            background: 'none'
        }}>
            <span style={{
                fontSize: '1rem',
                fontWeight: 'medium'
            }}>{name}</span>
        </button>
    )
}