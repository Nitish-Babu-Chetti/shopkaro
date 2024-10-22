import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { Sidebar } from "../sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, loadItemsFromCart } from "../../url/AddCartAndRemoveCart";
import { fetchSearchProducts, getAllSearchProducts } from "../../Fetch data/SearchSlice";
import {Link} from "react-router-dom";

export const Navbar = () => {
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();

    const handleSideBarToggle = () => {
        setSidebarStatus(!sidebarStatus);
    };

    useEffect(() => {
        dispatch(loadItemsFromCart());
    }, [dispatch]);

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent form default submission behavior
        if (query.trim()) {
            dispatch(fetchSearchProducts(query)); // Perform the search action
            navigate(`/search/${query}`); // Navigate to the search results component
        }
    };

    return (
        <React.Fragment>
            <div id="navbar">
                <nav className="navbar navbar-expand-sm">
                    <div className="container">
                        <div id="sidebar">
                            <button onClick={handleSideBarToggle} className="btn bg-transparent">
                                <i className="fa fa-bars text-light"></i>
                            </button>

                            {/* Sidebar Component */}
                            
                                <Sidebar sidebarStatus={sidebarStatus} handleSideBarToggle={handleSideBarToggle} />
                        </div>

                        <a href="/" className="navbar-brand">ShopKaro</a>

                        {/* Search form */}
                        <form id="top-search-section" onSubmit={handleSearch}>
                            <div className="btn-group">
                                <span className="search-icon">
                                    <i className="fa fa-search mt-2"></i>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search here for products, Brands and More"
                                    className="p-2"
                                    id="search-box"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)} // Update query on input change
                                />
                            </div>
                        </form>

                        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navitems">
                            <span className="navbar-toggler-icon text-light"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navitems">
                            <ul className="navbar-nav ms-auto d-flex align-items-center justify-content-between">
                                <li className="dropdown">
                                    <button className="btn bg-transparent text-light" data-bs-toggle="dropdown">
                                        <span className="fa fa-user-circle"> </span> Login
                                    </button>
                                            <div className="dropdown-menu">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h6 className="m-2">New Customer </h6>
                                                    <Link to={'/signUp'}>
                                                        <a className="btn text-primary" type="button">Sign up</a>
                                                    </Link>
                                                </div>
                                                <hr/>
                                                <h6 className="dropdown-item"><i
                                                    className="fa fa-user-circle bg-transparent mx-1"></i>My Profile
                                                </h6>
                                                <h6 className="dropdown-item"><i
                                                    className="fa fa-draw-polygon bg-transparent mx-1"></i>Flipkart Plus
                                                    Zone
                                                </h6>
                                                <h6 className="dropdown-item"><i
                                                    className="fa fa-boxes-packing bg-transparent mx-1"></i> Orders</h6>

                                                <Link to="/wishListItems" className="dropdown-item">
                                                    <h6>
                                                        <i
                                                            className="fa fa-heart bg-transparent mx-1"></i>
                                                        Wishlist
                                                    </h6>
                                                </Link>

                                                <h6 className="dropdown-item"><i
                                                    className="fa fa-gift bg-transparent mx-1"></i> Rewards</h6>
                                                <h6 className="dropdown-item"><i
                                                    className="fa fa-credit-card bg-transparent mx-1"></i> Gift Cards
                                                </h6>
                                            </div>
                                </li>


                                <li>
                                    <Link to="/cart">
                                        <button className="btn bg-transparent text-light">
                                            <span className="fa fa-cart-shopping position-relative">
                                                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">{cartItems.length}</span>
                                            </span> Cart
                                        </button>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/wishListItems">
                                        <button className="btn bg-transparent text-light">
                                            Wishlist <span className="fa fa-heart text-danger"></span>
                                        </button>
                                    </Link>
                                </li>

                                <li>
                                    <button className="btn bg-transparent text-light">
                                        <span className="fa fa-store"></span> Become a seller
                                    </button>
                                </li>

                                <li className="dropdown">
                                    <button className="btn bg-transparent text-light" data-bs-toggle="dropdown">
                                        <span className="fas fa-ellipsis-v"></span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item">
                                            <i className="fa fa-bell bg-transparent mx-1"></i>
                                            Notification Preferences</a>
                                        <a className="dropdown-item">
                                            <i className="fa fa-headset bg-transparent mx-1"></i>
                                            24/7 Customer Care</a>
                                        <a className="dropdown-item">
                                            <i className="fa fa-arrow-trend-up bg-transparent mx-1"></i>
                                            Advertise</a>
                                        <a className="dropdown-item" href="bootstrap" download={true}>
                                            <i className="fa fa-download bg-transparent mx-1"></i>
                                            Download</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
}

