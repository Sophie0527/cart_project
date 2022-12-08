import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function DeleteBox() {
  return (
    <Container>
      <FontAwesomeIcon icon={faTrashCan} alt="삭제" />
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
  }
`;
