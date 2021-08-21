import React, { Component } from 'react'

export default class FileContainer extends Component {
    render() {
        return (
            <div>
                <p>{this.props.file.filename}</p> <span>{this.props.file.language}</span>
            </div>
        )
    }
}
