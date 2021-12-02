import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars, faBlog, faGrinStars, faQuran, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";


const Wave = () => {
    return (
        <>
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