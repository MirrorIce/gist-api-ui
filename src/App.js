import './App.css';
import SearchBar from './SearchBar';
import GistContainer from './GistContainer';
import {useState} from "react";

function App() {
  const [userGists, setUserGists] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [isUserFound, setUserFound] = useState(false);
  return (
    <div className="App">
      <SearchBar pageNo = {pageNo} userGists = {userGists} setUserGists = {setUserGists} setUserFound = {setUserFound}/>
      {(isUserFound===true)?<GistContainer pageNo = {pageNo} setPageNo = {setPageNo} userGists = {userGists} />:null}
    </div>
  );
}

export default App;
