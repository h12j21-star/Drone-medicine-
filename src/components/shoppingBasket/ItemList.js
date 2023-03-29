import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';

import CheckOn from '../../assets/CheckOn.png';
import CheckOff from '../../assets/CheckOff.png';
import { ItemListSection, ItemListHead, ItemListTitle, ItemUl } from './style';

import { ClickTotalCheck } from '../../store/ItemSlice';

export default function ItemList() {
    const drugItem = useSelector((state) => state.item);
    const checked = useSelector((state) => state.checked);
    const dispatch = useDispatch();
    const totalCheck = () => {
        dispatch(ClickTotalCheck(checked));
    };
    return (
        <ItemListSection>
            <ItemListTitle>주문 상품</ItemListTitle>
            <ItemListHead>
                <img
                    src={checked ? CheckOn : CheckOff}
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
