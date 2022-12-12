import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header/Header';
import SortPoduct from '../components/Products/SortPoduct';
import ProductBox from '../components/Products/ProductBox';
import Pagination from '../components/Products/Pagination';
import Footer from '../components/Footer/Footer';

function Products() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/data/Products.json').then((res) => {
      setItems(res.data);
    });
  }, []);
  // 상품의 score를 기준으로 내림차순으로 정렬
  items.sort((a, b) => {
    return a.score - b.score;
  });

  // query의 정보로 sorting하기 위해
  let query = new URLSearchParams(useLocation().search);
  let sort = query.get('sort');

  // 5개씩 보여주는 페이지네이션
  const [page, setPage] = useState(1);
  const limit = 6;
  const offset = (page - 1) * limit;
  const totalProductQty = items.length;
  const pagesNum = Math.ceil(totalProductQty / limit);

  return (
    <>
      <Header />
      <SortPoduct sort={sort} />
      <ProductBox items={items} limit={limit} offset={offset} sort={sort} />
      <Pagination page={page} setPage={setPage} pagesNum={pagesNum} />
      <Footer />
    </>
  );
}
export default Products;
