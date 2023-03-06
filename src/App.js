import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Table from './Table';
import CreateApi from './CreateApi';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Table />} />
        <Route path="createApi" element = {<CreateApi/>} />
      </Routes>
    </div>
  );
}

export default App;
