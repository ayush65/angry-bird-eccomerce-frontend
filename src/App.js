/** @format */

import RoutesPath from "./AllRoutes/AllRoutes";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <RoutesPath />
    </div>
  );
}

export default App;
