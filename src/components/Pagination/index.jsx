import ReactPaginate from 'react-paginate';
import styles from '../Pagination/Pagination.module.scss'

const Pagination = ({currentPage, onChangePage,}) => {
	return (
		<ReactPaginate className={styles.root}
					   breakLabel="..."
					   nextLabel=">"
					   onPageChange={event => onChangePage(event.selected + 1)}
					   pageRangeDisplayed={8}
					   pageCount={3}
					   forcePage={currentPage - 1}
					   previousLabel="<"
					   renderOnZeroPageCount={null}
		/>
	);
};
1

export default Pagination;