import React from "react";

// import imgMyimageexample from '../assets/imageexample.jpg';
import imgMyimageexample from '../assets/a1.png';

const divStyle: React.CSSProperties = {
    width: '100%',
    height: '80%',
    margin: 0,
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    position: "relative",
    // minHeight: '100%',
    // minWidth: '100%'
};

// .background-image {
//     background-image: url(./assets/space-bg.jpg);
//     background-size: cover;
//     background-position: top;
//     min-height: 100%;
//     height: 100vh;
//     position: relative;
// }

const h1: React.CSSProperties = {
    textAlign: 'center'
};


export default class Mycomponent extends React.Component {
    render() {
        return (
            <div className="cComponent" style={divStyle}>
                <h1 style={h1}>Some header example</h1>
            </div>
        );
    }
}