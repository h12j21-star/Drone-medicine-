import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  PayButton,
  PaymentSection,
  Title,
  Price,
  Unit,
} from "../../style/cart";
import axios from "axios";
import { ResetCart } from "../../store/ItemSlice";

export default function Payment() {
  const drug = useSelector((state) => state.shoppingBasket);
  const checkedItem = drug.filter((item) => item.checked);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const orderPost = async () => {
    let ids = [];
    let changeProduct = [];
    if (drug.length <= 0) {
      alert("장바구니가 비어있습니다.");
      return;
    }
    drug.forEach((item) => {
      if (item.checked) {
        ids.push(item.id);
        changeProduct.push(item.amount);
      }
    });
    if (ids.length <= 0) {
      alert("제품을 선택해주세요.");
      return;
    }

    try {
      const res = await axios.put("http://localhost:8082/api/products/order", {
        ids: ids,
        changeProduct: changeProduct,
        payment: payment,
      });
      dispatch(ResetCart());
      console.log(res);
      setTimeout(() => {
        navigate("/delivery");
      }, 1000);
    } catch (err) {
      return err;
    }
  };
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
      <PayButton onClick={orderPost}>결제하기</PayButton>
    </>
  );
}
