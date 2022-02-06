import './App.css';
import FormAdd from './Components/FormAdd';

import TableData from './Components/TableData';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path = "/" element = {<FormAdd />} />
        <Route exact path = "/table" element = {<TableData />} />
    </Routes>
  </Router>
  );
}

export default App;
