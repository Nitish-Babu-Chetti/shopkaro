import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

export const Navbar2 = () => {
    return (
        <div className="" id="Navbar2">
            <nav className="navbar navbar-expand-sm container">
                <a href="/" className="navbar-brand">Cloned App</a>
                <form action="" id="top-search-section">
                    <div className="btn-group">
                        <span className="search-icon"> <i className="fa fa-search"></i> </span>
                        <input type="text" placeholder="Search here for products, Brands and More" className="p-1"
                               id="search-box"/>
                    </div>
                </form>

                <div id="toggler">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items"
                            aria-controls="navbarSupportedContent" aria-expanded="false">
                        <span className="navbar-toggler-icon text-dark"></span>
                    </button>
                </div>
                <div id="nav-items">
                    <ul className="collapse navbar-collapse" id="navbar-items">
                        <li className="">
                            <button className="btn bg-transparent" data-bs-toggle="dropdown">
                                <span className="fa fa-user-circle"> </span> Login

                                <div className="drop-down">
                                    <div className="dropdown-menu">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="m-2">New Customer </h6>
                                            <a className="btn text-primary" type="button">Sign up</a>
                                        </div>
                                        <hr/>
                                        <h6 className="dropdown-item"><i
                                            className="fa fa-user-circle bg-transparent mx-1"></i>My Profile</h6>
                                        <h6 className="dropdown-item"><i
                                            className="fa fa-draw-polygon bg-transparent mx-1"></i>Flipkart Plus Zone
                                        </h6>
                                        <h6 className="dropdown-item"><i
                                            className="fa fa-boxes-packing bg-transparent mx-1"></i> Orders</h6>
                                        <h6 className="dropdown-item"><i
                                            className="fa fa-heart bg-transparent mx-1"></i> Wishlist</h6>
                                        <h6 className="dropdown-item"><i
                                            className="fa fa-gift bg-transparent mx-1"></i> Rewards</h6>
                                        <h6 className="dropdown-item"><i
                                            className="fa fa-credit-card bg-transparent mx-1"></i> Gift Cards</h6>
                                    </div>
                                </div>
                            </button>
                        </li>

                        <li className="">
                            <Link to="/cart">
                                <button className="btn bg-transparent">
                                    <span className="fa fa-cart-shopping"> </span> Cart
                                </button>
                            </Link>
                        </li>

                        <li className="">
                            <button className="btn bg-transparent">
                                <span className="fa  fa-store"> </span> Become a seller
                            </button>
                        </li>

                        <li className="">
                            <button className="btn bg-transparent" data-bs-toggle="dropdown">
                                <span className="fas  fa-ellipsis-v"></span>
                                <div className="dropdown-menu">
                                    <h6 className="dropdown-item">
                                        <i className="fa fa-bell bg-transparent mx-1"></i>
                                        Notification Preferences</h6>
                                    <h6 className="dropdown-item">
                                        <i className="fa fa-headset bg-transparent mx-1"></i>
                                        24/7 Customer Care</h6>
                                    <h6 className="dropdown-item">
                                        <i className="fa fa-arrow-trend-up bg-transparent mx-1"></i>
                                        Advertise</h6>
                                    <h6 className="dropdown-item">
                                        <i className="fa fa-download bg-transparent mx-1"></i>
                                        Download</h6>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <form action="" id="bottom-search-section">
                <div className="btn-group">
                    <span className="search-icon"> <i className="fa fa-search"></i> </span>
                    <input type="text" placeholder="Search here for products, Brands and More" className="p-1"
                           id="search-box"/>
                </div>

            </form>

        </div>
    )
}