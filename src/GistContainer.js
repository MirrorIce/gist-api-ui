import React, { Component } from 'react';
import PageCounter from './PageCounter';
import Gist from './Gist';
export default class GistContainer extends Component {
    render() {
        return (
            <div className = "GistContainer">
                {this.props.userGists.map((userGist, idx) => {
                    return <Gist userGist = {userGist} key = {idx}></Gist>
                })}
                <PageCounter pageNo={this.props.pageNo} setPageNo = {this.props.setPageNo} user = {this.props.user} userGists = {this.props.userGists} setUserGists = {this.props.setUserGists} setUserFound = {this.props.setUserFound}></PageCounter>
            </div>
        )
    }
}
