import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ARTISTS } from "../GraphQL/Queries.js";
import ArtistCard from "../components/ArtistCard.jsx";
import Loading from "../components/Loading/Loading.jsx";
import EmptyState from "../components/EmptyState.jsx";

const resultsContainerStyle = {
	alignSelf: "flex-start",
	width: "100%"
};

const artistsGridWrapperStyle = {
	display: "grid",
	gridGap: "24px",
	gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
	gridTemplateRows: "1fr"
}

const getArtistCard = artists => {
	return (
		<div style={artistsGridWrapperStyle}>
			{artists.map(artist => {
				return <ArtistCard artist={artist} key={artist.id} />
			})}
		</div>  
	);
};

const getContent = (artists, loading, searchedArtist) => {
	if (loading) {
		return <Loading />;
	}

	if (!artists.length || !searchedArtist)
		return <EmptyState searchedArtist={searchedArtist} />

	return getArtistCard(artists);
};

const ResultsContainer = ({ searchedArtist }) => {
	const { loading, data} = useQuery(LOAD_ARTISTS, {
		variables: { searchedArtist }
	});

	const [ artists, setArtists ] = useState([]);

	useEffect(() => {
		if (data)
			setArtists(data.queryArtists)
	}, [data]);

	return (
		<div style={resultsContainerStyle}>
			{getContent(artists, loading, searchedArtist)}
		</div>
	);
};

export default ResultsContainer;