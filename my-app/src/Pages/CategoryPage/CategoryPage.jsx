import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryPage = () => {
  const { name } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        const filtered = res.data.filter(product => product.category === name);
        setCategoryProducts(filtered);
      })
      .catch(err => console.error(err));
  }, [name]);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-capitalize">{name} Products</h2>
      <div className="row">
        {categoryProducts.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <p className="text-muted">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
