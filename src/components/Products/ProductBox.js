import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageBox from './ImageBox';
import InfoBox from './InfoBox';

function ProductBox() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/data/Products.json').then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <Container>
      {items.map((item, idx) => {
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
  padding: 100px 0;
`;
const Products = styled.div`
  padding: 10px 10px 40px;
`;
