import React, {Component} from 'react';

import './hexImgStyles.css';

class HexImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            scale: this.props.scale,
            rotate: '10deg'
        };
    }



    render() {
        const imgStyle = {
            backgroundImage: `url(${this.state.url})`,
            transform: `rotate(${this.state.rotate}) scale(${this.state.scale})`
        };
        return (
            <div className="hexagon" style={imgStyle}>
                <div className="hexTop"></div>
                <div className="hexBottom"></div>
            </div>
        );
    }
}

export default HexImg;
