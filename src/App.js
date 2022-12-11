/** @format */

import "./App.css";
import Card from "./components/Cards/Card";
import FilterSIdebar from "./components/FilterSIdebar/FilterSIdebar";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <img
        src='https://www.photofunky.net/output/image/f/3/0/5/f3056d/photofunky.gif'
        alt=''
        className='app-img'
      />
      <SearchBar />
      <Card />
      <FilterSIdebar />
    </div>
  );
}

export default App;
