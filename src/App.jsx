import '../src/scss/app.scss';
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Routes, Route} from "react-router";
import Cart from "./pages/Cart.jsx";
import {createContext, useState} from "react";

export const SearchContext = createContext('')


function App() {
	const [searchValue, setSearchValue] = useState('')
	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header/>
				<div className="content">
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="*" element={<NotFound/>}/>
						<Route path="cart" element={<Cart/>}/>
					</Routes>
				</div>
			</SearchContext.Provider>
		</div>
	);
}

export default App;
