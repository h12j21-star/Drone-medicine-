import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, ResetCart } from "../store/ItemSlice";
import Navigation from "../components/common/Navigation";
import Category from "../components/products/Category";
import Page from "../components/products/Page";
import Product from "../components/products/Product";
import Search from "../components/products/Search";
import "../style/products/Products.css";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Products() {
  const { pharmacy } = useParams();
  const { state } = useLocation();
  const deliveryFee = state.deliveryFee;

  const [currentPage, setCurrentPage] = useState(1);

  const {
    isLoading,
    error,
    data: itemsByPharmacy,
  } = useQuery(
    ["products", pharmacy],
    async () => {
      console.log("products fetching...");
      let result = axios
        .get(`http://localhost:8082/products/${pharmacy}`)
        .then((res) => {
          //console.log(`${pharmacy}의 상품 목록: `);
          //console.log(res.data);
          return res.data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
      return result;
    },
    {
      staleTime: 5000,
    }
  );

  const shoppingBasket = useSelector((state) => state.shoppingBasket);
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(6);
  const [categories, setCategories] = useState(["All", "Best"]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    !isLoading && getItemsByPage(currentPage);

    //카테고리 추가시 카테고리 고려하여 제공.
  }, [currentPage]);

  useEffect(() => {
    //console.log("현재 카테고리는 ",currentCategory);
    //나중에 카테고리 사용 시 카테고리별로 아이템 제공하기.
  }, [currentCategory]);

  useEffect(() => {
    console.log("장바구니:", shoppingBasket);
  }, [shoppingBasket]);

  useEffect(() => {
    document.body.classList.add("products__body");

    return () => {
      document.body.classList.remove("products__body");
    };
  });

  const getItemsByPage = (currentPage) => {
    let start = (currentPage - 1) * pageSize; //페이지당 6개의 아이템씩.
    let end = start + pageSize;
    console.log(
      "로딩이 끝났으니, itemsByPharmacy를 페이지 크기에 맞게 쪼갠다."
    );
    console.log(itemsByPharmacy);
    return itemsByPharmacy.slice(start, end);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
  const onCategoryClicked = (e) => {
    e.target.id !== currentCategory && setCurrentCategory(e.target.id);
  };
  const handleShoppingBasket = (item) => {
    dispatch(AddToCart({ ...item, deliveryFee: deliveryFee }));
  };

  const resetCart = () => {
    dispatch(ResetCart());
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Fetch Error</p>;

  return (
    <div className="products__wrapper">
      <Navigation prevUrl="/pharmacy" resetCart={resetCart} />
      <Search />
      <Category
        categories={categories}
        currentCategory={currentCategory}
        onCategoryClicked={onCategoryClicked}
      />
      <Product
        items={getItemsByPage(currentPage)}
        shoppingBasket={shoppingBasket}
        handleShoppingBasket={handleShoppingBasket}
      />
      <Page
        activePage={currentPage}
        itemsCountPerPage={pageSize}
        totalItemsCount={itemsByPharmacy.length}
        onChange={handlePageChange}
      />
    </div>
  );
}
