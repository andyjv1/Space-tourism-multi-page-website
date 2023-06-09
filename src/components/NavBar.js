import { useState } from 'react'
import { ReactComponent as Logo } from "../components/assets/shared/logo.svg";
import { ReactComponent as Hamburger } from "../components/assets/shared/icon-hamburger.svg";
import { ReactComponent as Close } from "../components/assets/shared/icon-close.svg";
import { useOutsideClick } from './utils/useOutsideClick';

const NavBar = ({ windowSize, location }) => {
    const [menuDrop, setMenuDrop] = useState(false)
    const onMenuClicked = e => setMenuDrop(!menuDrop)

    const onClickOutside = () => {
        setMenuDrop(false)
    };

    const ref = useOutsideClick(onClickOutside);

    return (
        <nav>
            <div className='logoContainer'>
                <Logo className="logo" />
            </div>

            <div className="navMobileSection">
                <Hamburger
                    className="hamburger"
                    onClick={onMenuClicked}
                    style={{
                        display: windowSize > 629 ? "none" : "inline"
                    }}
                />
            </div>

            <div
                id="myLinks"
                style={{
                    transform: menuDrop && windowSize <= 629 ? "translateX(0)" : "translateX(100%)"
                }}
                ref={ref}
                className={`topnav ${windowSize > 629 ? "" : "topnav--mobile"}`}
            >
                <Close
                    className="close"
                    onClick={onMenuClicked}
                    style={{
                        display: windowSize > 629 ? "none" : "inline"
                    }}
                />
                <ul >
                    <li
                        className={`${location.pathname === '/' && windowSize > 629 ? "active" : null}`}
                    ><a href="/"><span>00</span> HOME</a></li>
                    <li
                        className={`${location.pathname === '/destination' && windowSize > 629 ? "active" : null}`}
                    ><a href="destination"><span>01</span> DESTINATION</a></li>
                    <li
                        className={`${location.pathname === '/crew' && windowSize > 629 ? "active" : null}`}
                    ><a href="crew"><span>02</span> CREW</a></li>
                    <li
                        className={`${location.pathname === '/technology' && windowSize > 629 ? "active" : null}`}
                    ><a href="technology"><span>03</span> TECHNOLOGY</a></li>
                </ul>
            </div>
        </nav>)
}

export default NavBar