import React, { Fragment, Component } from "react";
import InformationModal from "./InformationModal.jsx";

const artistCardContainerStyle = {
    padding: "16px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color .3s ease",
    width: "100%",
    position: "relative",
    flex: 1
};

const artistCardWrapperStyle = {
    height: "100%"
};

const artistImageContainerStyle = {
    borderRadius: "50%",
    width: "100%",
    paddingBottom: "100%",
    position: "relative",
    backgroundColor: "#333",
    boxShadow: "0 8px 24px rgb(0 0 0 / 50%)"
};

const artistImageWrapperStyle = {
    position: "relative",
    marginBottom: "16px"
};

const artistImageStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
};

const artistNameStyle = {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "normal",
    textTransform: "none",
    color: "#fff",
    minHeight: "62px"
};

class ArtistCard extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            hover: false
        };

        this.handleArtistClick = this.handleArtistClick.bind(this);
        this.toggleModalState = this.toggleModalState.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    handleArtistClick() {
        this.setState({ showModal: true });
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    toggleModalState() {
        const { showModal } = this.state;

        this.setState({ showModal: !showModal });
    }

    onMouseEnter() {
        this.setState({ hover: true });
    }

    onMouseLeave() {
        this.setState({ hover: false})
    }

    getInformationModal(artist) {
        const { showModal } = this.state;

        return (
            <InformationModal 
                artist={artist}
                show={showModal} 
                onClose={this.toggleModalState}
            />
        );
    }

    getArtistImageStyle(image) {
        return { ...artistImageStyle, borderRadius: image ? "50%" : "2px"}
    }

    getArtistImage(image) {
        const style = this.getArtistImageStyle(image);

        if (image)
            return <img src={image} style={style} />

        return (
            <svg 
                height="32" 
                role="img" 
                width="32" 
                viewBox="-25 -22 100 100" 
                aria-hidden="true"
                style={style}
                stroke="#b3b3b3"
                color="#b3b3b3"
            >
                <path d="M35.711 34.619l-4.283-2.461a1.654 1.654 0 0 1-.808-1.156 1.65 1.65 0 0 1 .373-1.36l3.486-4.088a14.3 14.3 0 0 0 3.432-9.293V14.93c0-3.938-1.648-7.74-4.522-10.435C30.475 1.764 26.658.398 22.661.661c-7.486.484-13.35 6.952-13.35 14.725v.875c0 3.408 1.219 6.708 3.431 9.292l3.487 4.089a1.656 1.656 0 0 1-.436 2.516l-8.548 4.914A14.337 14.337 0 0 0 0 49.513V53.5h2v-3.987c0-4.417 2.388-8.518 6.237-10.705l8.552-4.916a3.648 3.648 0 0 0 1.783-2.549 3.643 3.643 0 0 0-.822-2.999l-3.488-4.091a12.297 12.297 0 0 1-2.951-7.993v-.875c0-6.721 5.042-12.312 11.479-12.729 3.449-.22 6.725.949 9.231 3.298a12.182 12.182 0 0 1 3.89 8.976v1.331c0 2.931-1.048 5.77-2.952 7.994l-3.487 4.089a3.653 3.653 0 0 0-.822 3 3.653 3.653 0 0 0 1.782 2.548l3.036 1.745a11.959 11.959 0 0 1 2.243-1.018zM45 25.629v15.289a7.476 7.476 0 0 0-5.501-2.418c-4.135 0-7.5 3.365-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.365 7.5-7.5V29.093l5.861 3.384 1-1.732L45 25.629zM39.499 51.5a5.506 5.506 0 0 1-5.5-5.5c0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5z" fill="currentColor" fill-rule="evenodd"></path>
            </svg>
        )
    }

    getCardContainerStyle() {
        const { hover } = this.state;

        return { ...artistCardContainerStyle, backgroundColor: hover ? "#282828" : "#181818"}
    }

    render() {
        const { artist } = this.props;

        return (
            <Fragment>
                <div 
                    style={this.getCardContainerStyle()} 
                    onClick={this.toggleModalState} 
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    <div style={artistCardWrapperStyle}>
                        <div style={artistImageWrapperStyle}>
                            <div style={artistImageContainerStyle}>
                                {this.getArtistImage(artist.image)}
                            </div>
                        </div>
                        <div style={artistNameStyle}>{artist.name}</div>
                    </div>
                </div>
                {this.getInformationModal(artist)}
            </Fragment>
            
        );
    }

}

export default ArtistCard;