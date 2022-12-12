import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MiddleHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const navigate = useNavigate();

  return (
    <Container className={scrollPosition > 100 && 'change'}>
      <LeftBox>
        {scrollPosition > 100 && (
          <h2
            onClick={() => {
              navigate('/');
            }}
          >
            Megachang
          </h2>
        )}
      </LeftBox>
      <RightBox>
        <h3>JOIN</h3>
        <h3>LOGIN</h3>
        <h3>ORDER</h3>
        <h3
          onClick={() => {
            navigate('/cart');
          }}
        >
          CART
        </h3>
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
    padding-right: 0px;
  }
`;
const RightBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.device.mobile} {
    padding-right: 0px;
  }
  &.shadow {
    box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.5);
  }
  h3 {
    margin: 16px;
    font-size: 20px;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.brown};
    cursor: pointer;
    @media ${({ theme }) => theme.device.mobile} {
      margin: 16px 8px;
      font-size: 15px;
    }
    @media ${({ theme }) => theme.device.galaxy_fold} {
      margin: 16px 4px;
      font-size: 12px;
    }
  }
`;
const LeftBox = styled.div`
  padding-left: 40px;
  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 20px;
  }
  @media ${({ theme }) => theme.device.galaxy_fold} {
    padding-left: 10px;
  }
  h2 {
    font-size: 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    color: ${({ theme }) => theme.colors.charcoal};
    cursor: pointer;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 20px;
    }
    @media ${({ theme }) => theme.device.galaxy_fold} {
      font-size: 18px;
    }
  }
`;
