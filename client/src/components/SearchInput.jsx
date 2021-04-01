import React, { useContext } from "react";
import SearchedArtistContext from "./helpers/SearchedArtistContext.js"

const inputContainerStyle = {
	width: "400px",
	height: "30px",
	background: "#fff",
	border: "1px solid #ccc",
	borderRadius: "20px",
	margin: "0 auto 24px auto"
};

const inputStyle = {
	margin: 0,
	border: "none",
	boxShadow: "none",
	height: "100%",
	background: "transparent",
	padding: "0 12px",
	width: "100%",
	boxSizing: "border-box",
	outline: "none"
};

const SearchInput = ({ onChange, value }) => {
	const { searchedArtist, setSearchedArtist } = useContext(SearchedArtistContext);

	const handleChange = evt => {
		setSearchedArtist(evt.target.value);
	}

	return (
		<div style={inputContainerStyle}>
			<input 
				type={"text"} 
				name={"artistName"} 
				value={searchedArtist} 
				onChange={handleChange} 
				style={inputStyle} 
				placeholder={"Search artist"}
			/>
		</div>
	);
};

export default SearchInput;