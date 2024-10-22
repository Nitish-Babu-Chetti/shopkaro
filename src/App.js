import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Category } from "./Components/Category/Category"; 
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Use HashRouter
import { Homepage } from "./Pages/Hompage/Homepage"; 
import { ItemPage } from "./Pages/ItemPage/ItemPage"; 
import { ProductsPage } from "./Pages/ProductsPage/ProductsPage"; 
import { CategoryProducts } from "./Pages/CategoryProducts/CategoryProducts"; 
import { CartPage } from "./Pages/cartPage/CartPage"; 
import { Footer } from "./Components/Footer/Footer"; 
import { Sidebar } from "./Components/sidebar/Sidebar"; 
import { SearchProducts } from "./Pages/SearchProducts/SearchProducts"; 
import { WishListItems } from "./Pages/WishListItemsPage/WishListItems";
import { Navbar } from "./Components/Navbar/Navbar";
import { SignUpPage } from "./Pages/signUpPage/SignUpPage";
import { LoginPage } from "./Pages/LoginPage/Login";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { MobileCategoryPage } from "./Pages/MobileCategoryPage/MobileCategoryPage";
import NotFound from './Pages/Not Found/NotFound';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Navbar />
                    <Sidebar />
                    <Category />
                    <TransitionGroup>
                        <CSSTransition classNames="fade" timeout={300}>
                            <Routes>
                                <Route path="/" element={<Homepage />} />
                                <Route path="/search/:query" element={<SearchProducts />} />
                                <Route path="/products/:id" element={<ItemPage />} />
                                <Route path="/products/category/:category" element={<CategoryProducts />} />
                                <Route path="/products" element={<ProductsPage />} />
                                <Route path="/mobileCategoryPage" element={<MobileCategoryPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/wishListItems" element={<WishListItems />} />
                                <Route path="/signUp" element={<SignUpPage />} />
                                <Route path="/Login" element={<LoginPage />} />
                                <Route path="*" element={<NotFound />} /> {/* Fallback route */}
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                    <Footer />
                </Router>
            </header>
        </div>
    );
}

export default App;
