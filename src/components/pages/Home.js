import Product from "../block/Product";

const Home = ({ products, productByName, addToCart, selectedCategory }) => {
    return (
        <>
            <h1>Results</h1>
            <div className="product-list">
                {products
                    ? products.map((product, index) => {
                        const productName = product.title.toLowerCase();
                        const searchTerm = productByName.toLowerCase();
                        const categoryMatches =
                            selectedCategory === "" ||
                            product.category === selectedCategory;
                        // Perform filtering here
                        if (productName.includes(searchTerm) && categoryMatches) {
                            return (
                                <Product
                                    index={index}
                                    key={product.id}
                                    image={product.image}
                                    productTitle={product.title}
                                    name={product.title}
                                    price={product.price}
                                    addToCart={addToCart}
                                    rating={product.rating}
                                />
                            );
                        } else {
                            return null;
                        }
                    })
                    : ""}
            </div>
        </>
    );
};

export default Home;
