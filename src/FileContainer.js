import React, { Component } from 'react'

export default class FileContainer extends Component {
    state={
        code:'',
        isCodeHidden:true
    }
    fetchCode = (e) => {
        if (this.state.code === ''){
            fetch(this.props.file.raw_url)
            .then((res) =>{
                return res.text();
            })
            .then((result) => {
                this.setState({code:result})
            });
            this.setState({isCodeHidden:true});
        }
        else{
            this.setState({isCodeHidden:!this.state.isCodeHidden});
        }

    }
    render() {
        return (
            <div className = 'FileContainer'>
                <div>
                    <p>{this.props.file.filename} </p>
                    <p>{this.props.file.language} </p>
                </div>
                <button onClick={this.fetchCode}>View Code</button>
                {(this.state.isCodeHidden === true)?<pre>{this.state.code}</pre>:null}

            </div>
        )
    }
}
