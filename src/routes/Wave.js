import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars, faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

// const toggleBtn = document.querySelector('nav_toggleBtn');
// const menu = document.querySelector('nav_menu');
// const icon = document.querySelector('nav_icon');


// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     icon.classList.toggle('active');
// });



const Wave = () => {
    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on, off 개념 boolean
    }
    return (
        <>
            <nav className="navbar">
                <div>
                    <Link to="#">Home coding</Link>
                </div>

                <ul className={isOpen ? "nav_menu" : "hide_nav_menu"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile" >profile</Link></li>
                    <li><Link to="/lotto" >lotto</Link></li>
                </ul>

                <ul className="nav_icon">
                    <li><FontAwesomeIcon icon={faInstagram} color={"#04aaFF"} /><a href="https://www.instagram.com/k_gwan/">Instagram</a></li>
                    <li><FontAwesomeIcon icon={faBlog} color={"#04aaFF"} /><a href="https://fpem3309.tistory.com/">Blog</a></li>
                    <li><FontAwesomeIcon icon={faYoutube} color={"#04aaFF"} /><a href="https://www.youtube.com/channel/UCNhofiqfw5nl-NeDJkXtPvw" >Pani</a></li>
                </ul>

                <button href="#" className="nav_toogleBtn" onClick={() => toggleMenu()}>
                    <FontAwesomeIcon icon={faBars} color={"#04aaFF"} />
                </button>
            </nav>

            <div className='box'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                <div className='title'>React 연습중</div>
            </div>
        </>
    );
}
export default Wave;