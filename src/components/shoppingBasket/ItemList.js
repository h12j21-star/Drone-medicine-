import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';

//import CheckOn from '../../assets/CheckOn.png';
//import CheckOff from '../../assets/CheckOff.png';
import {
    ItemListSection,
    ItemListHead,
    ItemListTitle,
    ItemUl,
} from '../../style/basket';

import { ClickTotalCheck } from '../../store/ItemSlice';

const CheckOn = '/assets/CheckOn.png';
const CheckOff = '/assets/CheckOff.png';

export default function ItemList() {
    let [check, setCheck] = useState(false);
    const drugItem = useSelector((state) => state.shoppingBasket);
    const dispatch = useDispatch();
    console.log('장바구니 목록:', drugItem);
    const totalCheck = () => {
        setCheck((prev) => !prev);
        dispatch(ClickTotalCheck(check));
    };
    return (
        <ItemListSection>
            <ItemListTitle>주문 상품</ItemListTitle>
            <ItemListHead>
                <img
                    src={check ? CheckOn : CheckOff}
                    onClick={totalCheck}
                    alt={check ? '체크가 되어있는 아이콘' : '체크해제 아이콘'}
                />
                <p style={{ margin: '0px', flexBasis: '300px' }}>상품 정보</p>
                <p style={{ margin: '0px' }}>수량</p>
                <p style={{ margin: '0px' }}>배송비</p>
                <p style={{ margin: '0px' }}>주문 금액</p>
            </ItemListHead>
            <ItemUl>
                {drugItem.map((item, idx) => (
                    <Item
                        item={item}
                        key={idx}
                        id={item.id}
                        setCheck={setCheck}
                    />
                ))}
            </ItemUl>
        </ItemListSection>
    );
}
