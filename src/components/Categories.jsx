import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../Redux/filterSlice.js";


const Categories = () => {
	const dispatch = useDispatch();
	const categoryId = useSelector(state => state.filter.categoryId);
	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	}
	const categories = [
		'All',
		'Meat',
		'Vegan',
		'Grill',
		'Spicy',
		'Closed'
	]


	return (
		<div className="categories">
			<ul>
				{categories.map((categoryName, i) => (
					<li key={i} onClick={() => onChangeCategory(i) } className={categoryId === i ? 'active' : ''}>{categoryName}</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
