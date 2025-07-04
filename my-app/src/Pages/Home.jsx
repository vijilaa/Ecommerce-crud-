import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

// Category to image mapping
const categoryImages = {
  "men's clothing": "https://tse4.mm.bing.net/th?id=OIP.NVwvQr0NaKhY2CVnqvEFZgHaE8&pid=Api&P=0&h=180",
  "women's clothing": "https://tse4.mm.bing.net/th?id=OIP.M8zOmLVOnBUUnAlvwd624AHaE8&pid=Api&P=0&h=180",
  "jewelery": "https://images.pexels.com/photos/13918657/pexels-photo-13918657.jpeg?auto=compress&cs=tinysrgb&w=300",
  "electronics": "https://media.istockphoto.com/id/918381560/photo/eletronic-department-store-with-bokeh-blurred-background.jpg?b=1&s=612x612&w=0&k=20&c=tWPGxzh6vBPIZICNqZmqE8fT-ioecJEJfh9nz1omibA=",
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        console.log(res.data)
        setProducts(res.data);
        const uniqueCategories = [...new Set(res.data.map(p => p.category))];
        setCategories(uniqueCategories);
      })
      .catch(err => console.error("API Error", err));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Discover the Latest Trends</h1>
          <p className="lead">Shop the best products at unbeatable prices.</p>
          <button className="btn btn-lg mt-3">Shop Now</button>
        </div>
      </section>

      {/* Dynamic Categories */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Shop by Category</h2>
          <div className="row text-center">
            {categories.map((category, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div
                  className="card p-3 shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/category/${encodeURIComponent(category)}`)}
                >
                  <img
                    src={categoryImages[category] || "https://via.placeholder.com/300x150.png?text=Category"}
                    className="card-img-top"
                    alt={`Category: ${category}`}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{category}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Popular Products</h2>
          <div className="row">
            {products.slice(0, 8).map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <div className="mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          className={i < Math.round(product.rating.rate) ? "text-warning" : "text-muted"}
                          key={i}
                        />
                      ))}
                      <small className="ms-2 text-muted">({product.rating.count})</small>
                    </div>
                    <button className="btn btn-outline-warning w-100">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
