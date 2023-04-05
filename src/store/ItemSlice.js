import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    item: [
        {
            id : 1,
            name : "얼라이브 멀티비타민",
            src : "assets/multi-vitamin.jpg",
            amount : 1,
            max : 10,
            deliveryFee : 3000,
            checked : false,
            price : 25900
        },
        {
            id : 2,
            src : "assets/omega.jpg",
            name : "스포츠리서치 오메가3",
            amount : 1,
            max : 10,
            deliveryFee : 3000,
            checked : false,
            price : 38900
        },
        {
            id : 3,   
            src : "assets/magnesium.jpg",
            name : "메가렉스 마그네슘",
            amount : 1,
            max : 10,
            deliveryFee : 3000,
            checked : false,
            price : 24900
        },
        {
            id : 4,
            src : "assets/lactobacillus.jpg",
            name : "락토핏 골드",
            amount : 1,
            max : 10,
            deliveryFee : 3000,
            checked : false,
            price : 47520
        },
        {
            id : 5,
            src : "assets/milkThistle.jpg",
            name : "실리마린 밀크시슬",
            amount : 1,
            max : 10,
            deliveryFee : 3000,
            checked : false,
            price : 25300
        },
        {
            id : 6,
            src : "assets/maca.jpg",
            name : "나우푸드 마카",
            amount : 1,
            max : 10,
            deliveryFee : 3000,
            checked : false,
            price : 11390
        },
        {
            id : 7,
            src : "assets/arginine.jpg",
            name : "뉴트리디데이 아르기닌",
            amount : 1,
            max : 10,
            deliveryFee : 3000,
            checked : false,
            price : 15900
        },
        {
            id : 8,
            src : "assets/collagen.jpg",
            name : "뉴트리디데이 콜라겐",
            amount : 1,
            max : 10,
            deliveryFee : 3000,
            checked : false,
            price : 22900
        },
    ],
    shoppingBasket : [

    ]
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
                if (item.amount > item.max) {
                    item.amount = item.max;
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
        AddToCart(state,action) {
            let result= state.shoppingBasket.find((oldItem)=>{
                return oldItem.name===action.payload.name;
            });
            if(!result){
                alert("장바구니에 추가되었습니다.");
                state.shoppingBasket.push(action.payload);
            }
            else{
                alert("이미 장바구니에 담겨있는 제품입니다.");
            }
        }
    },
});

export const { ClickUp, ClickDown, ClickCheck, ClickTotalCheck, AddToCart } =
    InputItem.actions;
export default InputItem.reducer;
