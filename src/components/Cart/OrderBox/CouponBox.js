import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function CouponBox(props) {
  const { setCouponType, sumCouponItemPrice } = props;

  // 쿠폰 모달
  const [couponOpen, setCouponOpen] = useState(false);
  const couponModal = () => {
    setCouponOpen(!couponOpen);
  };
  // 쿠폰 종류
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/data/Coupons.json').then((res) => {
      setCoupons(res.data);
    });
  }, []);

  // 쿠폰 선택 시 이벤트가 일어나는 함수
  const selectCoupon = (idx) => {
    setCouponOpen(false);
    setCouponType(coupons[idx].type);
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

      {couponOpen && (
        <CouponModal>
          {sumCouponItemPrice > 0 ? (
            <>
              {coupons.map((coupon, idx) => {
                return (
                  <span
                    key={idx}
                    onClick={() => {
                      selectCoupon(idx);
                    }}
                  >
                    {coupon.title}
                  </span>
                );
              })}
            </>
          ) : (
            <span>현재 쿠폰사용이 불가합니다.</span>
          )}
        </CouponModal>
      )}
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
