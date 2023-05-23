import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    shoppingBasket: [],
};
const InputItem = createSlice({
    name: 'basketItem',
    initialState,
    reducers: {
        ClickUp(state, action) {
            state.shoppingBasket.map((item) => {
                if (item.id === action.payload) {
                    item.amount++;
                }
                if (item.amount > item.quantity) {
                    item.amount = item.quantity;
                    alert('🥲수량을 초과했습니다');
                }
            });
        },
        ClickDown(state, action) {
            state.shoppingBasket.map((item) => {
                if (item.id === action.payload) {
                    if (item.amount > 1) {
                        item.amount--;
                    }
                }
            });
        },
        ClickCheck(state, action) {
            state.shoppingBasket.map((item) => {
                if (item.id === action.payload) {
                    item.checked = !item.checked;
                    console.log(item.checked);
                }
            });
        },
        ClickTotalCheck(state, action) {
            if (action.payload) {
                state.shoppingBasket.map((item) => {
                    item.checked = false;
                });
            } else {
                state.shoppingBasket.map((item) => {
                    item.checked = true;
                });
            }
        },
        AddToCart(state, action) {
            let result = state.shoppingBasket.find((oldItem) => {
                return oldItem.name === action.payload.name;
            });
            if (!result) {
                alert('장바구니에 추가되었습니다.');
                console.log(action.payload);
                state.shoppingBasket.push({...action.payload, amount: 1, checked: false});
            } else {
                alert('이미 장바구니에 담겨있는 제품입니다.');
            }
        },
        ResetCart(state, action){
            console.log("장바구니 초기화");
            state.shoppingBasket = [];
        }
    },
});

export const { ClickUp, ClickDown, ClickCheck, ClickTotalCheck, AddToCart, ResetCart } =
    InputItem.actions;
export default InputItem.reducer;
