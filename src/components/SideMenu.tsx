import { useState } from "react";
import Navigation from "./Navigation";

export default function SideMenu({onClose}: {onClose: ()=>void}){
    const [closeAnimation, setCloseAnimation] = useState<boolean>(false);
    const closeMenu = () => {
        setCloseAnimation(true);
        setTimeout(()=>onClose(), 500);
    }
    return(
        <div className={"sideMenu " + (closeAnimation ? 'close' : '')}>
            <div className={"sideMenu__menu-wrapper " + (closeAnimation ? 'close' : '')}>
                <button className="closeIcon" onClick={closeMenu}>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000" fillRule="evenodd"  d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"/>
                    </svg>
                </button>
                <Navigation />
            </div>
        </div>
    )
}
