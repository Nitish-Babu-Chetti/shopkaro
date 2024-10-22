import React, {useEffect} from "react";
import './ProductsPage.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncProducts, getAllProducts, getProductFetchStatus} from "../../Fetch data/CategoryFetch";
import {Link} from "react-router-dom";


export const ProductsPage = () =>
{
    const dispatch = useDispatch();

    const products = useSelector(getAllProducts);
    const productsFetchStatus = useSelector(getProductFetchStatus);

    useEffect(()=>
    {
        dispatch(fetchAsyncProducts())
    } , [dispatch])


    return (
        <div className="" id="products-page">
            <div className="container-fluid">
                {products && products.length > 0 ?
                    <div className="container-fluid"  >
                        {products && products.map((product , index)=>
                            (
                                <Link to={`/products/${product.id}`} key={product.id} className="text-decoration-none m-auto" id="all-products">
                                    <div className="card m-auto mt-4" key={index}>
                                        <p id="category-tag">{(product?.category.charAt(0).toUpperCase() + product?.category.slice(1))}</p>
                                        <img src={product.thumbnail} alt=""/>
                                        <p>{product?.title}</p>
                                        <p>&#8377;{(product?.price * 83).toFixed(2)}</p>
                                    </div>
                                </Link>
                            ))}
                    </div> :
                    'No items found'
                }
            </div>
        </div>
    )
}