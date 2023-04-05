import { createSlice } from '@reduxjs/toolkit';

const drug1 = '/assets/drug1.png';
const drug2 = '/assets/drug2.png';
let initialState = {
    item: [
        {
            id: 1,
            img: drug1,
            name: '눈 영양제 루테인 3박스',
            amount: 1,
            max: 10,
            deliveryFee: 3000,
            price: 10000,
            checked: false,
        },
        {
            id: 2,
            img: drug2,
            name: '오메가 3 751mg',
            amount: 1,
            max: 10,
            deliveryFee: 3000,
            price: 15000,
            checked: false,
        },
        {
            id: 2,
            img: drug2,
            name: '오메가 3 751mg',
            amount: 1,
            max: 10,
            deliveryFee: 3000,
            price: 15000,
            checked: false,
        },
        {
            id: 2,
            img: drug2,
            name: '오메가 3 751mg',
            amount: 1,
            max: 10,
            deliveryFee: 3000,
            price: 15000,
            checked: false,
        },
    ],
};
const InputItem = createSlice({
    name: 'basketItem',
    initialState,
    reducers: {
        ClickUp(state, action) {
            state.item.map((item) => {
                if (item.id === action.payload) {
                    item.amount++;
                }
                if (item.amount > item.max) {
                    item.amount = item.max;
                    alert('🥲수량을 초과했습니다');
                }
            });
        },
        ClickDown(state, action) {
            state.item.map((item) => {
                if (item.id === action.payload) {
                    if (item.amount > 1) {
                        item.amount--;
                    }
                }
            });
        },
        ClickCheck(state, action) {
            state.item.map((item) => {
                if (item.id === action.payload) {
                    item.checked = !item.checked;
                }
            });
        },
        ClickTotalCheck(state, action) {
            if (action.payload) {
                state.item.map((item) => {
                    item.checked = false;
                });
            } else {
                state.item.map((item) => {
                    item.checked = true;
                });
            }
        },
    },
});

export const { ClickUp, ClickDown, ClickCheck, ClickTotalCheck } =
    InputItem.actions;
export default InputItem.reducer;
