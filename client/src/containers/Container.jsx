import React from "react";
import SearchInput from "../components/SearchInput.jsx";
import ResultsContainer from "./ResultsContainer.jsx";
import SearchedArtistContextProvider from "../components/helpers/SearchedArtistContextProvider.js"

const wrapperStyle = {
	maxWidth: "1536px",
	margin: "0 auto",
	heigth: "100%",
	display: "flex",
	flexDirection: "column",
	minHeight: "100vh",
	padding: "16px 0"
};

const contentWrapperStyle = {
	flexGrow: 1,
	display: "flex",
	alignItems: "center"
};

const Container = () => {

	return (
		<SearchedArtistContextProvider>
			<div style={wrapperStyle}>
			<SearchInput />
				<div style={contentWrapperStyle}>
					<ResultsContainer />
				</div>
			</div>
		</SearchedArtistContextProvider>
	);
};

export default Container;