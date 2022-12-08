import styled from 'styled-components';

function ToTalPriceBox({ finalPrice }) {
  return (
    <Container>
      <ProductTotalPrice>
        <span>총 결제 금액</span>
        <span>{finalPrice.toLocaleString()}</span>
      </ProductTotalPrice>
    </Container>
  );
}
export default ToTalPriceBox;

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
  background-color: ${({ theme }) => theme.colors.lt_beige};
`;
const ProductTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  span {
    font-size: 22px;
  }
`;
