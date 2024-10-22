import React from 'react';
import './Carousel.css'

import one from '../../Images/Carousel/Carousel1.jpeg';
import two from '../../Images/Carousel/Carousel2.jpeg';
import three from '../../Images/Carousel/Carousel3.jpeg';
import four from '../../Images/Carousel/Carousel4.jpeg';
import five from '../../Images/Carousel/Carousel5.jpeg';
import six from '../../Images/Carousel/Carousel6.jpeg';
import seven from '../../Images/Carousel/Carousel7.jpeg';
import eight from '../../Images/Carousel/Carousel8.jpeg';
import nine from '../../Images/Carousel/Carousel9.jpeg';
import ten from '../../Images/Carousel/Carousel10.jpg';

import banner1 from '../../Images/Advertisement/Big-banners/Banner1.jpg'
import banner2 from '../../Images/Advertisement/Big-banners/Banner2.jpg'
import banner3 from '../../Images/Advertisement/Big-banners/Banner3.jpg'

export const Carousel = () => {
    return (
        <div id="carousel" className="carousel slide container-fluid position-relative" data-bs-ride="carousel">
            {/*<div className="carousel-indicators">*/}
            {/*    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"></button>*/}
            {/*    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>*/}
            {/*    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>*/}
            {/*    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>*/}
            {/*    <button type="button" data-bs-target="#carousel" data-bs-slide-to="4"></button>*/}
            {/*    <button type="button" data-bs-target="#carousel" data-bs-slide-to="5"></button>*/}
            {/*    <button type="button" data-bs-target="#carousel" data-bs-slide-to="6"></button>*/}
            {/*    <button type="button" data-bs-target="#carousel" data-bs-slide-to="7"></button>*/}
            {/*    <button type="button" data-bs-target="#carousel" data-bs-slide-to="8"></button>*/}
            {/*</div>*/}
            <div className="carousel-inner">
                <div className="carousel-item  active">
                    <img src={banner2} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={banner1} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={banner3} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={ten} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={one} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={two} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/2152c9d0afe3352d.jpg?q=20"
                         alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={five} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={six} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={seven} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={eight} alt="banner" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src={nine} alt="banner" className="d-block w-100"/>
                </div>
            </div>

            <button className="btn bg-dark btn-dark" data-bs-target="#carousel" data-bs-slide="prev" id="slider-prev-btn">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="btn bg-dark btn-dark" data-bs-target="#carousel" data-bs-slide="next" id="slider-next-btn">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
