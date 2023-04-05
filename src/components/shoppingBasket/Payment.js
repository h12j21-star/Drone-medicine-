import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PayButton, PaymentSection } from '../../style/basket';
export default function Payment() {
    const drug = useSelector((state) => state.shoppingBasket);
    const checkedItem = drug.filter((item) => item.checked);
    const navigate = useNavigate();
    let totalDeliveryFee = 0;
    let totalPrice = 0;
    let totalAmount = 0;
    let payment = 0;
    checkedItem.forEach((item) => {
        totalDeliveryFee = item.deliveryFee;
        payment = totalDeliveryFee;
        totalPrice += item.amount * item.price;
        totalAmount += item.amount;
        payment += totalPrice;
    });
    return (
        <>
            <PaymentSection>
                <div>
                    <p>총 상품금액</p>
                    <p>{totalPrice}원</p>
                </div>
                <div>
                    <p>수량</p>
                    <p>{totalAmount}개</p>
                </div>
                <div>
                    <p>배송비</p>
                    <p>{totalDeliveryFee}원</p>
                </div>
                <div>
                    <p>결제예정금액</p>
                    <p>{payment}원</p>
                </div>
            </PaymentSection>
            <PayButton onClick={()=>{navigate('/delivery')}}>결제하기</PayButton>
        </>
    );
}
