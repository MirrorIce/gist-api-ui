import React, { Component } from 'react'
import FileContainer from './FileContainer';

export default class Gist extends Component {

    state = {
        files: [],
        forks: [],
        hasForks: true
    }
    componentDidMount(){
        this.setState({files: []});
            for (let key in this.props.userGist.files)
            {   
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
    componentDidUpdate(newProps){
        if (newProps != this.props)
        {
            this.setState({files: []});
            for (let key in newProps.userGist.files)
            {   
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
    setLatestForks = async (e) =>{
        let isLatest = false;
        let previousForksData = [];
        let gistForkUsers = [];
        let pageNo = 1;
        let count = 2;
        while(false === isLatest && count > 0)
        {
            await fetch(`${this.props.userGist.forks_url}?page=${pageNo}&per_page=100`)
            .then((res) =>{
                return res.json();
            })
            // eslint-disable-next-line no-loop-func
            .then((result) => {
                if (result.length > 0)
                {
                    //Check if we need to get the previous page gist and the current page for the latest three gists
                    if (result.length > 3)
                    {
                        previousForksData = result;
                    }
                    else
                    {
                        for (let i = result.length-1; i >= 0; i--)
                        {
                            gistForkUsers.push(result[i]);
                        }
                        for (let i = 0; i< 3 - gistForkUsers.length;i++)
                        {
                            gistForkUsers.push(previousForksData[previousForksData.length - (i+1)]);
                        }
                        isLatest = true;
                    }
                    
                }
                //Push the data from the last update which returned some values
                else
                {
                    for (let j = previousForksData.length-1; j >= previousForksData.length-3 && j >= 0; j--)
                    {
                        gistForkUsers.push(previousForksData[j]);
                    }
                    if (gistForkUsers.length > 0) this.setState({hasForks:true});
                    else this.setState({hasForks:false});
                    isLatest = true;
                }
                if (isLatest)
                {
                    this.setState({forks:gistForkUsers});
                }
                else
                {
                    pageNo = pageNo + 1;
                }
            });
        count = count - 1;
        }
    }
    render() {
        return (
            <div className = "Gist">
                <h4>{this.props.userGist.description}</h4>
                <button onClick = {this.setLatestForks}>Click to show the latest fork users</button>
                {this.state.hasForks === true?<p>{this.state.forks.map((fork)=>{if (fork != undefined) return fork.owner.login+" "})}</p>:<p>No forks found!</p>}
                {this.state.files.map((file,idx) =>{
                    return <FileContainer file = {file} key = {idx}/>
                })}
            </div>
        )
    }
}
