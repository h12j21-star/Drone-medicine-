import React from 'react';
//import downIcon from '../../assets/downIcon.png';
//import upIcon from '../../assets/upIcon.png';
//import CheckOn from '../../assets/CheckOn.png';
//import CheckOff from '../../assets/CheckOff.png';
import { ItemLi, ItemImg, ItemInfo, ItemName } from '../../style/basket';
import { useDispatch } from 'react-redux';
import { ClickCheck, ClickDown, ClickUp } from '../../store/ItemSlice';

const downIcon = '/assets/downIcon.png';
const upIcon = '/assets/upIcon.png';
const CheckOn = '/assets/CheckOn.png';
const CheckOff = '/assets/CheckOff.png';

export default function Item({ item, id, setCheck }) {
    let dispatch = useDispatch();
    const upButton = (e) => {
        dispatch(ClickUp(id));
    };
    const downButton = (e) => {
        dispatch(ClickDown(id));
    };
    const clickButton = () => {
        dispatch(ClickCheck(id));
        if (!item.checkd) {
            setCheck(false);
        }
    };
    return (
        <ItemLi>
            <img
                src={item.checked ? CheckOn : CheckOff}
                onClick={clickButton}
                alt="체크가 되어있는 아이콘"
                style={{ width: '15px', height: '15px' }}
            />
            <ItemInfo>
                <div
                    style={{
                        border: '1px solid #dbdbdb',
                        borderRadius: '10px',
                    }}
                >
                    <ItemImg src={item.src} alt={item.name} />
                </div>
                <ItemName>{item.name}</ItemName>
            </ItemInfo>
            <div>
                <p>{item.amount}개</p>
                <img
                    src={upIcon}
                    onClick={upButton}
                    alt="수량 늘리는 버튼"
                    style={{ width: '10px', height: '8px' }}
                />
                <img
                    src={downIcon}
                    onClick={downButton}
                    alt="수량 줄이는 버튼"
                    style={{ width: '10px', height: '8px' }}
                />
            </div>
            <p>{item.deliveryFee}원</p>
            <p>{item.price * item.amount}원</p>
        </ItemLi>
    );
}
