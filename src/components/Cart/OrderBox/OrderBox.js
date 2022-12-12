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
  // 할인금액
  const discountPrice = 0;
  // 총 결제 금액
  const finalPrice = sumTotalPrice - discountPrice;

  return (
    <Container>
      <h1>주문 내역</h1>
      <CouponBox />
      <PriceBox sumTotalPrice={sumTotalPrice} discountPrice={discountPrice} />
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
