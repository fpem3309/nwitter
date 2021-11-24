import React from 'react';
import { Link } from 'react-router-dom';
import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGrinStars, faQuran, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = ({ userObj }) => (
    <nav>
        <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
            <li>
                <Link to="/" style={{ marginRight: 10 }}>
                    <FontAwesomeIcon icon={faQuran} color={"#04AAFF"} size="2x" />
                </Link>
            </li>
            <li>
                <Link
                    to="/profile"
                    style={{
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12,
                    }}
                >
                    <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
                    <span style={{ marginTop: 10 }}>
                        {userObj.displayName
                            ? `${userObj.displayName}의 Profile`
                            : "Profile"}
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/lotto"
                    style={{
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12,
                    }}
                >
                    <FontAwesomeIcon icon={faGrinStars} color={"#04aaFF"} size="2x" />
                </Link>

                <Link to="youtube">
                    <FontAwesomeIcon icon={faYoutube} color={"#04aaFF"} size="2x" />
                </Link>
            </li>
        </ul>
    </nav>
);
export default Navigation;