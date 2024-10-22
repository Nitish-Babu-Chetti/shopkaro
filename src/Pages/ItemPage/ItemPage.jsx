import React, { useEffect, useState } from 'react';
import './ItemPage.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProduct, getAProduct, getProductFetchStatus } from "../../Fetch data/CategoryFetch";
import { useParams } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";
import {numberInIndianFormat} from "../../Components/NumberFormat";
import {addToCart} from "../../url/AddCartAndRemoveCart";
import {CategoryProducts} from "../CategoryProducts/CategoryProducts";
import {fetchAsyncCategoryProducts, getAllCategoryProducts} from "../../Fetch data/CategoryProductsFetch";
import {addToWishList, getWishListItems, loadWishListItems, removeItemFromWishList} from "../../url/wishList";
import {LoginPage} from "../LoginPage/Login";
import SimilarItems from '../similarItems/similarItems';


export const ItemPage = () => {
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const [deliveryInfo, setDeliveryInfo] = useState(null);
    const [deliveryCode , setDeliveryCode] = useState(null);
    const [notificationVisible , setNotificationVisible] = useState(false);
    const [isInWishlist , setIsInWishlist] = useState(false);

    const wishListItems = useSelector(getWishListItems)
    console.log(wishListItems)
    const product = useSelector(getAProduct);
    const productFetchStatus = useSelector(getProductFetchStatus);

    const categoryProducts = useSelector(getWishListItems)

    let BankOffers = {
        offers: [
            'Bank Offer: Flat ₹1000 off on HDFC Bank Credit Card EMI Txns, Tenure: 6 and 9 months, Min Txn Value: ₹15,000',
            'Bank Offer: Flat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000',
            'Bank Offer: 10% off up to ₹1500 on HDFC Bank Credit Card EMI Txns, Tenure: 24 months, Min Txn Value: ₹15,000',
            'Bank Offer: Flat ₹500 off on HDFC Bank Debit Card EMI Txns, Tenure: 3 and 6 months, Min Txn Value: ₹7,500',
            'Bank Offer: Flat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,500',
            'Bank Offer: 10% off up to ₹1000 on HDFC Bank Debit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹7,500',
            'Bank Offer: 10% off up to ₹1250 on HDFC Bank Debit Card EMI Txns, Tenure: 24 months, Min Txn Value: ₹7,500'
        ]
    };

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchAsyncProduct(parseInt(id)));
        }
        dispatch(loadWishListItems());
    
        // Clear selected image when product changes
        setSelectedImage(null);  // Reset image before fetching a new product
    }, [dispatch, id]);


    useEffect(() => {
        if (product && product.images && product.images.length > 0) {
            setSelectedImage(product.images[0]);
        }
    }, [product]);

    const getSelectedImage = (i) => {
        setSelectedImage(product.images[i]);
    };


    const originalPrice = (product?.price * (1 - product?.discountPercentage / 100) * 83);

    const generateShippingDate = () => {
        if(deliveryCode!= null && deliveryCode.length === 6)
        {
            setDeliveryInfo(product?.shippingInformation);
        }
        else
        {
            setDeliveryInfo('Enter a valid Pincode')
        }
    };

    let ratingTagline = (starRating)=>
    {
        switch(starRating)
        {
            case 1:
                return "Poor"
            case 2:
               return "Average"
            case 3:
                return "Good"
            case 4:
                return "Excellent"
            case 5:
                return "Highly Recommended";
            default:
                return " "
        }
    }


    //cart Actions

    const addItemToCart = (item)=>
    {
        dispatch(addToCart(item))
        setNotificationVisible(true);
        setTimeout(()=>setNotificationVisible(false), 3000);
    }

    const addItemToWishList = (item) => {
        const isInWishlist = wishListItems.some(wishlistItem => wishlistItem.id === item.id);

        if (isInWishlist) {
            dispatch(removeItemFromWishList(item.id));
        } else {
            dispatch(addToWishList(item));
        }
    };

    useEffect(() => {
        // Scroll to top when this component mounts or when category changes
        window.scrollTo(0, 0);
    }, [product]);

    useEffect(()=>
    {
        dispatch(fetchAsyncCategoryProducts(product.category))
    } , [dispatch,product.category])

    useEffect(()=>
    {
        if(product)
        {
            setIsInWishlist(wishListItems.some(item => item.id === product.id))
        }
    },[wishListItems , product])

    console.log(product)
    console.log(productFetchStatus)
    return (
        <div id="product-page">
            <div className="container-fluid mt-3 gap-2 m-0 p-0">
                {
                    productFetchStatus && productFetchStatus === 'LOADING' ? <Loader/> :
                        <div id="item-details-page">
                            <div id="left-part" className="w-100">
                                <div className="images-part">
                                    <div id="item-sub-images">
                                        {
                                            product && product.images && product.images.length > 0 ?
                                                product.images.map((image, index) => (
                                                    <div id="item-images-part" key={index}>
                                                        <button>
                                                            <img src={image} alt=""
                                                                 onClick={() => getSelectedImage(index)}/>
                                                        </button>
                                                    </div>
                                                ))
                                                : "No images found"
                                        }
                                    </div>
                                    <div className="main-image-and-btns">
                                        <div id="main-image" className="card">
                                            {
                                                selectedImage ?
                                                    <div className="item-main-image">
                                                        <img src={selectedImage} alt=""/>
                                                        <button id="wishlist-btn"
                                                                onClick={() => addItemToWishList(product)}>
                                                            <i className={`fa fa-heart fa-3x ${isInWishlist ? 'inWishlist' : ''}`}></i>
                                                        </button>
                                                    </div>
                                                    :
                                                    <div className="item-main-image">
                                                        <img src={product && product?.thumbnail} alt="product image" />
                                                    </div>
                                            }
                                        </div>
                                        <div id="add-and-buy-btn">
                                            <button className="btn btn-success" id="add-to-cart-btn"
                                                    onClick={() => addItemToCart(product)}>Add to Cart
                                            </button>
                                            <button className="btn btn-warning" id="buy-now-btn">Buy Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div id="right-part">
                                {
                                    product ?
                                        <div className="item-details">
                                            <h3 className="fw-medium">{product?.title}</h3>
                                            <div id="rating-section">
                                                <p className="badge bg-success">{product.rating}</p>
                                                <span className="ms-3">
                                            {product.reviews && product.reviews.length > 0
                                                ? `${numberInIndianFormat((product.reviews.length) * 730)} ratings and ${numberInIndianFormat((product.reviews.length) * 430)} reviews`
                                                : "No reviews found"}
                                        </span>
                                            </div>
                                            <div id="price-section"
                                                 className="d-flex align-items-center gap-3 flex-wrap">
                                                <h2>&#8377;{numberInIndianFormat(originalPrice)}</h2>
                                                <strike
                                                    className="text-muted">&#8377;{numberInIndianFormat(product.price * 83)}</strike>
                                                <p className="text-success mt-3 fw-bold">{product?.discountPercentage}%
                                                    off</p>
                                                <i className="fa fa-circle-info"></i>
                                            </div>
                                            <div id="bank-offers">
                                                {
                                                    BankOffers ? BankOffers.offers.map((offer, index) => (
                                                        <p key={index} id="bank-offer">
                                                            <span
                                                                dangerouslySetInnerHTML={{__html: offer.replace('Bank Offer', '<b>Bank Offer</b>')}}/>
                                                            <span> <a href="#" className="text-decoration-none">T&C</a> </span>
                                                        </p>
                                                    )) : 'No offers available'
                                                }
                                            </div>
                                            <div id="warrenty-info" className="d-flex align-items-center gap-3 mt-4">
                                                <h6 className="text-muted">Brand : </h6>
                                                <h6 className="" id="brand">{product.brand}</h6>
                                                <p className="mt-2">{product.warrantyInformation}</p>
                                            </div>
                                            <div id="delivery" className="d-flex align-items-center gap-3 mt-4">
                                                <h6 className="text-muted">Delivery : </h6>
                                                <div className="btn-group">
                                                    <form onSubmit={(e) => {
                                                        e.preventDefault();
                                                        generateShippingDate();
                                                    }}>
                                                        <input
                                                            type="number"
                                                            maxLength={6}
                                                            minLength={6}
                                                            onChange={(e) => setDeliveryCode(e.target.value)}
                                                        />
                                                        <button type="submit" className="text-decoration-none">Check
                                                        </button>
                                                        <p id="deliveryInfo" className="text-success">{deliveryInfo}</p>
                                                    </form>
                                                </div>
                                            </div>

                                            <div id="product-description" className="mt-4">
                                                <h6 className="text-muted">Product Description</h6>
                                                <p>{product?.description}</p>
                                            </div>

                                            <div id="return-policy" className="mt-4 d-flex align-items-center gap-3">
                                                <h6 className="text-muted">Return Policy : </h6>
                                                <p className="mt-2">{product?.returnPolicy}</p>
                                            </div>

                                            <div id="ratings-and-reviews" className="card p-4 mt-3">
                                                <div id="rating"
                                                     className="d-flex align-items-center justify-content-around gap-2">
                                                    <div className="rating-number">
                                                        <h6 className="display-6">{product?.rating} <i
                                                            className="fa fa-star"></i></h6>
                                                        <h6>{numberInIndianFormat(product?.reviews?.length * 730)} Ratings
                                                            & </h6>
                                                        <h6>{numberInIndianFormat(product?.reviews?.length * 430)} Reviews </h6>
                                                    </div>
                                                    <div id="rating-btn">
                                                        <button className="btn btn-light fw-bold">Rate Product</button>
                                                    </div>
                                                </div>
                                                {
                                                    product && product.reviews ?
                                                        product.reviews.map((review, index) => (
                                                            <div className="reviews mt-3 card p-4" key={index}>
                                                                <div id="rating-and-tagline"
                                                                     className="d-flex align-items-start gap-3">
                                                                    <h6 className="badge bg-success">{review.rating}</h6>
                                                                    <h6>{ratingTagline(review.rating)}</h6>
                                                                </div>
                                                                <p>{review.comment}</p>

                                                                <div id="reviewer-details" className="">
                                                                    <p>{review.reviewerName}</p>
                                                                    <p>
                                                                        <i className="fa fa-check-circle"></i> Certified
                                                                        user
                                                                    </p>
                                                                    <p>{(review.date).slice(0, 10)}</p>
                                                                </div>
                                                            </div>
                                                        ))
                                                        : "No reviews available"
                                                }
                                            </div>
                                        </div>
                                        : "No details Found"
                                }
                            </div>
                        </div>
                }
            </div>

            {/*added to cart card*/}
            {
                notificationVisible &&
                <div className="card container p-4" id="item-adding-notification">
                    <div className="cardbody text-center">
                        <h5 className="text-light">Item added to cart <i className="fa fa-check-circle"></i></h5>
                    </div>
                </div>
            }

            <div className="container-fluid bg-white m-0 p-0 mt-2" id="similarItems">
                <div className="items card" id='similar-item-card'>
                    <h3 className="mb-3 p-3">Similar Items</h3>

                    <SimilarItems/>

                </div>
            </div>
        </div>
    );
};
