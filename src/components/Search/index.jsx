import styles from "../Search/Search.module.scss"
import {useCallback, useContext, useRef, useState} from "react";
import {SearchContext} from "../../App.jsx";
import debounce from "lodash.debounce";

const Search = () => {
	const [value, setValue] = useState("");
	const { setSearchValue} = useContext(SearchContext);
	const inputRef = useRef();

	const onClickClear = () => {
		setSearchValue("")
		setValue('')
		inputRef.current.focus()
	}

	const updateSearchValue = useCallback(
		debounce((str) => {
			setSearchValue(str);
		}, 250),
		[]
	)

	const onChangeInput = (event) => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}

	return (
		<div className={styles.root}>
			<svg className={styles.icon}
				 height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/>
				<path d="M0 0h48v48h-48z" fill="none"/>
			</svg>
			<input ref={inputRef}
				   value={value}
				   onChange={onChangeInput}
				   className={styles.input} placeholder="Pizza Search..."/>

			{value &&
				<svg onClick={onClickClear}
					 className={styles.clearIcon}
					 viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/>
					<g>
						<path
							d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"/>
						<path
							d="M64.2422,31.7578a5.9979,5.9979,0,0,0-8.4844,0L48,39.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844L39.5156,48l-7.7578,7.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L48,56.4844l7.7578,7.7578a5.9994,5.9994,0,0,0,8.4844-8.4844L56.4844,48l7.7578-7.7578A5.9979,5.9979,0,0,0,64.2422,31.7578Z"/>
					</g>
				</svg>
			}

		</div>
	);
};

export default Search;