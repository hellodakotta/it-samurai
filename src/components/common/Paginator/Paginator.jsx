import React, {useState} from 'react';
import s from "./Paginator.module.css";


const Paginator = ({totalItemsCount, pageSize, currentPage, portionSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(totalItemsCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let paginator = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
            if (currentPage !== p) {
                return (<a key={p} onClick={() => {
                    onPageChanged(p)
                }}>
                    <span key={p} className={currentPage === p ? `${s.page} ${s.selectedPage}` : s.page}>{p}</span>
                </a>)
            } else {
                return (
                    <span key={p} className={currentPage === p ? `${s.page} ${s.selectedPage}` : s.page}>{p}</span>
                )
            }
        })
    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button>}

            {paginator}

            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber+1)}}>NEXT</button>}
        </div>
    );
}

export default Paginator;