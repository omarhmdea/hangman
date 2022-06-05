import React, { Component } from 'react';
import Letter from './Letter';


class Solution extends Component {

    render() {
        let Letters = []
        let flag = true
        this.props.solution.word.split('').map(l => {
            if (this.props.letterStatus[l]) {
                Letters.push(<Letter name={l} />)
            } else {
                Letters.push(<Letter name={'_ '} />)
                flag = false
            }
        })
        if (flag) {
            this.props.endGame(true)
        } else if (this.props.score <= 0){
            this.props.endGame(false)
        }

            return (<div>
                {Letters}
                <div><em> {this.props.solution.hint}</em></div>
            </div>)
    }
}
export default Solution