import styled from 'styled-components';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

function Footer() {
  return (
    <Container>
      <TopFooter />
      <BottomFooter />
    </Container>
  );
}
export default Footer;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lt_beige};
`;
