import styled from 'styled-components';

function BottomFooter() {
  return (
    <Container>
      <span> © 메가창. Hosting by sophie</span>
      <SnsBox>
        <img
          alt="instagram"
          src="https://img.icons8.com/fluency-systems-regular/512/instagram-new.png"
        />
        <img
          alt="facebook"
          src="https://img.icons8.com/material-two-tone/512/facebook-f.png"
        />
        <img
          alt="youtube"
          src="https://img.icons8.com/material-rounded/512/youtube-play.png"
        />
        <img
          alt="kakao"
          src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/512/external-kakaotalk-or-katalk-is-a-free-mobile-instant-messaging-application-for-smartphones-logo-bold-tal-revivo.png"
        />
      </SnsBox>
    </Container>
  );
}
export default BottomFooter;

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.beige};
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 20px;
  }
  @media ${({ theme }) => theme.device.galaxy_fold} {
    padding: 0 10px;
  }
  span {
    font-size: 20px;
    letter-spacing: 1px;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 14px;
    }
    @media ${({ theme }) => theme.device.galaxy_fold} {
      font-size: 12px;
    }
  }
`;
const SnsBox = styled.div`
  img {
    width: 36px;
    object-fit: cover;
    margin: 5px;
    @media ${({ theme }) => theme.device.mobile} {
      width: 20px;
    }
    @media ${({ theme }) => theme.device.galaxy_fold} {
      width: 12px;
    }
  }
`;
