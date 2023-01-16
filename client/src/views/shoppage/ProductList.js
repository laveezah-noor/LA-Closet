import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Product.css";

const ProductList = () => {
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [sort, setSort] = useState("");

// useEffect(() => {
// axios
// .get("https://my-ecommerce-site.com/api/products")
// .then((res) => setProducts(res.data))
// .catch((err) => console.log(err));
// }, []);

useEffect(() => {
if (sort === "") {
setFilteredProducts(products);
} else {
const sortedProducts = [...products].sort((a, b) => {
if (sort === "lowest") {
return a.price - b.price;
} else if (sort === "highest") {
return b.price - a.price;
}
});
setFilteredProducts(sortedProducts);
}
}, [sort, products]);

const handleSortChange = (e) => {
setSort(e.target.value);
};

return (
<div className="product-list-container">
<div className="sort-container">
<label>Sort by:</label>
<select onChange={handleSortChange}>
<option value="">Select</option>
<option value="lowest">Price: Lowest to Highest</option>
<option value="highest">Price: Highest to Lowest</option>
</select>
</div>
<div className="product-list">
{filteredProducts.map((product) => (
<div className="product-card" key={product.id}>
<img src={product.image} alt={product.name} />
<div className="product-info">
<h3>{product.name}</h3>
<p>Price: ${product.price}</p>
<button>Add to Cart</button>
</div>
</div>
))}
</div>
</div>
);
};

export default ProductList;