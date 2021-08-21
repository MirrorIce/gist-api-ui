import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        userSearchInput: ""
    }
    setUserSearchInput = (e) => {
        this.setState({userSearchInput:e.target.value});
    }
    searchUserGists = (e) => {
        //Fetch all the gists made by the user and store in a variable
        //The API only allows a per page approach, with a limited number of results (we cannot fetch all the results directly)
        //We download only by a per page basis to limit calls and traffic
        let pageNo = this.props.pageNo;
        const pageSize = 10;
        fetch(`https://api.github.com/users/${this.state.userSearchInput}/gists?per_page=${pageSize.toString()}&page=${pageNo.toString()}`)
        .then((res) =>{
            return res.json();
        }).then((result)=>{
            if (result.message != 'Not Found')
            {
                let newGists = [];
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
                    this.props.setUser(this.state.userSearchInput);
                    this.props.setUserFound(true);
                }
            }
            else
            {
                this.props.setUserGists([]);
                this.props.setUserFound(false);
            }
        })
        

    }
    render() {
        return (
            <div className = "SearchBar">
                <input onChange = {this.setUserSearchInput} value = {this.state.userSearchInput} type = 'text' placeholder = "Search here for users"></input>
                <button onClick = {this.searchUserGists}>Search</button>
            </div>
        )
    }
}
