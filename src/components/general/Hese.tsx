import { FormattedMessage } from 'react-intl';
import '../styles/Hese.css';

export default function Hese() {
    return (
        <div className="hese flex flex-col items-center justify-center w-[110vw] h-[40vh] overflow-hidden">
            <p className="text-stone-300 text-4xl text-center max-sm:text-lg max-sm:w-screen max-sm:px-2">
                <FormattedMessage id='hese.txt' defaultMessage='En Anomaly creemos que romper las reglas es desafiar la normalidad' />
            </p>
        </div>
    )
}