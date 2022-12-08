import styled from 'styled-components';

function BottomHeader() {
  return (
    <Container>
      <h1>Megachang</h1>
    </Container>
  );
}
export default BottomHeader;

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 44px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    color: ${({ theme }) => theme.colors.charcoal};
    cursor: pointer;
  }
`;
