import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function PriceBox(props) {
  const { sumTotalPrice, discountPrice } = props;
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
  padding: 20px 10px;
  span {
    font-size: 22px;
  }
`;
