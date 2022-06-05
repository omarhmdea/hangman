import React, { Component } from 'react';

class Endgame extends Component {
    restart = () => {
        this.props.restart()
    }
    render() {
        return (
            this.props.isWin ?
                <div>
                    <div>Congratulations!</div>
                    <button onClick={this.restart}>Reset</button>
                </div> :
                <div>
                    <div>You Lost, The word was {this.props.word}</div>
                    <button onClick={this.restart}>Reset</button>
                </div>
        );
    }
}

export default Endgame;
