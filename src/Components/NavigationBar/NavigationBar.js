import React from 'react';
import './NavigationBar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Time from './Time';
import { userContext } from '../../App';
import { useContext } from 'react';


const NavigationBar = () => {
    const { value, value1, value2 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value;
    const [newUser, setNewUser] = value1;
    const [dark, setDark] = value2;
    return (
        <div className={dark ? "NavigationBar navbarDark" : "NavigationBar navbarLight"}> 
            <Navbar expand="lg">
                <Link to="/" className={dark ? "navbarDark aDark name" : " aLight navbarLight name"}><h1>News Paper</h1></Link>
                <Navbar.Toggle className={dark ? "btn btn-outline-light" : "btn btn-outline-dark"} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-2 none d-flex align-items-center justify-content-center">
                                <Time></Time>
                            </div>
                            <div className="col-md-8">
                                <Nav className={dark ? "navbarDark aDark" : " aLight navbarLight"}>
                                    <ul class="">
                                        <li class="">
                                            <Link  class="d-flex align-items-center" to="/Bangladesh">Bangladesh</Link>
                                        </li>
                                        <li class="">
                                            <Link class="d-flex align-items-center" to="/International">International</Link>
                                        </li>
                                        <li class="">
                                            <Link class="d-flex align-items-center" to="/Sports">Sports</Link>
                                        </li>
                                        <li class="">
                                            <Link class="d-flex align-items-center" to="/Opinion">Opinion</Link>
                                        </li>
                                        <li class="">
                                            <Link class="d-flex align-items-center" to="/Business">Business</Link>
                                        </li>
                                        <li class="">
                                            <Link class="d-flex align-items-center" to="/Youth">Youth</Link>
                                        </li>
                                        <li class="">
                                            <Link class="d-flex align-items-center" to="/Entertainment">Entertainment</Link>
                                        </li>
                                        <li class="">
                                            <Link class="d-flex align-items-center" to="/Lifestyle">Lifestyle</Link>
                                        </li>
                                    </ul>
                                </Nav>
                            </div>
                            <div className={dark ? "DP-dark col-md-2 d-flex align-items-center justify-content-center DP-bg" : "DP-light col-md-2 d-flex align-items-center justify-content-center DP-bg"}>
                                {
                                    newUser ? <Link to="/Profile"><img className="dp" src={loggedInUser.photoURL} alt="" /></Link> : <Link className={dark ? "btn btn-outline-light m-1" : "btn btn-outline-dark m-1"} to="/login">Log In</Link>
                                }
                            </div>
                        </div>
                    </div>

                </Navbar.Collapse>
            </Navbar>
            <div  className="marquee">
                <marquee className="d-flex align-items-center" alt=""><b>This Is my New Newspaper</b></marquee>
            </div>

        </div>
    );
};

export default NavigationBar;