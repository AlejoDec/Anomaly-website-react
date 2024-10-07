import { FormattedMessage } from 'react-intl';

export default function Hese() {
    return (
        <div className="hese flex flex-col items-center justify-center h-[40vh] overflow-hidden max-sm:w-full max-sm:font-base">
            <p className="text-stone-300 text-4xl text-center max-sm:text-lg max-sm:w-screen max-sm:px-2" style={{ whiteSpace: 'pre-line' }}>
                <FormattedMessage id='hese.txt' defaultMessage='En Anomaly creemos que romper las reglas es desafiar la normalidad' values={{br: () => <br />}} />
            </p>
        </div>
    )
}