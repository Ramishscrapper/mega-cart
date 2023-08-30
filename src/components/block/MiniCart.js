import { Link } from "react-router-dom";
const MiniCart = ({ cartItems, isActive, setActive, removeFromCart }) => {
  let minicartTotal = 0;

  const cartAction = () => {
    setActive(false);
  };

  return (
    <>
      <div className={`minicart-wrapper ${isActive ? "active" : ""}`}>
        <div className="close-minicart" onClick={() => setActive(false)}>
          &#10060;
        </div>
        {cartItems.length > 0 ? (
          <>
            <div className="product-listing">
              <ul>
                {cartItems.map((cartItem) => {
                  minicartTotal += cartItem.price;
                  return (
                    <>
                      <li key={cartItem.index}>
                        <div className="minicart-product">
                          <div className="product-image">
                            <img
                              src={cartItem.image}
                              alt={cartItem.productTitle}
                            />
                          </div>
                          <div className="product-details">
                            <div className="name">
                              <p>{cartItem.productTitle}</p>
                            </div>
                            <div className="price">
                              <p>
                                <strong>${cartItem.price}</strong>
                              </p>
                            </div>
                            <div className="remove-cart-item">
                              <button
                                onClick={() => removeFromCart(cartItem.index)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="total">
              <div className="text">
                <span>Total Amount: </span>
              </div>
              <div className="price">
                <strong>${minicartTotal}</strong>
              </div>
            </div>
            <div className="cart-action">
              <Link to="/cart" onClick={cartAction}>
                View in cart
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="no-item-found">
              <p>You have no items in your shopping cart.</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MiniCart;
