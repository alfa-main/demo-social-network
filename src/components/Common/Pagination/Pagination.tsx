import React, { useState } from 'react';
import s from './Pagination.module.css';
import cn from 'classnames';

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void,
    portionSize?: number
}

let Pagination: React.FC<PropsType> = (
    {
        totalItemsCount,
        pageSize,
        currentPage,
        onPageChanged,
        portionSize = 5
    }) => {
    
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            <span>
                {portionNumber > 1
                    && <button className={s.btn_prev} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
            </span>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [s.selectedPage]: currentPage === p
                    }, s.pageNumber)}
                        key={p} onClick={(e) => { onPageChanged(p); }}>{p}</span>
                })}
            <span>
                {portionCount > portionNumber &&
                    <button className={s.btn_next} onClick={() => { setPortionNumber(portionNumber + 1) }} >NEXT</button>}
            </span>
        </div>
    )
}

export default Pagination;