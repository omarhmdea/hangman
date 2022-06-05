import React, { Component } from "react";

class Score extends Component {

    render() {
        let colorClass = "high-score"
        if (this.props.score < 80 && this.props.score > 50) {
            colorClass = "medium-score"
        } else if (this.props.score < 50) {
            colorClass = "low-score"
        }
        return (
            <div className={colorClass}>
                {this.props.score}
            </div>
        )
    }
}

export default Score