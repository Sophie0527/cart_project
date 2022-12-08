import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function CouponBox() {
  // 쿠폰 모달
  const [couponOpen, setCouponOpen] = useState(false);
  const couponModal = () => {
    setCouponOpen(!couponOpen);
  };

  return (
    <Container>
      <Title onClick={couponModal}>
        <span>
          {couponOpen ? '쿠폰을 선택하세요 !' : '쿠폰을 사용하시나요 ?'}
        </span>
        <FontAwesomeIcon
          icon={couponOpen ? faAngleUp : faAngleDown}
          alt="down"
        />
      </Title>
      {couponOpen ? (
        <CouponModal>
          <span>만원 할인 쿠폰</span>
          <span>10% 할인 쿠폰</span>
        </CouponModal>
      ) : null}
    </Container>
  );
}
export default CouponBox;

const Container = styled.div`
  margin: 20px 0;
  padding: 20px 0;
`;
const Title = styled.div`
  cursor: pointer;
  span {
    font-size: 20px;
  }
  svg {
    padding-left: 10px;
  }
`;
const CouponModal = styled.div`
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 20px;
    background-color: ${({ theme }) => theme.colors.lt_beige};
    border: 1px solid ${({ theme }) => theme.colors.beige};
    border-radius: 50px;
    padding: 10px;
    margin: 4px;
    cursor: pointer;
  }
`;
