import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import './Footer.css'

const Footer = () => {
    const { value2 } = useContext(userContext);
    const [dark, setDark] = value2;
    return (
        <footer className={dark ? "App dark aDark container mt-5 pb-5 pt-5 footer" : "App light aLight container mt-5 pb-5 pt-5 footer"} >
            <div className="row">
                <div className="col-md-3 none">
                    <h5>Features</h5>
                    <ul className="">
                        <li className="mb-1"><a  href="#">Cool stuff</a></li>
                        <li className="mb-1"><a  href="#">Random feature</a></li>
                        <li className="mb-1"><a  href="#">Team feature</a></li>
                        <li className="mb-1"><a  href="#">Stuff for developers</a></li>
                        <li className="mb-1"><a  href="#">Another one</a></li>
                        <li className="mb-1"><a  href="#">Last time</a></li>
                    </ul>
                </div>
                <div className="col-md-3 none">
                    <h5>Resources</h5>
                    <ul className="">
                        <li className="mb-1"><a  href="#">Resource</a></li>
                        <li className="mb-1"><a  href="#">Resource name</a></li>
                        <li className="mb-1"><a  href="#">Another resource</a></li>
                        <li className="mb-1"><a  href="#">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-md-3 none">
                    <h5>About</h5>
                    <ul className="">
                        <li className="mb-1"><a  href="#">Team</a></li>
                        <li className="mb-1"><a  href="#">Locations</a></li>
                        <li className="mb-1"><a  href="#">Privacy</a></li>
                        <li className="mb-1"><a  href="#">Terms</a></li>
                    </ul>
                </div>
                <div className="col-md-3 media">
                    <h5 >Our Social Media</h5>
                    <ul className="m-auto">
                        <li className="mb-1 col-2">
                            <a  target="_blank" href="https://www.facebook.com/Ibrahimkholil.Bangladesh">
                                <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png" alt="" />
                            </a>
                        </li>
                        <li className="mb-1 col-2">
                            <a  target="_blank" href="https://www.instagram.com/ibrahim.khalil.ik/">
                                <img src="https://image.flaticon.com/icons/png/512/174/174855.png" alt="" />
                            </a>
                        </li>
                        <li className="mb-1 col-2">
                            <a  target="_blank" href="https://www.linkedin.com/in/ibrahim-khalil-4b4b3b205/">
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;