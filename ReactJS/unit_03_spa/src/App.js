import About from './About';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Category from './Category';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryDescription from './CategoryDescription';
import Error404 from './Error404';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat" element={<Category />} />
          <Route path="/cat/:catName" element={<CategoryDescription />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
