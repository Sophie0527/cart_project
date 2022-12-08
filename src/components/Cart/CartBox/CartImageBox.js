import React from 'react';
import styled from 'styled-components';

function CartImageBox({ item }) {
  return (
    <Container>
      <img src={item.image_url} alt={item.item_name} />
      {item.availableCoupon !== false && (
        <AvailableCoupon>
          <span>Coupon</span>
        </AvailableCoupon>
      )}
    </Container>
  );
}
export default CartImageBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    transition: all 0.2s linear;
    :hover {
      transform: scale(1.1);
    }
  }
`;
const AvailableCoupon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.camel};
  width: 100px;
  height: 30px;
  transform: translate(0%, -250%);
  border-radius: 0px 20px;
  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;
