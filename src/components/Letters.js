import React, { Component } from "react";
import Letter from "./Letter";


class Letters extends Component {

    selectLetter = (letter) => {
        this.props.selectLetter(letter)
    }
    render() {
        const letterStatus = this.props.letterStatus
        return (<div>
            <div>Available Latters</div>
            {Object.keys(letterStatus).map((key, i) => {
                return (
                    letterStatus[key] ?
                    <Letter name={key} className="selected" selectLetter={this.selectLetter}/> :
                    <Letter name={key} className="no-selected" selectLetter={this.selectLetter}/>
                )
            })}

        </div>)
    }
}

export default Letters