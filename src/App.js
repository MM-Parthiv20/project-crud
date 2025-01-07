import logo from './logo.svg';
import '../src/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Components/Create';
import Read from './Components/Read';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <BrowserRouter>
          <Routes>
            <Route exact path="/read" element={<Read/>}/>
            <Route exact path="/" element={<Create/>}/>
            {/* <Route link="/" element={<Create/>}/> */}
          </Routes>
          </BrowserRouter>
          {/* <h1>home working</h1> */}
        </div>
      </div>
    </div>



  );
}

export default App;
