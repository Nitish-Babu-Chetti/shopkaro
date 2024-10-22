import React, {useEffect} from 'react';
import {fetchAsyncCategories, getAllCategories} from "../../Fetch data/CategoryFetch";
import {useDispatch, useSelector} from "react-redux";
import './Category.css'
import {Link} from "react-router-dom";

export const Category = () => {
    const dispatch = useDispatch();

    const categories = useSelector(getAllCategories);


    useEffect(() => {
        dispatch(fetchAsyncCategories())
    }, [dispatch]);

    const formatCategoryName = (categoryName)=>
    {
        if(categoryName.length > 0)
        {
            let replaceHypens = categoryName.replace(/-/g , ' ');

            return replaceHypens.charAt(0).toUpperCase() + replaceHypens.slice(1);
        }
    }

    return (
        <div id="Category" className="w-100">
            <div className="container-fluid">
                {categories.map((category, index) => (
                    <Link to={`/products/category/${category}`} key={index} className="text-decoration-none">
                        <div className="categories d-flex" id="categories-block" >
                            <a href="#" className="text-decoration-none text-dark">{formatCategoryName(category)}</a>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
