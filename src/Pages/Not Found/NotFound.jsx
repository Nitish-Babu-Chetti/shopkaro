import React from "react";
import './NotFound.css'
import oops from '../../Images/notFound.jpg'

const NotFound = ()=>
{
    return(
        <div id="notFound" >
            <img src={oops} alt="" />
        </div>
    )
}
export default NotFound;