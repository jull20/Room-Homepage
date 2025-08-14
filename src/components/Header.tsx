import { useState }     from "react"
import { createPortal } from "react-dom"
import SideMenu         from "./SideMenu"
import Navigation       from "./Navigation"

export default function Header(){
    const [isVisible, setVisible] = useState<boolean>(false)
    return(
        <header className='header'>
            <div className="sideMenuIcon" onClick={() => setVisible(true)}>
                <img src="icon-hamburger.svg" alt="side menu icon" />
            </div>
            <div className="logo"><img src="logo.svg" alt="logo" /></div>
            <Navigation />
            {
                isVisible && createPortal(<SideMenu onClose={() => setVisible(false)}/>, document.body)
            }
        </header>
    )
}


