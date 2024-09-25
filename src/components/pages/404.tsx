import { FormattedMessage } from 'react-intl';
import '../styles/404.css';

export default function NotFound() {
    return (
        <div className="overflow-hidden">
            <div className="co w-screen h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4">
                    <p className="text-stone-300 text-6xl text-center">
                        <FormattedMessage id='404.txt' defaultMessage='¡Oh no! Parece que te has perdido' />
                    </p>
                    <h1 className="text-stone-300 text-5xl text-center">
                        <FormattedMessage id='404.title' defaultMessage='404' />
                    </h1>
                </div>
                <div className="scene">
                    <div className="forest">
                    <div className="tree tree1">
                        <div className="branch branch-top"></div>
                        <div className="branch branch-middle"></div>
                    </div>
                
                    <div className="tree tree2">
                        <div className="branch branch-top"></div>
                        <div className="branch branch-middle"></div>
                        <div className="branch branch-bottom"></div>
                    </div>
                
                    <div className="tree tree3">
                        <div className="branch branch-top"></div>
                        <div className="branch branch-middle"></div>
                        <div className="branch branch-bottom"></div>
                    </div>
                
                    <div className="tree tree4">
                        <div className="branch branch-top"></div>
                        <div className="branch branch-middle"></div>
                        <div className="branch branch-bottom"></div>
                    </div>
                
                    <div className="tree tree5">
                        <div className="branch branch-top"></div>
                        <div className="branch branch-middle"></div>
                        <div className="branch branch-bottom"></div>
                    </div>
                
                    <div className="tree tree6">
                        <div className="branch branch-top"></div>
                        <div className="branch branch-middle"></div>
                        <div className="branch branch-bottom"></div>
                    </div>
                
                    <div className="tree tree7">
                        <div className="branch branch-top"></div>
                        <div className="branch branch-middle"></div>
                        <div className="branch branch-bottom"></div>
                    </div>
                    </div>
                    
                    <div className="tent">
                        <div className="roof"></div>
                        <div className="roof-border-left">
                        <div className="roof-border roof-border1"></div>
                        <div className="roof-border roof-border2"></div>
                        <div className="roof-border roof-border3"></div>
                        </div>
                        <div className="entrance">
                        <div className="door left-door">
                            <div className="left-door-inner"></div>
                        </div>
                        <div className="door right-door">
                            <div className="right-door-inner"></div>
                        </div>
                        </div>
                    </div>
                
                    <div className="floor">
                        <div className="ground ground1"></div>
                        <div className="ground ground2"></div>
                    </div>
                    
                    <div className="fireplace">
                    <div className="support"></div>
                    <div className="support"></div>
                    <div className="bar"></div>
                    <div className="hanger"></div>
                    <div className="smoke"></div>
                    <div className="pan"></div>
                    <div className="fire">
                        <div className="line line1">
                        <div className="particle particle1"></div>
                        <div className="particle particle2"></div>
                        <div className="particle particle3"></div>
                        <div className="particle particle4"></div>
                        </div>
                        <div className="line line2">
                        <div className="particle particle1"></div>
                        <div className="particle particle2"></div>
                        <div className="particle particle3"></div>
                        <div className="particle particle4"></div>
                        </div>
                        <div className="line line3">
                        <div className="particle particle1"></div>
                        <div className="particle particle2"></div>
                        <div className="particle particle3"></div>
                        <div className="particle particle4"></div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="time-wrapper">
                    <div className="time">
                        <div className="night">
                        <div className="moon"></div>
                        <div className="star star1 star-big"></div>
                        <div className="star star2 star-big"></div>
                        <div className="star star3 star-big"></div>
                        <div className="star star4"></div>
                        <div className="star star5"></div>
                        <div className="star star6"></div>
                        <div className="star star7"></div>
                        </div>
                    </div>
                    </div>
                </div>  
                <a
                href="/"
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-purple-800 hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group hover:text-stone-300"
                >
                Llevame a casa
                <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                </svg>
                </a>
            </div>
        </div>
    )
}