import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCategoryProducts, getAllCategoryProducts, getAllCategoryProductsFetchStatus } from "../../Fetch data/CategoryProductsFetch";
import { numberInIndianFormat } from "../../Components/NumberFormat";
import './similarItems.css';
import { Loader } from "../../Components/Loader/Loader";

const SimilarItems = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const products = useSelector(getAllCategoryProducts);
    const productsFetchStatus = useSelector(getAllCategoryProductsFetchStatus);

    useEffect(() => {
        if (category) {
            dispatch(fetchAsyncCategoryProducts(category));
        }
    }, [dispatch, category]);

    console.log(productsFetchStatus);

    return (
        <div id="products-page">
            <div className="container-fluid">
                {productsFetchStatus === "LOADING" ? (
                    <Loader />
                ) : products && products.length > 0 ? (
                    <div className="container-fluid" id="all-products">
                        {products.map((product) => (
                            <Link
                                to={`/products/${product.id}`}
                                key={product.id}
                                className="text-decoration-none"
                                id="category-products-cards"
                            >
                                <div className="card" id="category-product-card">
                                    <p id="category-tag">{product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}</p>
                                    <img src={product.thumbnail} alt="" id="product-img" />
                                    <p id="Product-title" className="m-0">{product?.title} </p>
                                    <p className="mt-1">&#8377;{numberInIndianFormat(product?.price * (1 - product?.discountPercentage / 100) * 83)}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    'No Items Found'
                )}
            </div>
        </div>
    );
};

export default SimilarItems;
