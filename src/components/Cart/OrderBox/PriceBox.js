import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function PriceBox(props) {
  const { sumTotalPrice, discountPrice, couponType, sumCouponItemPrice } =
    props;
  return (
    <Container>
      <ProductPrice>
        <div>
          <span>상품 금액</span>
          <FontAwesomeIcon icon={faQuestionCircle} alt="Question" />
        </div>
        <span>{sumTotalPrice.toLocaleString()}</span>
      </ProductPrice>
      <DiscountPrice>
        <span>할인 금액</span>
        <p>
          {couponType === undefined && null}
          {sumCouponItemPrice > 0 &&
            couponType === 'rate' &&
            '10% 할인 쿠폰 적용가'}
          {sumCouponItemPrice > 0 &&
            couponType === 'amount' &&
            '10,000원 할인 쿠폰 적용가'}
        </p>
        <span>{discountPrice.toLocaleString()}</span>
      </DiscountPrice>
    </Container>
  );
}
export default PriceBox;

const Container = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
  background-color: ${({ theme }) => theme.colors.lt_beige};
`;
const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  font-size: 22px;
  div {
    span {
      font-size: 22px;
    }
    svg {
      font-size: 20px;
      padding-left: 10px;
      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.colors.camel};
      }
    }
  }
`;
const DiscountPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  span {
    font-size: 22px;
  }
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.camel};
  }
`;
