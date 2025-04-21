
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Discover the Latest Trends</h1>
          <p className="lead">Shop the best products at unbeatable prices.</p>
          <button className="btn btn-warning btn-lg mt-3">Shop Now</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Categories</h2>
          <div className="row text-center">
            {["Electronics", "Fashion", "Home & Kitchen"].map((category, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card p-3 shadow-sm">
                  <img
                    src={`https://cdn.shopify.com/s/files/1/0507/2096/4799/files/69538118_1155314721525528_580174988481396736_o_e27c6c1b-1157-48f4-9a58-62d088f9692d.jpg?v=1617184893=${category}`}
                    className="card-img-top"
                    alt={category}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Popular Products</h2>
          <div className="row">
            {[1, 2, 3, 4].map((item) => (
              <div className="col-md-3 mb-4" key={item}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={`https://via.placeholder.com/250x200?text=Product+${item}`}
                    className="card-img-top"
                    alt={`Product ${item}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Product {item}</h5>
                    <p className="card-text">$49.99</p>
                    <div className="mb-2">
                      {[...Array(5)].map((_, idx) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          className={idx < 3 ? "text-warning" : "text-muted"}
                          key={idx}
                        />
                      ))}
                    </div>
                    <button className="btn btn-outline-warning w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} OUR SHOP. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
