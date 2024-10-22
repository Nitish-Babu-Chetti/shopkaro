import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCategories, getAllCategories } from "../../Fetch data/CategoryFetch";
import './Sidebar.css';
import { Link } from "react-router-dom";

export const Sidebar = ({ sidebarStatus, handleSideBarToggle }) => {
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);
    const sidebarRef = useRef(null);

    useEffect(() => {
        dispatch(fetchAsyncCategories());
    }, [dispatch]);

    const formatCategoryName = (category) => {
        if (category.length > 0) {
            let replaceHyphens = category.replace(/-/g, ' ');
            return replaceHyphens.charAt(0).toUpperCase() + replaceHyphens.slice(1);
        }
        return category;
    }

    const capitalizeAfterSpace = (str) => {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    useEffect(()=>
    {
        const handleOutsideClick = (event)=>
        {
            if(sidebarRef.current && !sidebarRef.current.contains(event.target))
            {
                handleSideBarToggle(false);
            }
        }

        if(sidebarStatus)
        {
            window.addEventListener('mousedown' , handleOutsideClick)
        }

        return ()=>
        {
            window.removeEventListener('mousedown' , handleOutsideClick)
        }
    } , [sidebarStatus ,  handleSideBarToggle])

    return (
        <div ref={sidebarRef} id="category-menu" className={`sidebar ${sidebarStatus ? 'open' : 'close'}`}>
            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <p>Categories</p>
                    <button id="toggleBtn" onClick={() => handleSideBarToggle(false)}>
                        <i className="fa fa-close"></i>
                    </button>
                </div>
                {categories?.length > 0 && categories.map((category, index) => (
                    <div key={index} className="card-body">
                        <Link to={`products/category/${category}`}>
                            {capitalizeAfterSpace(formatCategoryName(category))}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
