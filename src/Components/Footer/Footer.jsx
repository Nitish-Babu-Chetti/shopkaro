import React from 'react';
import './Footer.css'

export const Footer = () =>
{
    return (
        <React.Fragment>
            <footer className="footer bg-dark text-white" id="footer">
                <ul>
                    <li>
                        <a href="#">Policies : Returns Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms of use</a>
                    </li>
                    <li>
                        <a href="#">Terms of use</a>
                    </li>
                    <li>
                        <a href="#">Security</a>
                    </li>
                    <li>
                        <a href="#">TPrivacy</a>
                    </li>
                    <li>
                        <a href="#">Terms of use</a>
                    </li>
                    <li>
                        <a href="#">Infringement©</a>
                    </li>
                    <li>
                        <a href="#">2007-2024 Flipkart.com</a>
                    </li>
                    <br/>
                    <li>
                        <a href="#">Need help? Contact Us</a>
                    </li>
                </ul>
            </footer>
        </React.Fragment>
    )
}