import React from 'react';
import styled from 'styled-components';
import CartImageBox from './CartImageBox';
import CartInfoBox from './CartInfoBox';

function CartBox({ cartItems }) {
  return (
    <Container>
      <h1>장바구니</h1>
      {cartItems.map((item, idx) => {
        return (
          <Products key={idx}>
            <CartImageBox item={item} />
            <CartInfoBox item={item} />
          </Products>
        );
      })}
    </Container>
  );
}
export default CartBox;

const Container = styled.div`
  padding-right: 20px;
  h1 {
    font-size: 26px;
  }
`;
const Products = styled.div`
  margin: 20px 0;
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
`;
