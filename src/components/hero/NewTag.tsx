import { FormattedMessage } from 'react-intl';
import '../styles/NewTag.css';

export default function NewTag() {
    return (
        <div className='tag-container'>
            <div className='max-h-11 tag-container bg-black border border-white py-2 px-3 flex items-center gap-7 rounded-full'>
                <div className='tag bg-purple-500 p-2 flex flex-col justify-center items-center gap-10 rounded-full'>
                    <p className='text-black text-center flex flex-col justify-center font-bold text-xs px-1'>NEW</p>
                </div>
                <div className='font-kanit text-sm text-purple-500 font-light'>
                    <p>
                        <FormattedMessage
                            id="hero.tag"
                            defaultMessage="Medellin - Colombia & Estados unidos"
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}