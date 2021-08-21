# Gist UI

## Description

A SPA which allows ts users to enter a username and get the full list of public Gists for that user by using the API provided by Github Gist API. Based on the search, it will reveal the gists and details for each gist, such as: 
1. gist description 
2. latest forks
3. filetypes for each gist file
4. the content of each file
## Getting Started with the app
You can either commands:  
- use yarn start for the dev version    
- yarn build and then serve -s build for the build version 

## Design and Coding decisions

### Framework

The application is written in React. This allows to develop SPA's such as this app with relative ease and flexibility.

### App Hierarchy  
  
App    
&nbsp;&nbsp;&nbsp;&nbsp;SearchBar  
&nbsp;&nbsp;&nbsp;&nbsp;GistContainer  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gist(list)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FileContainer  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PageCounter  

### Short Description of app hierarchy  
  
1. App -> container for all the functionality. Also, this has the majority of the states used withing the application, namely: user, userGists, pageNo, isUserFound; 

2. SearchBar -> component for the user input handling;  

3. GistContainer -> wrapper for the search result;  

4. Gist -> component used for displaying gists (description, forks and files). There might be multiple Gist components in a GistContainer;  

5. FileContainer -> component used for displaying the file details(name, language and code). Might be used multiple times on the same Gist component;

6. PageCounter -> used for enabling the user to set the page number query. This component also handles the fetching of gists after the page number was updated.

### States

1. user -> used to store the input typed in the search bar;
2. userGists -> used to store the found gists, based on the gist user and page number;
3. pageNo -> page number for the query;
4. isUserFound -> state for telling whether a gist user was found or not.  

### Technical decisions

#### States  
Most of the states which are used in this app are found in the parent component (App). The reason for this is that all the children need the state values in a way or another.This means that having to rely on a child's state, instead of passing from parent to child and back would increase the implementation difficulty.

#### Queries

The gists' number of queries per page was limited to 10, which is more of an empirical number. But, emphasis should be put on the fact that the number of queries is limited in order to minimise network traffic and number of queries.  
  
This approach was also taken for the displaying of forks and files. Therefore, instead of loading the code and latest forks for each query (10 gists), the app will load only the specific files and forks which the user wants to see. As a result, there are less API calls.  
  
This decision was made as an adaptation to the API, which only allows to fetch the forks and file contents based on additional API calls.


#### Styling
  
Flex is used because of the more "linear" design of the app.

## Further improvements

- Use Redux for state management. This would allow for a more separate, readable code
- Allow the user to choose the number of gists to be displayed per page, but by limiting the maximum number possible
- Find a way to query the total number of gists and forks and display them;
- Add the possibility to change pages with a number input. The previous mentioned feature is needed
- Better styling

