import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

import { classNames } from "../../src/utils/api";


export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return (
        <div className="fixed bottom-2" right-2>
            <button 
                onClick={scrollToTop} 
                className={classNames(
                isVisible ? 'opacity-100' : 'opacity-0',
                'bg-{#171717} hover:bg-cyan-400 focus:ring-cyan-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 m-3',
                )}>
                <BiArrowFromBottom className="h-8 w-8" aria-hidden="true"/>
            </button>
        </div>
    );
};