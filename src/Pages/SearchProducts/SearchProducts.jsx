import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchProducts, getAllSearchProducts} from "../../Fetch data/SearchSlice";
import {Link} from "react-router-dom";
import {numberInIndianFormat} from "../../Components/NumberFormat";
import './SearchProducts.css'

export const SearchProducts = ()=>
{
    const dispatch = useDispatch();

    let searchProducts = useSelector(getAllSearchProducts);


    console.log(searchProducts);

    return(
        <div id="searchProducts">
            <div className="container">
                <div className="d-flex align-items-center justify-content-around gap-3  flex-wrap">
                    {
                        searchProducts && searchProducts.length > 0 ?
                            searchProducts?.map((product , index)=>
                                (
                                    <Link to={`/products/${product.id}`} key={index}  className="text-decoration-none">
                                        <div className="card m-auto mt-4 p-2" key={index}>
                                            <p id="category-tag" className="w-75">{(product?.category.charAt(0).toUpperCase() + product?.category.slice(1))}</p>
                                            <img src={product.thumbnail} alt=""/>
                                            <p>{product?.title}</p>
                                            <p>&#8377;{numberInIndianFormat((product?.price * (1 - product?.discountPercentage / 100) * 83))}</p>
                                        </div>
                                    </Link>
                                ))
                            :
                            <div>
                                <h1>No items found</h1>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}