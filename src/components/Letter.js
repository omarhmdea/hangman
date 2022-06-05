import React, { Component } from "react";


class Letter extends Component {


    selectLetter = () => {
        this.props.selectLetter(this.props.name)
    }

    render() {
        return <span className={this.props.className} onClick={this.selectLetter}>{this.props.name} </span>
    }
}

export default Letter