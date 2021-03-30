import React from "react";
import "./Loading.css";

const loadingWrapperStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center"
};

const loadingContainerStyle = {
    // margin: "100px auto",
    // width: "40px",
    // height: "40px",
    // position: "relative"
};

const loadingCircle = {
    // width: "100%",
    // height: "100%",
    // position: "absolute",
    // left: "0",
    // top: "0",
    // "&::before": {
    //     content: "",
    //     display: "block",
    //     margin: "0 auto",
    //     width: "15%",
    //     height: "15",
    //     backgroundColor: "#333333",
    //     borderRadius: "100%",
    //     animation: "sk-circleFadeDelay 1.2s infinite ease-in-out both",
    // }
};

const Loading = () => {
    return (
        <div style={loadingWrapperStyle}>
            <div style={loadingContainerStyle} class="sk-fading-circle">
                <div style={loadingCircle} class="sk-circle1 sk-circle"></div>
                <div style={loadingCircle} lass="sk-circle2 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle3 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle4 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle5 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle6 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle7 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle8 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle9 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle10 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle11 sk-circle"></div>
                <div style={loadingCircle} class="sk-circle12 sk-circle"></div>
            </div>
        </div>
        
    );
};

export default Loading;