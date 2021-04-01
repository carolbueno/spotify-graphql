import React from "react";

const emptyStateWrapperStyle = {
	width: "100%",
	textAlign: "center",
	color: "#fff"
};

const getContent = searchedArtist => {
	if (!searchedArtist)
		return <h1>{`Search for an artist`}</h1>;

	return <h1>{`No results for "${searchedArtist}"`}</h1>;
};

const EmptyState = ({ searchedArtist }) => {
	return (
		<div style={emptyStateWrapperStyle}>
			{getContent(searchedArtist)}
		</div>
	);
};

export default EmptyState;