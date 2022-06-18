import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">XtraGlimpses</Link>
                    </div>
                </div>
                <div className="footer__content__copyright">
                    <div className="copyright" align="center">
                        &copy; 2022, Developed by: <a href="https://www.linkedin.com/in/shivanand-vishwakarma-bb6580121/"> Shivanand Vishwakarma </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
