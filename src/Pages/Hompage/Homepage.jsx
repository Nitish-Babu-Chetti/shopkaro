import React, { useEffect, useState } from 'react';
import './Homepage.css';
import { Carousel } from "../../Components/Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import {fetchAsyncCategories, getAllCategories, getAllCategoriesStatus} from "../../Fetch data/CategoryFetch";
import { fetchAsyncCategoryProducts, getAllCategoryProducts, getAllCategoryProductsFetchStatus } from "../../Fetch data/CategoryProductsFetch";
import {numberInIndianFormat} from "../../Components/NumberFormat";

import picture1 from '../../Images/Advertisement/picture1.webp';
import picture2 from '../../Images/Advertisement/picture2.webp';
import picture3 from '../../Images/Advertisement/picture3.webp';
import picture4 from '../../Images/Advertisement/picture4.webp';
import picture5 from '../../Images/Advertisement/picture5.webp';
import picture6 from '../../Images/Advertisement/picture6.webp';
import picture7 from '../../Images/Advertisement/picture7.webp';
import picture8 from '../../Images/Advertisement/picture8.webp';
import picture9 from '../../Images/Advertisement/picture9.webp';
import { Link } from "react-router-dom";

export const Homepage = () => {
    const dispatch = useDispatch();

    const categories = useSelector(getAllCategories)
    const categoryProducts = useSelector(getAllCategoryProducts)
    const categoriesProductsFetchStatus = useSelector(getAllCategoryProductsFetchStatus)
    const categoriesFetchStatus = useSelector(getAllCategoriesStatus);

    let [category , setCategory] = useState(null);

    useEffect(()=>
    {
        dispatch(fetchAsyncCategories());
    } , [dispatch])

    useEffect(()=>
    {
        if(categories.length > 0 && !category)
        {
            setCategory(getRandomCategory(categories))
        }
    } , [categories])

    useEffect(()=>
    {
        dispatch(fetchAsyncCategoryProducts(category))
    } , [category])

    const getRandomCategory = (categories)=>
    {
        if(categories.length > 0)
        {
            let randomIndex = Math.floor(Math.random() * categories?.length);
            return categories[randomIndex]
        }
        return null;
    }


    return (
        <React.Fragment>
            <div id="homepage">
                <Carousel/>
                <div className="container-fluid mt-5">
                    <div className="best-deals-card p-3 bg-white">
                        <h3>Best Deals on {category}</h3>
                        {
                            categoryProducts && categoryProducts.length > 0 ?
                                <div className="product-list overflow-y-hidden">
                                    {
                                        categoryProducts.map((product, index) => (
                                            <Link to={`products/${product.id}`} id="product-link"
                                                  key={product.id || index}>
                                                <div className="card" id="product-card">
                                                    <div className="card-body">
                                                        <div className="card-img">
                                                            <img id="selected-category-product-img"
                                                                 src={product.images ? product.images[0] : 'NO image found'}
                                                                 alt=""/>
                                                            <p>{product.title}</p>
                                                            <p>From, &#8377;{numberInIndianFormat(product.price * 83)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                                : "No Products Found"
                        }
                    </div>

                    <div className="advertisement">
                        <div className="advertisement-banners">
                            <img src={picture1} alt=""/>
                            <img src={picture2} alt=""/>
                            <img src={picture3} alt=""/>
                        </div>
                        <div className="advertisement-banners mt-3">
                            <img src={picture4} alt=""/>
                            <img src={picture5} alt=""/>
                            <img src={picture6} alt=""/>
                        </div>
                        <div className="advertisement-banners mt-3">
                            <img src={picture7} alt=""/>
                            <img src={picture8} alt=""/>
                            <img src={picture9} alt=""/>
                        </div>
                    </div>
                </div>
                <div id="mobile">
                    <ul>
                        <div id="mobile">
                            <ul>
                                <Link to="/">
                                    <i className="fa fa-home"></i>
                                </Link>
                                <Link to="/mobileCategoryPage">
                                    <i className="fa fa-list"></i>
                                </Link>
                                <Link to="/wishListItems">
                                    <i className="fa-regular fa-heart"></i>
                                </Link>
                                <Link to="/cart">
                                    <i className="fa fa-cart-shopping"></i>
                                </Link>
                                <Link to="/Login">
                                    <i className="fa fa-user-circle"></i>
                                </Link>
                            </ul>
                        </div>

                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};
