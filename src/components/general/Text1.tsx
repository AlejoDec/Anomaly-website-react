import { FormattedMessage } from 'react-intl';

export default function Text1() {
    return (
        <div className="hese flex flex-col items-center justify-center h-[40vh] overflow-hidden max-sm:w-full max-sm:font-base">
            <p className="text-stone-300 text-4xl text-center max-sm:text-lg max-sm:w-screen max-sm:px-2">
                <FormattedMessage id='text1' defaultMessage='En Anomaly, combinamos creatividad, innovación y tecnología para ofrecer soluciones personalizadas que se adaptan a las necesidades de tu negocio' />
            </p>
        </div>
    )
}