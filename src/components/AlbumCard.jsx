import React from "react";

const albumCardContainerStyle = {
    padding: "16px",
    borderRadius: "4px",
    transition: "background-color .3s ease",
    width: "100%",
    position: "relative",
    flex: 1,
    backgroundColor: "#181818"
};

const albumCardWrapperStyle = {
    height: "100%"
}

const albumCoverContainerStyle = {
    borderRadius: "50%",
    width: "100%",
    paddingBottom: "100%",
    position: "relative",
    backgroundColor: "#333",
    boxShadow: "0 8px 24px rgb(0 0 0 / 50%)"
};

const albumCoverWrapperStyle = {
    position: "relative",
    marginBottom: "16px"
};

const albumCoverStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
}

const albumNameStyle = {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "normal",
    textTransform: "none",
    color: "#fff",
    minHeight: "62px"
};

const AlbumCard = props => {
    return (
        <div style={albumCardContainerStyle}>
            <div style={albumCardWrapperStyle}>
                <div style={albumCoverWrapperStyle}>
                    <div style={albumCoverContainerStyle}>
                        <img src={props.cover} style={albumCoverStyle} />
                    </div>
                </div>
                <div style={albumNameStyle}>{props.name}</div>
            </div>
        </div>
    );
}

export default AlbumCard;