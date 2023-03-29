import { createSlice } from '@reduxjs/toolkit';
import drug1 from '../assets/drug1.png';
import drug2 from '../assets/drug2.png';
let initialState = {
    checked: false,
    item: [
        {
            id: 1,
            img: drug1,
            name: '눈 영양제 루테인 3박스',
            amount: 1,
            deliveryFee: 3000,
            price: 10000,
            checked: false,
        },
        {
            id: 2,
            img: drug2,
            name: '오메가 3 751mg',
            amount: 1,
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
                state.checked = false;
                state.item.map((item) => {
                    item.checked = false;
                });
            } else {
                state.checked = true;
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
