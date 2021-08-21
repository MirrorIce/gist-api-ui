import './App.css';
import SearchBar from './SearchBar';
import GistContainer from './GistContainer';
import {useState} from "react";

function App() {
  const [user,setUser] = useState([]);
  const [userGists, setUserGists] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [isUserFound, setUserFound] = useState(false);
  return (
    <div className="App">
      <SearchBar setPageNo = {setPageNo} userGists = {userGists} setUserGists = {setUserGists} setUserFound = {setUserFound} user={user} setUser = {setUser}/>
      {(isUserFound===true)?<GistContainer pageNo = {pageNo} setPageNo = {setPageNo} userGists = {userGists} setUserGists = {setUserGists} setUserFound = {setUserFound} user = {user} />:null}
    </div>
  );
}

export default App;
