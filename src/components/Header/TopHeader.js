import styled from 'styled-components';

function TopHeader() {
  return (
    <Container>
      <h4>실측﹒시공 문의 : 010.0123.4567 </h4>
    </Container>
  );
}
export default TopHeader;

const Container = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brown};
  h4 {
    font-size: 18px;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.lt_beige};
  }
`;
