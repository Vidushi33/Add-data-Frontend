import './App.css';
import FormCreate from './Components/FormCreate';

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
        <Route exact path = "/" element = {<FormCreate />} />
        <Route exact path = "/table" element = {<TableData />} />
    </Routes>
  </Router>
  );
}

export default App;
