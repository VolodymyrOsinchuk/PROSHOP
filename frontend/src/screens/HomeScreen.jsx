import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
//import { listProducts } from "
import axios from "axios";


const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
      setLoading(false)
    }

    fetchProduct();
  }, []);

  return (
    <>
      <h1>Latest ¨Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
      <Row>
        {products.map((product) => {
          return (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
             <Product product={product}/>
          </Col>
          )
        })}
      </Row>

      )}
    </>
  );
};

export default HomeScreen;
