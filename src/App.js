import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


import { Category } from "./Components/Category/Category"; // Ensure this is correct
import { BrowserRouter, Route, Routes ,Location , Switch } from "react-router-dom";
import { Homepage } from "./Pages/Hompage/Homepage"; // Ensure this is correct
import { ItemPage } from "./Pages/ItemPage/ItemPage"; // Ensure this is correct
import { ProductsPage } from "./Pages/ProductsPage/ProductsPage"; // Ensure this is correct
import { CategoryProducts } from "./Pages/CategoryProducts/CategoryProducts"; // Ensure this is correct
import { CartPage } from "./Pages/cartPage/CartPage"; // Ensure this is correct
import { Footer } from "./Components/Footer/Footer"; // Ensure this is correct
import { Sidebar } from "./Components/sidebar/Sidebar"; // Ensure this is correct
import { SearchProducts } from "./Pages/SearchProducts/SearchProducts"; // Ensure this is correct
import { WishListItems } from "./Pages/WishListItemsPage/WishListItems";
import {Navbar} from "./Components/Navbar/Navbar";
import {SignUpPage} from "./Pages/signUpPage/SignUpPage";
import {LoginPage} from "./Pages/LoginPage/Login";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {MobileCategoryPage} from "./Pages/MobileCategoryPage/MobileCategoryPage";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Navbar/>
                    <Sidebar />
                    <Category />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/search/:query" element={<SearchProducts />} />
                        <Route path="/products/:id" element={<ItemPage />} />
                        <Route path="/products/category/:category" element={<CategoryProducts />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/mobileCategoryPage" element={<MobileCategoryPage/>}/>
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/wishListItems" element={<WishListItems />} />
                        <Route path="/signUp" element={<SignUpPage/>}/>
                        <Route path="/Login" element={<LoginPage/>}/>
                        {/*<TransitionGroup>*/}
                        {/*    <CSSTransition>*/}
                        {/*        <Switch>*/}

                        {/*        </Switch>*/}
                        {/*    </CSSTransition>*/}
                        {/*</TransitionGroup>*/}
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
