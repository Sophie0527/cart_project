import React, { useState } from 'react';
import styled from 'styled-components';
import CouponBox from './CouponBox';
import PriceBox from './PriceBox';
import ToTalPriceBox from './ToTalPriceBox';
import OrderButton from './OrderButton';

function OrderBox({ cartItems }) {
  // 상품금액 : 장바구니에 담긴 상품의 totalPrice를 모두 더한 값
  const sumTotalPrice = cartItems.reduce(
    (prev, current) => prev + current.totalPrice,
    0
  );
  // 쿠폰사용 가능한 상품금액 : 장바구니에 담긴 상품 중 쿠폰사용 가능한 상품의 totalPrice를 모두 더한 값
  const couponItem = cartItems.filter(
    (item) => item.availableCoupon === undefined
  );
  const sumCouponItemPrice = couponItem.reduce(
    (prev, current) => prev + current.totalPrice,
    0
  );
  // 쿠폰사용 불가능한 상품금액 : 장바구니에 담긴 상품 중 쿠폰사용 불가능한 상품의 totalPrice를 모두 더한 값
  const nonCouponItem = cartItems.filter(
    (item) => item.availableCoupon === false
  );
  const sumNonCouponItemPrice = nonCouponItem.reduce(
    (prev, current) => prev + current.totalPrice,
    0
  );
  // 쿠폰종류에 따라 변경되는 state
  const [couponType, setCouponType] = useState();

  // 할인금액
  let discountPrice = 0;

  if (couponType === 'amount') {
    discountPrice = 10000;
  } else if (couponType === 'rate') {
    discountPrice = sumCouponItemPrice - sumCouponItemPrice * 0.9;
  } else if (sumCouponItemPrice === 0) {
    discountPrice = 0;
  } else {
    discountPrice = 0;
  }

  // 총 결제 금액 : (sumCouponItemPrice - 할인가) + sumNonCouponItemPrice
  const finalPrice = sumCouponItemPrice - discountPrice + sumNonCouponItemPrice;

  return (
    <Container>
      <h1>주문 내역</h1>
      <CouponBox
        setCouponType={setCouponType}
        sumCouponItemPrice={sumCouponItemPrice}
      />
      <PriceBox
        sumTotalPrice={sumTotalPrice}
        discountPrice={discountPrice}
        couponType={couponType}
        sumCouponItemPrice={sumCouponItemPrice}
      />
      <ToTalPriceBox finalPrice={finalPrice} />
      <OrderButton />
    </Container>
  );
}
export default OrderBox;

const Container = styled.div`
  min-width: 400px;
  padding-left: 20px;
  @media ${({ theme }) => theme.device.tabletL} {
    padding-left: 0px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 300px;
  }
  @media ${({ theme }) => theme.device.galaxy_fold} {
    min-width: 260px;
  }
  h1 {
    font-size: 26px;
  }
`;
