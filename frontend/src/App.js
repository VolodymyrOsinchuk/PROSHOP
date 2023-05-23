import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';
import CartScreen from './screens/CartScreen.jsx';

const App = () => {
  return (
    <Router>
     <Header />
      <main className="py-3">
        <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />}/>
          <Route path="/product/:id" element={<ProductScreen />}/>
          <Route path="/cart/:id?" element={<CartScreen />}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
