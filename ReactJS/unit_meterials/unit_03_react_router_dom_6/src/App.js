import './App.css';
import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import UserId from './UserId';
import Error from './Error';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route path="/users/:userName" element={<UserId/>} />
          <Route path="*" element={<Error/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
