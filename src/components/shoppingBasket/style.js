import styled from 'styled-components';

const Section = styled.section`
    width: 80%;
    margin: 70px auto;
    text-align: center;
    padding: 0px 110px;
`;
const PageTitle = styled.h1`
    font-size: 40px;
`;
const ItemListSection = styled.section`
    margin: 20px auto;
    text-align: center;
`;
const ItemListTitle = styled.h2`
    font-size: 28px;
    text-align: left;
    &::after {
        display: block;
        content: '';
        margin-top: 10px;
        border-bottom: 1px solid #e0e0e0;
    }
`;
const ItemListHead = styled.div`
    margin: 40px auto 0;
    height: 60px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;
const ItemUl = styled.ul`
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;
const ItemLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
    padding: 20px;
`;
const ItemInfo = styled.div`
    width: 310px;
    display: flex;
    align-items: center;
    gap: 20px;
`;
const ItemName = styled.p`
    width: 50%;
`;
const ItemImg = styled.img`
    width: 150px;
    height: 100px;
`;
const PaymentSection = styled.section`
    margin: 40px auto 0;
    height: 60px;
    background-color: #f2f2f2;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
    display: flex;
`;
const PayButton = styled.button`
    width: 20%;
    height: 50px;
    margin-top: 40px;
    background-color: #f2f2f2;
    border: 0;
    border-radius: 20px;
`;
export {
    Section,
    PageTitle,
    ItemListSection,
    ItemListTitle,
    ItemListHead,
    ItemUl,
    ItemLi,
    ItemImg,
    ItemInfo,
    ItemName,
    PaymentSection,
    PayButton,
};
