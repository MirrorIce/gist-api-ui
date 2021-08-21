import React, { Component } from 'react'

export default class PageCounter extends Component {

    updateGists = (newPageNo) =>{
        const pageSize = 10;
        fetch(`https://api.github.com/users/${this.props.user}/gists?per_page=${pageSize.toString()}&page=${newPageNo.toString()}`)
        .then((res) =>{
            return res.json();
        }).then((result)=>{
            if (result.message != 'Not Found')
            {
                let newGists = [];
                this.props.setUserFound(true);
                if (result.length > 0)
                {
                    this.props.setUserGists([]);
                    result.map((element)=>{
                        let newGist = {
                            description: element.description,
                            forks_url: element.forks_url,
                            files: element.files
                        }
                        newGists.push(newGist);
                        
                    })
                    this.props.setUserGists([...this.props.userGists,...newGists]);
                }
            }
        })
    }
    decrementPage = (e) => {
        if(this.props.pageNo>1) this.props.setPageNo(this.props.pageNo-1);
    }

    incrementPage = (e) => {
        this.props.setPageNo(this.props.pageNo+1);
    }
    componentDidUpdate(oldProp){
        if (this.props.pageNo != oldProp.pageNo)
        {
            this.updateGists(this.props.pageNo);
        }
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
