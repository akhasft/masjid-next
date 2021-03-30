import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,facebook } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            	<header id="header">
									<a href="index.html" className="logo"><img src="/logo.png" alt=""/></a>
									<ul className="icons">
										<li><a href="#" className="icon brands fa-twitter">
                                            </a></li>
                                        
										
										<li><a href="#" className="icon brands fa-telegram"><span className="label">Telegram</span></a></li>
									
									</ul>
								</header>
        </>
    )
}

export default Header
