import styled from 'styled-components';

function ImageBox({ item }) {
  return (
    <Container>
      <img src={item.image_url} alt={item.item_name} />
      {item.availableCoupon !== false && (
        <AvailableCoupon>
          <span>Available Coupon</span>
        </AvailableCoupon>
      )}
    </Container>
  );
}
export default ImageBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  overflow: hidden;
  border: 1.5px solid ${({ theme }) => theme.colors.camel};
  border-radius: 15px;
  cursor: pointer;
  img {
    width: 600px;
    height: 600px;
    object-fit: cover;
    transition: all 0.2s linear;
    :hover {
      transform: scale(1.1);
    }
  }
`;
const AvailableCoupon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.camel};
  width: 200px;
  height: 50px;
  transform: translate(0%, -550%);
  border-radius: 0px 80px;
  box-shadow: 2px 1px 3px rgba(160, 160, 160, 0.5);
  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
  }
`;
