import React, { useState } from "react";
import SearchedArtistContext from "./SearchedArtistContext.js";

const SearchedArtistContextProvider = ({ children }) => {
    const [searchedArtist, setSearchedArtist] = useState("");

    const context = {
        setSearchedArtist,
        searchedArtist
    };

    return (
        <SearchedArtistContext.Provider value={context}>
            {children}
        </SearchedArtistContext.Provider>
    );
}

export default SearchedArtistContextProvider;