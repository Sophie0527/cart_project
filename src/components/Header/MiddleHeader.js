import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function MiddleHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <Container className={scrollPosition > 100 && 'change'}>
      <LeftBox>{scrollPosition > 100 && <h2>Megachang</h2>}</LeftBox>
      <RightBox>
        <h3>JOIN</h3>
        <h3>LOGIN</h3>
        <h3>ORDER</h3>
        <h3>CART</h3>
      </RightBox>
    </Container>
  );
}
export default MiddleHeader;

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  &.change {
    box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.5);
    justify-content: space-between;
  }
`;
const RightBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  &.shadow {
    box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.5);
  }
  h3 {
    margin: 16px;
    font-size: 20px;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.brown};
    cursor: pointer;
  }
`;
const LeftBox = styled.div`
  padding-left: 40px;
  h2 {
    font-size: 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    color: ${({ theme }) => theme.colors.charcoal};
    cursor: pointer;
  }
`;
