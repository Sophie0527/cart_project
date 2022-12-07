import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function InfoBox({ item }) {
  // 장바구니에 담긴 상품
  const cartItems = JSON.parse(localStorage.getItem('cart_megachang')) || [];
  // 장바구니 상품리스트에 있는 상품이라면, true!
  const isCarted = cartItems.some(
    (cartItem) => cartItem.item_no === item.item_no
  );

  const [isCart, setIsCart] = useState(false);
  // 장바구니 아이콘 클릭시 이벤트
  const handleAddCart = () => {
    // setIsCart(!isCart);
    const count = 1;
    const totalPrice = item.price * count;
    const newData = {
      ...item,
      count,
      check: !isCart,
      totalPrice,
    };
    // < 상품 리스트 내 장바구니 버튼 선택 했을 때 >
    // 조건 1) 장바구니에 데이터가 null일 경우, 새로 만든 데이터를 보냄.
    // 조건 2) 장바구니에 이미 있는 상품일 경우, 장바구니에서 삭제.
    // 조건 3) 장바구니에 없는 상품일 경우, 장바구니에 상품 담기.
    if (localStorage.getItem('cart_megachang') === null) {
      localStorage.setItem('cart_megachang', JSON.stringify([newData]));
    } else {
      if (isCarted) {
        localStorage.setItem(
          'cart_megachang',
          JSON.stringify(
            cartItems.filter((cartItem) => cartItem.item_no !== newData.item_no)
          )
        );
      } else {
        localStorage.setItem(
          'cart_megachang',
          JSON.stringify([
            newData,
            ...JSON.parse(localStorage.getItem('cart_megachang')),
          ])
        );
      }
    }
    setIsCart(!isCart);
  };

  return (
    <Container>
      <h5>
        {item.category === '커튼' && 'Curtain'}
        {item.category === '블라인드' && 'Blind'}
      </h5>
      <h4>{item.item_name}</h4>
      <Price>
        <h3>{item.price.toLocaleString()}</h3>
        <p>원</p>
      </Price>
      <CartBtn onClick={handleAddCart}>
        <FontAwesomeIcon
          icon={faCartShopping}
          color={isCarted ? '#82593f' : '#FFFFFF'}
          alt="장바구니"
        ></FontAwesomeIcon>
      </CartBtn>
    </Container>
  );
}
export default InfoBox;

const Container = styled.div`
  padding: 16px 0;
  cursor: pointer;
  h4 {
    font-size: 20px;
    padding: 5px 0;
    color: ${({ theme }) => theme.colors.charcoal};
  }
  h5 {
    font-size: 16px;
    font-style: italic;
    padding: 5px 0;
    color: ${({ theme }) => theme.colors.brown};
  }
`;
const Price = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.charcoal};
  h3 {
    font-size: 30px;
    font-weight: 600;
  }
  p {
    font-size: 20px;
    padding-left: 5px;
    font-weight: 600;
  }
`;
const CartBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.lt_beige};
  background-color: ${({ theme }) => theme.colors.lt_beige};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  svg {
    font-size: 24px;
  }
`;
