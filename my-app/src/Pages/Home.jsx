
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch categories from API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Fetch products (all or by category)
  useEffect(() => {
    const fetchProducts = async () => {
      const endpoint =
        selectedCategory === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${selectedCategory}`;

      try {
        const response = await axios.get(endpoint);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

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

      {/* Categories as Filter Buttons */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Shop by Category</h2>
          <div className="mb-4">
            <button
              className={`btn btn-outline-primary me-2 mb-2 ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`btn btn-outline-primary me-2 mb-2 ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">
            {selectedCategory === "all"
              ? "Popular Products"
              : `Category: ${selectedCategory}`}
          </h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="fw-bold">${product.price}</p>
                    <div className="mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          key={i}
                          className={
                            i < Math.round(product.rating.rate)
                              ? "text-warning"
                              : "text-muted"
                          }
                        />
                      ))}
                    </div>
                    <button className="btn btn-outline-warning mt-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {products.length === 0 && (
            <p className="text-center">No products found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;


// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css";
// import { useEffect,useState } from "react";
// import axios from 'axios';

// const Home = () => {

//     const api = "https://fakestoreapi.com/products";
//     const [product, setProduct] = useState([]);
         
//          useEffect(() => {
//     axios.get(api)
//       .then(response => {
//         setProduct(response.data);
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);


//   const categories = [
//     {
//       title: "Electronics",
//       image: "https://tse1.mm.bing.net/th?id=OIP.YDcRonh-CwSYw8e5JgIm6wHaEK&pid=Api&P=0&h=180"
//     },
//     {
//       title: "Fashion",
//       image: "https://tse4.mm.bing.net/th?id=OIP.vR4Fx1gRANDmzx4pdGjRPwHaEK&pid=Api&P=0&h=180"
//     },
//     {
//       title: "Home & Kitchen",
//       image: "https://tse1.mm.bing.net/th?id=OIP.Gm2Mwrvqgky4jEfZs1a95AHaEK&pid=Api&P=0&h=180"
//     }
//   ];

//   const products = [
//     {
//       name: "Wireless Headphones",
//       image: "https://tse2.mm.bing.net/th?id=OIP.6_3A3ohSHIHqW4qODtkkVQHaEK&pid=Api&P=0&h=180",
//       price: "$49.99",
//       rating: 4
//     },
//     {
//       name: "Smart Watch",
//       image: "https://tse3.mm.bing.net/th?id=OIP.9nAQZ8cnxNNa68IFrcal0QHaEo&pid=Api&P=0&h=180",
//       price: "$69.99",
//       rating: 5
//     },
//     {
//       name: "Blender",
//       image: "https://tse2.mm.bing.net/th?id=OIP.yLKrnuco7dD-ZInclRK4yQHaEo&pid=Api&P=0&h=180",
//       price: "$39.99",
//       rating: 3
//     },
//     {
//       name: "Sneakers",
//       image: "https://tse4.mm.bing.net/th?id=OIP.G01ot6vz0VbtTVK00KXf0AHaEK&pid=Api&P=0&h=180",
//       price: "$59.99",
//       rating: 4
//     }
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-light text-center py-5">
//         <div className="container">
//           <h1 className="display-5 fw-bold">Discover the Latest Trends</h1>
//           <p className="lead">Shop the best products at unbeatable prices.</p>
//           <button className="btn btn-warning btn-lg mt-3">Shop Now</button>
//         </div>
//       </section>

//       {/* Featured Categories */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-4">Featured Categories</h2>
//           <div className="row text-center">
//             {categories.map((category, i) => (
//               <div className="col-md-4 mb-4" key={i}>
//                 <div className="card p-3 shadow-sm">
//                   <img
//                     src={category.image}
//                     className="card-img-top"
//                     alt={`Featured Category: ${category.title}`}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{category.title}</h5>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

    
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center mb-4">Popular Products</h2>
//           <div className="row">
//             {products.map((product, idx) => (
//               <div className="col-md-3 mb-4" key={idx}>
//                 <div className="card h-100 shadow-sm">
//                   <img
//                     src={product.image}
//                     className="card-img-top"
//                     alt={product.name}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{product.name}</h5>
//                     <p className="card-text">{product.price}</p>
//                     <div className="mb-2">
//                       {[...Array(5)].map((_, i) => (
//                         <FontAwesomeIcon
//                           icon={faStar}
//                           className={i < product.rating ? "text-warning" : "text-muted"}
//                           key={i}
//                         />
//                       ))}
//                     </div>
//                     <button className="btn btn-outline-warning w-100">
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

     
//     </div>
//   );
// };

// export default Home;
