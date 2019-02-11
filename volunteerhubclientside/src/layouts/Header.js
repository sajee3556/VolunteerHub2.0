import React from 'react';
import {Link} from "react-router-dom";
import helpingHand from '../imgs/hh.png';

const Header = props => {
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={helpingHand} alt="Volunteer Hub" width="30" height="30"/>
                    {' '}{branding}
                </Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="fas fa-home">Home</i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <i className="fas fa-question">About</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;