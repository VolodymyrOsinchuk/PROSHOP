import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  Button,
  Card,
  Col, 
  Form, 
  Image,
  ListGroup,
  Row
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
import { API } from "../config/config";

const ProductScreen = ({ match }) => {
  //console.log('history >>> ', history);
  console.log('match >> ', match);
  
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);

 console.log('product', product);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`${API}/api/products/${product._id}`);
console.log("data", data)
      setProduct(data)
    }

    fetchProduct();
  }, [product._id]);

  const addToCartHandler = () => {
    return <Navigate to={`/cart/${match.params.id}?qty=${qty}`} />
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating 
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? "In stock": "Out Of Stock"}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Qty
                    </Col>
                    <Col>
                      <Form.Control 
                        as="select" 
                        variant={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}


              <ListGroup.Item>
                <Button   
                  className="btn-block" 
                  type="button"
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Add to cart 
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
