const Cart = ({ cartItems, removeFromCart }) => {
  let total = 0;
  return (
    <>
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          <>
            <table>
              <tbody>
                {cartItems.map((cartItem) => {
                  total += cartItem.price;
                  return (
                    <tr key={cartItem.index}>
                      <td className="product-image">
                        <img src={cartItem.image} alt={cartItem.productTitle} />
                      </td>
                      <td className="product-name">{cartItem.productTitle}</td>
                      <td className="product-price">${cartItem.price}</td>
                      <td className="remove-item">
                        <button onClick={() => removeFromCart(cartItem.index)}>
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Total amount of Minicart items */}
            <div className="total">
              <strong>
                <p>Total Amount: ${total.toFixed(2)}</p>
              </strong>
            </div>
          </>
        ) : (
          <>
            <h1>No Product added in cart</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
