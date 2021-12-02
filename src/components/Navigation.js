import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faBlog, faGrinStars, faQuran, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navigation = ({ userObj }) => {
    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on, off 개념 boolean
    }
    return (
        <>
            <nav className="navbar">
                <button href="#" className="nav_toogleBtn" onClick={() => toggleMenu()}>
                    <FontAwesomeIcon icon={faBars} color={"#04aaFF"} />
                </button>

                <div>
                    <Link to="#">Home coding</Link>
                </div>

                <ul className="nav_icon">
                    <li><FontAwesomeIcon icon={faInstagram} color={"#04aaFF"} /><a href="https://www.instagram.com/k_gwan/">Instagram</a></li>
                    <li><FontAwesomeIcon icon={faBlog} color={"#04aaFF"} /><a href="https://fpem3309.tistory.com/">Blog</a></li>
                    <li><FontAwesomeIcon icon={faYoutube} color={"#04aaFF"} /><a href="https://www.youtube.com/channel/UCNhofiqfw5nl-NeDJkXtPvw" >Pani</a></li>
                </ul>

                <ul className={isOpen ? "nav_menu" : "hide_nav_menu"}>
                    <li><FontAwesomeIcon icon={faQuran} color={"#04AAFF"} /><Link to="/">{userObj.displayName}의 Diary</Link></li>
                    <li><FontAwesomeIcon icon={faUser} color={"#04AAFF"} /><Link to="/profile" >{userObj.displayName}의 Profile</Link></li>
                    <li><FontAwesomeIcon icon={faGrinStars} color={"#04aaFF"} /><Link to="/lotto" >Lotto 자동뽑기!</Link></li>
                    <li><Link to="/" >test item</Link></li>
                    <li><Link to="/" >test item</Link></li>
                    <li><Link to="/" >test item</Link></li>
                    <li><Link to="/" >test item</Link></li>
                </ul>


            </nav>
        </>
    );
}
export default Navigation;