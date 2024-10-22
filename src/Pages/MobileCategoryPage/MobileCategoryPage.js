import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncCategories, getAllCategories, getAllCategoriesStatus} from "../../Fetch data/CategoryFetch";
import {Loader} from "../../Components/Loader/Loader";
import './MobileCategoryPage.css'
import {Link} from "react-router-dom";

export const MobileCategoryPage = () => {

    const dispatch = useDispatch();

    const categories = useSelector(getAllCategories)

    const categoryFetchStatus = useSelector(getAllCategoriesStatus)


    useEffect(()=>
    {
        dispatch(fetchAsyncCategories())
    } , [dispatch]);




    return (
        <div id="MobileCategoryPage">
            <div className="container" id="Categories-cards">
                {
                    categoryFetchStatus && categoryFetchStatus === "LOADING" ? <Loader/> :
                        categories.map((category , index)=>
                            (
                                <div className="card m-auto mt-4" key={index}>
                                    <div className="card-body">
                                        <Link to={`/products/category/${category}`}>
                                            {/*<img src={} alt=""/>*/}
                                            <button id="Category-name" className="btn">{(category).replace('-' , ' ' +
                                                '')}</button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                }
            </div>
        </div>
    )
}