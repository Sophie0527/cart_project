import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function DeleteBox(props) {
  const { item, cartItems, setCartItems } = props;

  const deleteCart = () => {
    const deleteData = cartItems.filter(
      (cartItem) => cartItem.item_no !== item.item_no
    );
    localStorage.setItem('cart_megachang', JSON.stringify(deleteData));
    setCartItems(deleteData);
  };
  return (
    <Container>
      <FontAwesomeIcon icon={faTrashCan} alt="삭제" onClick={deleteCart} />
    </Container>
  );
}
export default DeleteBox;

const Container = styled.div`
  display: flex;
  justify-content: right;
  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.brown};
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.charcoal};
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 20px;
    }
  }
`;
