import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    PayButton,
    PaymentSection,
    Title,
    Price,
    Unit,
} from '../../style/basket';
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
                    <Title>총 상품금액</Title>
                    <Price>
                        {totalPrice}
                        <Unit>원</Unit>
                    </Price>
                </div>
                <div>
                    <Title>수량</Title>
                    <Price>
                        {totalAmount}
                        <Unit>개</Unit>
                    </Price>
                </div>
                <div>
                    <Title>배송비</Title>
                    <Price>
                        {totalDeliveryFee}
                        <Unit>원</Unit>
                    </Price>
                </div>
                <div>
                    <Title>결제예정금액</Title>
                    <Price title="payment">
                        {payment}
                        <Unit>원</Unit>
                    </Price>
                </div>
            </PaymentSection>
            <PayButton
                onClick={() => {
                    navigate('/delivery');
                }}
            >
                결제하기
            </PayButton>
        </>
    );
}
