import React from 'react';
import styled from 'styled-components';
import CountBox from './CountBox';
import DeleteBox from './DeleteBox';

function CartInfoBox(props) {
  const { item, cartItems, setCartItems } = props;
  return (
    <Container>
      <InfoBox>
        <Info>
          <h5>{item.category}</h5>
          <h4>{item.item_name}</h4>
          <CountBox
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </Info>
        <Price>
          <h3>{item.totalPrice.toLocaleString()}</h3>
          <p>원</p>
        </Price>
      </InfoBox>
      <DeleteBox
        item={item}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </Container>
  );
}
export default CartInfoBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const Info = styled.div`
  min-width: 400px;
  h5 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.camel};
    padding: 10px 0;
  }
  h4 {
    font-size: 22px;
    letter-spacing: 1px;
    padding: 10px 0;
  }
`;
const Price = styled.div`
  padding: 10px 0 0 20px;
  display: flex;
  justify-content: center;
  h3 {
    font-size: 22px;
  }
`;
