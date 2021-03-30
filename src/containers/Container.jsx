import React, { useState } from "react";
import SearchInput from "../components/SearchInput.jsx";
import ResultsContainer from "./ResultsContainer.jsx";

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
    const [searchedArtist, setSearchedArtist] = useState("");

    const handleInputChange = searchedArtist => {
        setSearchedArtist(searchedArtist);
    }

    return (
        <div style={wrapperStyle}>
           <SearchInput onChange={handleInputChange} />
            <div style={contentWrapperStyle}>
                <ResultsContainer searchedArtist={searchedArtist} />
            </div>
        </div>
        
    )
}

export default Container;