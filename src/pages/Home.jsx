import {useContext, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage, setFilters} from '../Redux/filterSlice.js'
import {useNavigate} from "react-router";
import Categories from "../components/Categories.jsx";
import Sort, {list} from "../components/Sort.jsx";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock.jsx";
import Pagination from "../components/Pagination/index.jsx";
import {SearchContext} from "../App.jsx";
import axios from "axios";
import qs from "qs";

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const isSearch = useRef(false);
	const isMounted = useRef(false);
	const {searchValue,} = useContext(SearchContext);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {categoryId, sort, currentPage} = useSelector((state) => state.filter);
	const onChangePage = (number) => {
		dispatch(setCurrentPage(number));
	}

	const fetchPizzas = () => {
		setIsLoading(true);
		const search = searchValue ? `&search=${searchValue}` : "";

		axios.get(`https://670d0919073307b4ee420d4a.mockapi.io/item?page=${currentPage}&limit=8&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sort.sortProperty}&order=desc${search}`)
			.then(res => {
				setItems(res.data);
				setIsLoading(false);
			})


	};
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = list.find((obj) => obj.sortProperty === params.sortProperty);


			dispatch(
				setFilters({
					...params,
					sort,
				})
			);

			isSearch.current = true; // Отмечаем, что фильтры были установлены
		}

	}, [dispatch]);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (!isSearch.current) {
			fetchPizzas();
		}
		isSearch.current = false;

	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			});
				navigate(`?${queryString}`);
			}
			isMounted.current = true;

	}, [categoryId, sort.sortProperty, currentPage]);
	const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index}/>);
	const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);

	return (
		<div className="container">
			<div className="content__top">
				<Categories/>
				<Sort/>
			</div>
			<h2 className="content__title">All Pizzas</h2>
			<div className="content__items">
				{isLoading ? skeletons : (items.length ? pizzas : <p>No pizzas found</p>)}
			</div>
			<Pagination currentPage={currentPage} onChangePage={onChangePage}/>
		</div>

	);
};

export default Home;
