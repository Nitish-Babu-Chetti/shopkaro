import React from "react";
import './Login.css'
import {Link} from "react-router-dom";

export const LoginPage = () => {

    const[onFocus , setOnFocus] = React.useState(false);

    const handleFocus = ()=> setOnFocus(true)
    const [inputValue, setInputValue] = React.useState('');

    const handleBlur = (e)=>
    {
        if (e.target.value === '')
        {
            setOnFocus(false)
        }
    }

    return (
        <div id="SignUpPage">
            <div className="container">
                <div className="card border-0">
                    <div className="row card-body">
                        <div className={`col-md-6 mt-5 `} id="login-right-part">
                            <form action="">
                                <div className={`input-container${onFocus || inputValue ? 'focused' : ''}`}>
                                    <label htmlFor="m-number" id="m-number-label">Enter your Mobile Number (+91)</label>
                                    <input type="number"
                                           maxLength={10}
                                           minLength={10}
                                           id="m-number"
                                           className="w-100"
                                           onFocus={handleFocus}
                                           onBlur={handleBlur}
                                           onChange={(e) => setInputValue(e.target.value)}
                                           required
                                    />
                                    <p className="mt-5">By continuing, you agree to Flipkart's <a href="#">Terms of
                                        Use</a> and <a className="text-decoration-none"
                                        href="#">Privacy Policy</a>.</p>
                                </div>
                                <button className="btn form-control mt-2" id="otp-btn">Get OTP</button>
                                <Link to={'/signUp'}>
                                    <button className="btn form-control mt-2" id="login-btn">New Member ? Click here to
                                        Signup
                                    </button>
                                </Link>
                            </form>
                        </div>
                        <div className="col-md-4  d-flex align-items-center justify-content-center"
                             id="login-left-part">
                            <div className=" text-light p-3">
                                <h3>Hey Member !</h3>
                                <p>Login Here To get Access to your Cart and Wishlist Items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}