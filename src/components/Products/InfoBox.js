import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function InfoBox({ item }) {
  return (
    <Container>
      <h5>
        {item.category === '커튼' && 'Curtain'}
        {item.category === '블라인드' && 'Blind'}
      </h5>
      <h4>{item.item_name}</h4>
      <Price>
        <h3>{item.price.toLocaleString()}</h3>
        <p>원</p>
      </Price>
      <CartBtn>
        <FontAwesomeIcon
          icon={faCartShopping}
          color={'#82593f'}
          alt="장바구니"
        ></FontAwesomeIcon>
      </CartBtn>
    </Container>
  );
}
export default InfoBox;

const Container = styled.div`
  padding: 16px 0;
  cursor: pointer;
  h4 {
    font-size: 20px;
    padding: 5px 0;
    color: ${({ theme }) => theme.colors.charcoal};
  }
  h5 {
    font-size: 16px;
    font-style: italic;
    padding: 5px 0;
    color: ${({ theme }) => theme.colors.brown};
  }
`;
const Price = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.charcoal};
  h3 {
    font-size: 30px;
    font-weight: 600;
  }
  p {
    font-size: 20px;
    padding-left: 5px;
    font-weight: 600;
  }
`;
const CartBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.lt_beige};
  background-color: ${({ theme }) => theme.colors.lt_beige};
  border-radius: 50%;
  padding: 10px;
  svg {
    font-size: 24px;
    cursor: pointer;
  }
`;
