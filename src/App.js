import './App.css';
import SearchBar from './SearchBar';
import GistContainer from './GistContainer';
import {useState} from "react";

function App() {
  const [userGists, setUserGists] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  return (
    <div className="App">
      <SearchBar pageNo = {pageNo} userGists = {userGists} setUserGists = {setUserGists}/>
      <GistContainer pageNo = {pageNo} setPageNo = {setPageNo} userGists = {userGists}/>
    </div>
  );
}

export default App;
