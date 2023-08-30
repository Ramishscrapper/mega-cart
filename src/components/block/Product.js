import EmptyStars from "./../../assets/images/icons/grey-star.svg";
import FillStars from "./../../assets/images/icons/yellow-star.svg";

const Product = ({
  index,
  id,
  image,
  productTitle,
  name,
  price,
  addToCart,
  rating,
}) => {
  /**
   * For Rating getting idea from this article
   * https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6
   */
  const fillStars = Math.round(rating.rate);

  return (
    <div className="product-list-item" index={index} key={id}>
      <div className="product-block">
        <div className="product-image">
          <img src={image} alt={productTitle} loading="lazy" />
        </div>
        <div className="product-details">
          <div className="product-info">
            <div className="product-name">
              <p>{name}</p>
            </div>
            <div className="product-price">
              <p>${price}</p>
            </div>
          </div>
          <div className="product-action">
            <div className="ratings">
              <div className="stars">
                <div className="empty-star">
                  {/* Render empty-stars */}
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      <img src={EmptyStars} alt="star" width={15} height={15} />
                    </span>
                  ))}
                </div>
                <div className="fill-star">
                  {/* Render fill-stars */}
                  {[...Array(fillStars)].map((_, i) => (
                    <span key={i}>
                      <img src={FillStars} alt="star" width={15} height={15} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="add-to-cart">
              <button
                onClick={() =>
                  addToCart({
                    index,
                    id,
                    image,
                    productTitle,
                    name,
                    price,
                    addToCart,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
