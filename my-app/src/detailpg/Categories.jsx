// import React from 'react'
// import axios from 'axios'
// import { useEffect ,useState} from 'react'



// const Categories = () => {
//     const api="https://fakestoreapi.com/products"
//     const[product,setProduct]=useState([])

//     useEffect(()=>{
//         axios.get(api)
//         .then(reponse=>{
// setProduct(reponse.data)
//             console.log(reponse.data)
//         })
//         .catch(error=>{
//             console.log(error)
//         })
//     },[])
//   return (
//     <div>
// {product.map(product => (
  
//           <div key={product.id} >
//             <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
//             <h3>{product.title}</h3>
//             <p>${product.price}</p>
//           </div>
//         ))}
            
//     </div>
//   )
// }

// export default Categories


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
  const api = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(api)
      .then(response => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div style={styles.container}>
      {product.map((product) => (
        <div key={product.id} style={styles.card}>
          <img
            src={product.image}
            alt={product.title}
            style={styles.image}
          />
          <h3 style={styles.title}>{product.title}</h3>
          <p style={styles.price}>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;

// Inline styling
const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'contain',
    marginBottom: '10px',
  },
  title: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
  },
};

