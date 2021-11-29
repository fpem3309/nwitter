import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// const toggleBtn = document.querySelector('nav_toggleBtn');
// const menu = document.querySelector('nav_menu');
// const icon = document.querySelector('nav_icon');


// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     icon.classList.toggle('active');
// });



const Wave = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleBar, setToggleBar] = useState(true);

    const bar = () => {
        setToggleMenu(!toggleMenu);
        setToggleBar(!toggleBar)
    }
    return (
        <>
            <nav className="navbar">
                <div>
                    <a href="">Home coding</a>
                </div>

                <ul className="nav_menu">
                    <li><a href="" >Home</a></li>
                    <li><a href="" >Gallery</a></li>
                    <li><a href="" >Weddings</a></li>
                </ul>

                <ul className="nav_icon">
                    <li><FontAwesomeIcon icon={faInstagram} color={"#04aaFF"} /><a href="https://www.instagram.com/k_gwan/">Instagram</a></li>
                    <li><FontAwesomeIcon icon={faYoutube} color={"#04aaFF"} /><a href="https://www.youtube.com/channel/UCNhofiqfw5nl-NeDJkXtPvw" >Pani</a></li>
                </ul>

                <button href="#" className="nav_toogleBtn" onClick={bar}>
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