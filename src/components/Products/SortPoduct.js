import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SortPoduct({ sort }) {
  const navigate = useNavigate();

  const [sortOpen, setSortOpen] = useState(false);
  const sortModal = () => {
    setSortOpen(!sortOpen);
  };

  return (
    <Container>
      <SortBox>
        <SortTitle onClick={sortModal}>
          {sort ? <span>{sort}</span> : <span>인기순</span>}
        </SortTitle>
        {sortOpen && (
          <Sort onClick={sortModal}>
            <span
              onClick={() => {
                navigate('/?sort=인기순');
              }}
            >
              인기순
            </span>
            <span
              onClick={() => {
                navigate('/?sort=낮은 가격순');
              }}
            >
              낮은 가격순
            </span>
            <span
              onClick={() => {
                navigate('/?sort=높은 가격순');
              }}
            >
              높은 가격순
            </span>
          </Sort>
        )}
      </SortBox>
    </Container>
  );
}
export default SortPoduct;

const Container = styled.div`
  display: flex;
  justify-content: end;
  padding: 100px 100px 20px 0;
`;
const SortBox = styled.div`
  width: 200px;
`;
const SortTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.lt_beige};
  border: 1.5px solid ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.charcoal};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  span {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
  }
`;
const Sort = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.charcoal};
  span {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.colors.beige};
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.colors.camel};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
