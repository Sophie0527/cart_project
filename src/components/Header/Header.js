import styled from 'styled-components';
import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import BottomHeader from './BottomHeader';

function Header() {
  return (
    <>
      <FixedBox>
        <TopHeader />
        <MiddleHeader />
      </FixedBox>
      <LogoBox>
        <BottomHeader />
      </LogoBox>
    </>
  );
}
export default Header;

const FixedBox = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
`;
const LogoBox = styled.div`
  padding-top: 120px;
`;
