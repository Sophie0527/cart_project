import styled from 'styled-components';

function OrderButton() {
  return (
    <Container>
      <span>주문결제</span>
    </Container>
  );
}
export default OrderButton;

const Container = styled.div`
  margin-top: 30px;
  background-color: black;
  padding: 20px;
  border-radius: 50px;
  display: flexx;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    color: white;
    font-size: 22px;
  }
`;
