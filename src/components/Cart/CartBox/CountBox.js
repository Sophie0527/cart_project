import React from 'react';
import styled from 'styled-components';

function CountBox({ item }) {
  return (
    <Container>
      <ButtonBox>
        <Button>-</Button>
        <span>{item.count}</span>
        <Button>+</Button>
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
`;
