import React from "react";
import './SignUpPage.css'
import {Link} from "react-router-dom";

export const SignUpPage = () => {

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
                        <div className="col-md-4  d-flex align-items-center justify-content-center" id="login-left-part">
                            <div className=" text-light p-3">
                                <h3>Looks Like you are new to here!</h3>
                                <h6>Sign up here and evolve in this Beautiful Place</h6>
                                <p>Sign up here with your mobile number to get Started</p>
                            </div>
                        </div>
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
                                        Use</a> and <a
                                        href="#">Privacy Policy</a>.</p>
                                </div>
                                <button className="btn form-control mt-2" id="otp-btn">Get OTP</button>
                                <Link to={'/Login'}>
                                    <button className="btn form-control mt-2" id="login-btn">Alreay Member ? Click here
                                        to Login
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}