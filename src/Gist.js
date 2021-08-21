import React, { Component } from 'react'
import FileContainer from './FileContainer';

export default class Gist extends Component {

    state = {
        files: []
    }
    componentDidMount()
    {
        this.setState({files: []});
            console.log(this.props.userGist.files);
            for (let key in this.props.userGist.files)
            {   
                // console.log(key);
                let newFile = {
                    filename: this.props.userGist.files[key].filename,
                    language: this.props.userGist.files[key].language,
                    raw_url: this.props.userGist.files[key].raw_url,
                    size: this.props.userGist.files[key].size,
                    type: this.props.userGist.files[key].type
                }
                this.setState({files:[...this.state.files,newFile]});
            }
    }
    componentDidUpdate(newProps)
    {
        if (newProps != this.props)
        {
            this.setState({files: []});
            console.log(newProps.userGist.files);
            for (let key in newProps.userGist.files)
            {   
                // console.log(key);
                let newFile = {
                    filename: newProps.userGist.files[key].filename,
                    language: newProps.userGist.files[key].language,
                    raw_url: newProps.userGist.files[key].raw_url,
                    size: newProps.userGist.files[key].size,
                    type: newProps.userGist.files[key].type
                }
                this.setState({files:[...this.state.files,newFile]});
            }
        }
    }
    render() {
        return (
            <div className = "Gist">
                <h4>{this.props.userGist.description}</h4>
                <p>Latest forks: click to show</p>
                {this.state.files.map((file,idx) =>{
                    return <FileContainer file = {this.state.files[idx]} key = {idx}/>
                })}
            </div>
        )
    }
}
