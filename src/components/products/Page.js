import React from 'react';
import Pagination  from 'react-js-pagination';
import '../../style/products/Page.css';


export default function Page({activePage, itemsCountPerPage, totalItemsCount, onChange}) {
    return (
        <div className="page">
            <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={onChange}/>
        </div>
    );
}

