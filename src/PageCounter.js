import React, { Component } from 'react'

export default class PageCounter extends Component {

    decrementPage = (e) => {
        if(this.props.pageNo>0) this.props.setPageNo(this.props.pageNo-1);
    }

    incrementPage = (e) => {
        this.props.setPageNo(this.props.pageNo+1);
    }
    render() {
        return (
            <div className = 'PageCounter'>
                <button onClick = {this.decrementPage}>←</button>
                <p>{this.props.pageNo}</p>
                <button onClick = {this.incrementPage}>→</button>
            </div>
        )
    }
}
