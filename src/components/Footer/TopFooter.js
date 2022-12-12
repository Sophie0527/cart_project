import styled from 'styled-components';

function TopFooter() {
  return (
    <Container>
      <CompanyInfo>
        <Title>CompanyInfo</Title>
        <div>
          <span>법인명(상호) : 메가창</span> <span>대표자(성명) : []</span>
          <span>사업자 등록번호 안내 : []</span>
          <span>통신판매업 신고 : [] [사업자정보확인]</span>
          <span>전화 : 010-9438-3208</span>
          <span>주소 : []</span>
          <span>개인정보보호책임자 : []</span>
        </div>
      </CompanyInfo>
      <Customer>
        <Title>Customer</Title>
        <h3>010-0123-4567</h3>
      </Customer>
      <Community>
        <Title>Community</Title>
        <div>
          <span>Notice</span>
          <span>Review</span>
          <span>Q&A</span>
          <span>FAQ</span>
        </div>
      </Community>
    </Container>
  );
}
export default TopFooter;

const Container = styled.div`
  height: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 20px;
  }
`;
const CompanyInfo = styled.div`
  height: 180px;
  width: 60%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 50%;
  }
  div {
    span {
      padding-right: 30px;
      line-height: 30px;
      @media ${({ theme }) => theme.device.tablet} {
        font-size: 16px;
        line-height: 24px;
        padding-right: 10px;
      }
      @media ${({ theme }) => theme.device.mobile} {
        font-size: 12px;
        line-height: 16px;
        padding-right: 10px;
      }
    }
  }
`;
const Customer = styled.div`
  height: 180px;
  h3 {
    font-size: 26px;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 12px;
    }
  }
`;
const Community = styled.div`
  height: 180px;
  div {
    display: flex;
    flex-direction: column;
    span {
      padding: 6px 0;
      font-size: 18px;
      @media ${({ theme }) => theme.device.mobile} {
        font-size: 12px;
      }
    }
  }
`;
const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 30px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
  }
`;
