import styled from 'styled-components';

function Pagination(props) {
  const { page, setPage, pagesNum } = props;
  return (
    <Container>
      <PageMoveButton
        onClick={() => {
          setPage(page - 1);
          window.scrollTo(0, 0);
        }}
        disabled={page === 1}
      >
        &lt;
      </PageMoveButton>
      {/* pagesNum(페이지 수) 만큼 빈 배열을 만들고,
      fill() 메서드로 배열을 채워서 버튼을 만듭니다. */}
      {Array(pagesNum)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => {
              setPage(i + 1);
              window.scrollTo(0, 0);
            }}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </Button>
        ))}
      <PageMoveButton
        onClick={() => {
          setPage(page + 1);
          window.scrollTo(0, 0);
        }}
        disabled={page === pagesNum}
      >
        &gt;
      </PageMoveButton>
    </Container>
  );
}
export default Pagination;

const Container = styled.div`
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageMoveButton = styled.div`
  padding: 0 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.beige};
  font-size: ${({ theme }) => theme.fontSize.medium_3};
  &[disabled] {
    cursor: revert;
    pointer-events: none;
    color: white;
  }
  :hover {
    color: ${({ theme }) => theme.colors.charcoal};
  }
`;
const Button = styled.button`
  width: 60px;
  height: 60px;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium_2};
  color: ${({ theme }) => theme.colors.beige};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.beige};
  &[aria-current] {
    cursor: revert;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.charcoal};
    background: ${({ theme }) => theme.colors.beige};
    font-weight: ${({ theme }) => theme.fontWeight.regular_3};
  }
`;
