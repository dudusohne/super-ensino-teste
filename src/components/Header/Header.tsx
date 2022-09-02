import './header.scss'

import { FaChevronCircleUp } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';

interface Header {
    children: React.ReactNode;
    onClickClose: () => void;
    close: boolean
}

export function Header({ children, onClickClose, close }: Header) {
    return (
        <>
            {!close ?
                <div className="header">
                    <div className="top">
                        <span>Acentuação Gráfica</span>
                        <FaChevronCircleUp className="chevron" onClick={onClickClose} />
                    </div>
                    <div className="title">
                        <TiDocumentText size="20px" />
                        <span>Uso dos Porquês</span>
                    </div>
                    <div className="container">
                        {children}
                    </div>
                </div >
                : ''}
        </>
    )
}