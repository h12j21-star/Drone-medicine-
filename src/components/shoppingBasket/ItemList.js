import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';

import drug1 from '../../assets/drug1.png';
import drug2 from '../../assets/drug2.png';
import CheckOn from '../../assets/CheckOn.png';
//import CheckOff from '../../App.test/CheckOff.png';
import { ItemListSection, ItemListHead, ItemListTitle, ItemUl } from './style';

import { ClickTotalCheck } from '../../store/ItemSlice';
const drug = [
    {
        id: 1,
        img: drug1,
        name: '눈 영양제 루테인 3박스',
        amount: 1,
        deliveryFee: 3000,
        price: 10000,
    },
    {
        id: 2,
        img: drug2,
        name: '오메가 3 751mg',
        amount: 1,
        deliveryFee: 3000,
        price: 15000,
    },
];
export default function ItemList() {
    const drugItem = useSelector((state) => state);
    const dispatch = useDispatch();
    const totalCheck = () => {
        dispatch(ClickTotalCheck());
    };
    return (
        <ItemListSection>
            <ItemListTitle>주문 상품</ItemListTitle>
            <ItemListHead>
                <img
                    src={CheckOn}
                    onClick={totalCheck}
                    alt="체크가 되어있는 아이콘"
                />
                <p style={{ flexBasis: '300px' }}>상품 정보</p>
                <p>수량</p>
                <p>배송비</p>
                <p>주문 금액</p>
            </ItemListHead>
            <ItemUl>
                {drugItem.map((item, idx) => (
                    <Item item={item} key={idx} id={item.id} />
                ))}
            </ItemUl>
        </ItemListSection>
    );
}
