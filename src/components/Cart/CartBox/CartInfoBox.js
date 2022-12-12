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
  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 14px;
  }
  @media ${({ theme }) => theme.device.galaxy_fold} {
    padding-left: 6px;
  }
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  @media ${({ theme }) => theme.device.tablet} {
    padding-bottom: 0px;
  }
`;
const Info = styled.div`
  min-width: 400px;
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 200px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 120px;
  }
  @media ${({ theme }) => theme.device.galaxy_fold} {
    min-width: 80px;
  }
  h5 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.camel};
    padding: 10px 0;
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 14px;
    }
    @media ${({ theme }) => theme.device.galaxy_fold} {
      font-size: 12px;
    }
  }
  h4 {
    font-size: 22px;
    letter-spacing: 1px;
    padding: 10px 0;
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 18px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 16px;
    }
    @media ${({ theme }) => theme.device.galaxy_fold} {
      font-size: 14px;
    }
  }
`;
const Price = styled.div`
  padding: 10px 0 0 20px;
  display: flex;
  justify-content: center;
  h3 {
    font-size: 22px;
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 18px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 16px;
    }
    @media ${({ theme }) => theme.device.galaxy_fold} {
      font-size: 14px;
    }
  }
`;
