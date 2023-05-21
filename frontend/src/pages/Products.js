import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../store/ItemSlice';
import Navigation from '../components/common/Navigation';
import Category from '../components/products/Category';
import Page from '../components/products/Page';
import Product from '../components/products/Product';
import Search from '../components/products/Search';
import '../style/products/Products.css';
import { useLocation, useParams } from 'react-router-dom';

export default function Products() {
    const stateItem = useSelector((state) => state.item);
    const shoppingBasket = useSelector((state) => state.shoppingBasket);
    const dispatch = useDispatch();
    const [items, setItems] = useState(stateItem);
    const [pageSize, setPageSize] = useState(6);
    const [totalItemsCount, setTotalItemsCount] = useState(stateItem.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState(['All', 'Best']);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const {pharmacy} = useParams();
    const {state} = useLocation();
    //const deliveryFee = state.deliveryFee;

    useEffect(() => {
        getItems(currentPage);
        
        //카테고리 추가시 카테고리 고려하여 제공.
    }, [currentPage]);

    useEffect(() => {
        //console.log("현재 카테고리는 ",currentCategory);
        //나중에 카테고리 사용 시 카테고리별로 아이템 제공하기.
    }, [currentCategory]);

    useEffect(() => {
        console.log('장바구니:', shoppingBasket);
    }, [shoppingBasket]);

    useEffect(() => {
        document.body.classList.add('products__body');

        return () => {
            document.body.classList.remove('products__body');
        };
    });

    const getItems = (currentPage) => {
        let start = (currentPage - 1) * pageSize; //페이지당 6개의 아이템씩.
        let end = start + pageSize;
        setItems(stateItem.slice(start, end));
    };
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    const onCategoryClicked = (e) => {
        e.target.id !== currentCategory && setCurrentCategory(e.target.id);
    };
    const handleShoppingBasket = (item) => {
        dispatch(AddToCart(item));
    };
    return (
        <div className="products__wrapper">
            <Navigation prevUrl="/pharmacy" />
            <Search />
            <Category
                categories={categories}
                currentCategory={currentCategory}
                onCategoryClicked={onCategoryClicked}
            />
            <Product
                items={items}
                shoppingBasket={shoppingBasket}
                handleShoppingBasket={handleShoppingBasket}
            />
            <Page
                activePage={currentPage}
                itemsCountPerPage={pageSize}
                totalItemsCount={totalItemsCount}
                onChange={handlePageChange}
            />
        </div>
    );
}
