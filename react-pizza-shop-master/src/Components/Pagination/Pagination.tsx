import React from 'react';
import ReactPaginate from "react-paginate";
import clas from './Pagination.module.scss'

type PaginationProps = {
  currentPage: number,
  onChangePage: any
}

const Pagination: React.FC<PaginationProps> = ({ currentPage,onChangePage }) => {
    return (
            <ReactPaginate
                className={clas.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={e => onChangePage(e.selected+1) }
                pageRangeDisplayed={4}
                pageCount={3}
                forcePage={currentPage - 1}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
    );
};

export default Pagination;