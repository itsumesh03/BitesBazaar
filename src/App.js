import './App.css';
import Header from './Components/Layout/Header';
import React,{useState} from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import Footer from './Components/Footer/Footer';
import Features from './Components/Features/Features';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  const[cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    // <div className='body'>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
      
        <main>
        <Meals />
        <Features />
        <Testimonials />
        </main>
         <Footer />
      </CartProvider>
     
    // </div>
  );
}

export default App;

