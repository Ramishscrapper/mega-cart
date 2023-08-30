import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/icons/cart.svg";
import Search from "../../assets/images/icons/search.svg";
import { useState } from "react";
import MiniCart from "../block/MiniCart";

const Header = ({
    productByName,
    setProductName,
    cartItems,
    categories,
    selectedCategory,
    setSelectedCategory,
    removeFromCart
}) => {
    const [isActive, setActive] = useState(false);

    // Toggle class "active" on click cart button
    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="page-header">
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="search">
                            <div className="field">
                                <div className="category-buttons">
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value="">All</option>
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <label htmlFor="search">
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        placeholder="Search here..."
                                        value={productByName} // Attach search term to input value
                                        onChange={(e) => setProductName(e.target.value)} // Step 2
                                    />
                                </label>
                                <div className="search-icon">
                                    <img src={Search} alt="search" />
                                </div>
                            </div>
                        </div>
                        <div className="cart">
                            <button onClick={handleToggle} className={isActive ? "active" : null}>
                                <span className="icon">
                                    <img src={Cart} alt="cart" />
                                </span>
                                <span className="text">Cart</span>
                                {cartItems.length > 0 ? (
                                    <>
                                        <span className="counter">{cartItems.length}</span>
                                    </>
                                ) : (
                                    ""
                                )}
                            </button>
                            <MiniCart cartItems={cartItems} isActive={isActive} setActive={setActive} removeFromCart={removeFromCart} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
