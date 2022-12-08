import React from 'react';
import styled from 'styled-components';
import CartImageBox from './CartImageBox';
import CartInfoBox from './CartInfoBox';

function CartBox({ cartItems }) {
  return (
    <Container>
      <h1>장바구니</h1>
      {cartItems.length === 0 || cartItems === null ? (
        <Products>
          <Empty>장바구니에 담긴 상품이 없습니다.</Empty>
        </Products>
      ) : (
        cartItems.map((item, idx) => {
          return (
            <Products key={idx}>
              <CartImageBox item={item} />
              <CartInfoBox item={item} />
            </Products>
          );
        })
      )}
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
const Empty = styled.span`
  font-size: 22px;
  width: 600px;
  color: ${({ theme }) => theme.colors.charcoal};
`;
