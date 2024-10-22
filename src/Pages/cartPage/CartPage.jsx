import React, {useEffect, useState} from 'react';
import {
    getCartItems,
    getCartTotalDiscount,
    getCartTotalPrice,
    loadItemsFromCart,
    removeItemFromCart , updateQuantity
} from "../../url/AddCartAndRemoveCart";
import {useDispatch, useSelector} from "react-redux";
import {numberInIndianFormat} from "../../Components/NumberFormat";
import './CartPage.css'
import {addToWishList} from "../../url/wishList";
import {Link} from "react-router-dom";

export const CartPage = () => {

    let dispatch = useDispatch();

    let cartItems = useSelector(getCartItems);

    let cartTotalPrice = useSelector(getCartTotalPrice);

    let cartTotalDiscount = useSelector(getCartTotalDiscount)

    let [cartItemsCount , setCartItemsCount] = useState(0);

    useEffect(() => {
        dispatch(loadItemsFromCart())
    }, [dispatch]);

    const removeFromCart = (itemId)=>
    {
        dispatch(removeItemFromCart(itemId));
    }

    const moveToWishList = (item , itemId)=>
    {
        dispatch(addToWishList(item))
        dispatch(removeItemFromCart(itemId))
    }

    const handleQuantityChange = (e , itemid) =>
    {
        const selectedQuantity  = parseInt(e.target.value);
        dispatch(updateQuantity({id : itemid, quantity : selectedQuantity}))
    }


    return (
        <div id="cart-page" className="container">
            <div id="cart-left-part">
                <div className=" mt-3 text-dark text-center p-3" >
                    <p id="header">Cart Items</p>
                </div>
                <div className="container">
                    <div className="mt-2" id="cart-items-card">
                        {
                            cartItems && cartItems?.map((item, index) => (
                                <div key={index}  >
                                    <div id="each-item">

                                            <div className="" id="cart-items">
                                                <Link to={`/products/${item.id}`} key={index} id="no-text-decoration">
                                                    <img src={item?.images[0]} alt=""/>
                                                </Link>
                                                <div className="item-details">
                                                    <h5 className="text-start">{item.title}</h5>
                                                    <div id="price-details" className="d-flex gap-2">
                                                        <strike
                                                            className="text-muted">&#8377;{numberInIndianFormat(item.price * 83)}</strike>
                                                        <p>&#8377;{numberInIndianFormat((item?.price * (1 - item?.discountPercentage / 100) * 83))}</p>
                                                        <p className="text-success fw-bold">{item?.discountPercentage}%
                                                            off</p>
                                                    </div>
                                                    {
                                                        item && item.quantity>1 ?
                                                            <div>
                                                                <label htmlFor="quantitySelect">Quantity : </label>
                                                                <select name="" id="quantitySelect" className="p-1 mx-3" value={item?.quantity}
                                                                        onChange={(e) => handleQuantityChange(e, item.id)}  >
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                </select>
                                                            </div> : null
                                                    }
                                                </div>
                                                <p className="mx-3">{item.shippingInformation}</p>
                                            </div>
                                        <div id="btns">
                                            <button className="remove-btn"
                                                    onClick={() => removeFromCart(item.id)}>Remove
                                            </button>
                                            <button className="wishlist-btn" onClick={() => moveToWishList(item , item.id)}>Wishlist
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div id="cart-right-part">
                <div className="card p-4">
                    <div className="card-header bg-transparent">
                        <h4 className="text-muted fw-bold">Price Details</h4>
                    </div>
                    <div className="card-body">
                        <h5>Price ({cartItems.length} items) : &#8377;{numberInIndianFormat(cartTotalPrice)}</h5>
                        <h6>Total Discount :
                            <span
                                className="fw-bold badge bg-success mx-2"> {numberInIndianFormat(cartTotalDiscount)}%off</span>
                        </h6>
                    </div>
                    <div className="card-footer bg-transparent">
                        <button id="pay-btn">Proceed to Pay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}