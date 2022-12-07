import styled from 'styled-components';
import ImageBox from './ImageBox';
import InfoBox from './InfoBox';

function ProductBox(props) {
  const { items, limit, offset } = props;

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
  padding-top: 100px;
`;
const Products = styled.div`
  padding: 10px 10px 40px;
`;
