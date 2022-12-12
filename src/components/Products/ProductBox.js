import styled from 'styled-components';
import ImageBox from './ImageBox';
import InfoBox from './InfoBox';

function ProductBox(props) {
  const { items, limit, offset, sort } = props;

  if (sort === '인기순') {
    items.sort((a, b) => {
      return a.score - b.score;
    });
  } else if (sort === '낮은 가격순') {
    items.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sort === '높은 가격순') {
    items.sort((a, b) => {
      return b.price - a.price;
    });
  }

  return (
    <Container>
      {items.slice(offset, offset + limit).map((item, idx) => {
        return (
          <Products key={idx}>
            <ImageBox item={item} />
            <InfoBox item={item} />
          </Products>
        );
      })}
    </Container>
  );
}
export default ProductBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 100px;
`;
const Products = styled.div`
  padding: 10px 10px 40px;
`;
