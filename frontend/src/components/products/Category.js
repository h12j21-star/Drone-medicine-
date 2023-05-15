import React from 'react';
import '../../style/products/Category.css';

export default function Category({categories,currentCategory,onCategoryClicked}) {
    return (
        <div className='category'>
            <ul>
                <li>
                    <div className='category__name'>
                        <p>Category</p>
                    </div>
                </li>
                {  
                  categories.map((category,index)=>{
                     return(
                         <li key={index}>
                              <div className='category__section'>
                                 <a href='#' id={category} onClick={onCategoryClicked} style={{color: category===currentCategory ? "blue" : "gray"}}>{category}</a>
                                 <div className="category__line"></div>
                              </div>
                           </li>
                        );

                    })
                }
            </ul>
        </div>
    );
}

