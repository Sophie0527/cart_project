import React from 'react';
import styled from 'styled-components';

function CountBox(props) {
  const { item, cartItems, setCartItems } = props;

  const countUp = () => {
    const countUpData = cartItems.map((newItemData) => {
      if (newItemData.item_no === item.item_no) {
        return {
          ...newItemData,
          count: newItemData.count + 1,
          totalPrice: newItemData.totalPrice + item.price,
        };
      } else {
        return {
          ...newItemData,
        };
      }
    });
    localStorage.setItem('cart_megachang', JSON.stringify(countUpData));
    setCartItems(countUpData);
  };

  const countDown = () => {
    if (item.count > 1) {
      const countDownData = cartItems.map((newItemData) => {
        if (newItemData.item_no === item.item_no) {
          return {
            ...newItemData,
            count: newItemData.count - 1,
            totalPrice: newItemData.totalPrice - item.price,
          };
        } else {
          return {
            ...newItemData,
          };
        }
      });
      localStorage.setItem('cart_megachang', JSON.stringify(countDownData));
      setCartItems(countDownData);
    }
  };

  return (
    <Container>
      <ButtonBox>
        <Button onClick={countDown}>-</Button>
        <span>{item.count}</span>
        <Button onClick={countUp}>+</Button>
      </ButtonBox>
    </Container>
  );
}
export default CountBox;

const Container = styled.div`
  display: flex;
  padding: 10px 0;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lt_beige};
  border: 1px solid ${({ theme }) => theme.colors.beige};
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    @media ${({ theme }) => theme.device.tablet} {
      width: 24px;
      height: 24px;
    }
    @media ${({ theme }) => theme.device.galaxy_fold} {
      width: 18px;
      height: 18px;
    }
  }
`;
const Button = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium_3};
  background-color: ${({ theme }) => theme.colors.lt_beige};
  color: ${({ theme }) => theme.colors.charcoal};
  @media ${({ theme }) => theme.device.tablet} {
    width: 26px;
    height: 26px;
  }
  @media ${({ theme }) => theme.device.galaxy_fold} {
    font-size: ${({ theme }) => theme.fontSize.medium};
    width: 20px;
    height: 20px;
  }
`;
