import React, { useState } from "react";
import SearchedArtistContext from ".";

const SearchedArtistContextProvider = ({ children }) => {
    const [searchedArtist, setSearchedArtist] = useState("aaaaa");

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