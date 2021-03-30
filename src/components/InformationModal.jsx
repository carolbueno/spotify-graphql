import React from "react";
import AlbumCard from "./AlbumCard.jsx";

const modalWrapperStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(0,0,0)",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    width: "100%",
    height: "100%",
    color: "#fff"
};

const modalContentStyle = {
    width: "872px",
    padding: "16px",
    boxSizing: "border-box",
    backgroundColor: "#121212",
    overflow: "auto",
    maxHeight: "90%"
};

const closeModalButtonStyle = {
    float: "right",
    fontSize: "16px",
    cursor: "pointer"
};

const albumsContainerStyle = {
    display: "grid",
    gridGap: "24px",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 190px))",
    gridTemplateRows: "1fr"
}

const getAlbums = albums => {
    return albums.map(album => {
        return <AlbumCard key={album.id} name={album.name} cover={album.image} />
    });
}

const InformationModal = props => {
    const { show, artist, onClose } = props;

    if(!show) return null;

    return (
        <div style={modalWrapperStyle}>
            <div style={modalContentStyle}>
                <span onClick={onClose} style={closeModalButtonStyle} >x</span>
                <div>
                    <h4>{artist.name}</h4>
                </div>
                <div style={albumsContainerStyle}>
                    {getAlbums(artist.albums)}
                </div>
            </div>
        </div>
    );
};

export default InformationModal;