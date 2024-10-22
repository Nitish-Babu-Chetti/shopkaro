import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getWishListItems, loadWishListItems, removeItemFromWishList} from "../../url/wishList";
import {Link} from "react-router-dom";
import {numberInIndianFormat} from "../../Components/NumberFormat";
import './WishListItems.css'
import {addToCart} from "../../url/AddCartAndRemoveCart";

export const WishListItems = ()=>
{
    const dispatch = useDispatch();

    const wishListItems = useSelector(getWishListItems)

    useEffect(()=>
    {
        dispatch(loadWishListItems())
    } , [dispatch])

    const moveToCart = (item , itemId)=>
    {
        dispatch(addToCart(item))
        dispatch(removeItemFromWishList(itemId))
    }

    const handleRemoveFromWishlist = (itemId)=>
    {
        dispatch(removeItemFromWishList(itemId))
    }

    return (
        <div id="wishlistItems-page">
            <div className="container d-flex flex-wrap gap-4 align-items-center justify-content-around">
                {
                    wishListItems && wishListItems.length > 0 ?
                        wishListItems.map((item , index)=>
                            (
                                    <div className="card text-center p-2 mt-4">
                                        <Link to={`/products/${item.id}`} key={index} className="text-decoration-none text-dark">

                                            <img src={item?.thumbnail} alt="Product Image"/>
                                            <p>{item?.title}</p>
                                            <p>&#8377;{numberInIndianFormat((item?.price * (1 - item?.discountPercentage / 100) * 83))}</p>
                                        </Link>
                                        <div id="buttons">
                                            <button className="btn btn-outline-secondary" onClick={()=> moveToCart(item , item.id)}>Move to Cart</button>
                                            <button className="btn btn-outline-secondary" onClick={()=> handleRemoveFromWishlist(item.id)}>Remove From Wishlist</button>
                                        </div>
                                    </div>
                            ))
                        :
                        "no items found"
                }
            </div>
        </div>
    )
}
