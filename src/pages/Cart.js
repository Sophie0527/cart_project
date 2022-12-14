import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import CartBox from '../components/Cart/CartBox/CartBox';
import OrderBox from '../components/Cart/OrderBox/OrderBox';
import Footer from '../components/Footer/Footer';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart_megachang')) || [];
    setCartItems(data);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CartBox cartItems={cartItems} setCartItems={setCartItems} />
        <OrderBox cartItems={cartItems} />
      </Container>
      <Footer />
    </>
  );
}
export default Cart;

const Container = styled.div`
  min-height: 860px;
  padding: 100px 40px;
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.device.tabletL} {
    flex-direction: column;
    padding: 50px 20px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    padding: 20px 10px;
    justify-content: flex-start;
    min-height: 500px;
  }
`;
