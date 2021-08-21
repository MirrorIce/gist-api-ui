import React, { Component } from 'react';
import PageCounter from './PageCounter';

export default class GistContainer extends Component {
    render() {
        return (
            <div className = "GistContainer">
                
                <PageCounter pageNo={this.props.pageNo} setPageNo = {this.props.setPageNo}></PageCounter>
            </div>
        )
    }
}
