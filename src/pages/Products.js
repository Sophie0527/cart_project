import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBox from '../components/Products/ProductBox';
import Pagination from '../components/Products/Pagination';

function Products() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/data/Products.json').then((res) => {
      setItems(res.data);
    });
  }, []);

  // 5개씩 보여주는 페이지네이션
  const [page, setPage] = useState(1);
  const limit = 6;
  const offset = (page - 1) * limit;
  const totalProductQty = items.length;
  const pagesNum = Math.ceil(totalProductQty / limit);

  return (
    <>
      <ProductBox items={items} limit={limit} offset={offset} />
      <Pagination page={page} setPage={setPage} pagesNum={pagesNum} />
    </>
  );
}
export default Products;
