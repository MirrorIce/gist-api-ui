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
        //We will have to download all the results page by page.
        let hasGists = true;
        let isUserFound = true;
        let pageNo = this.props.pageNo;
        const pageSize = 10;
        // while(hasGists)
        // {
            fetch(`https://api.github.com/users/${this.state.userSearchInput}/gists?per_page=${pageSize.toString()}&page=${pageNo.toString()}`)
            .then((res) =>{
                return res.json();
            }).then((result)=>{
                console.log(result);
                if (result['message'] === undefined)
                {
                    isUserFound = true;
                    if (result.length > 0)
                    {
                        this.props.setUserGists([]);
                        result.map((element)=>{
                            let newGist = {
                                description: element.description,
                                forks_url: element.forks_url,
                                files: element.files
                            }
                            this.props.setUserGists([...this.props.userGists,newGist]);
                        })
                    }
                }
                else
                {
                    isUserFound = false;
                }
                console.log(this.props.userGists);
            })
        // }
        return isUserFound;

    }
    render() {
        return (
            <div>
                <input onChange = {this.setUserSearchInput} value = {this.state.userSearchInput} type = 'text'></input>
                <button onClick = {this.searchUserGists}>Search</button>
            </div>
        )
    }
}
