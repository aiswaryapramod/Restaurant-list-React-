import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Restuarantlist from './component/Restuarantlist';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ViewRestuarant from './component/ViewRestuarant';

function App() {
  return (
    <div className="App">
     <Router>
      <header className="App-header">
        <Header/>
        </header>
        <Routes>
          <Route path='/' element={<Restuarantlist/>} />
          <Route path='/ViewRestuarant/:id' element={<ViewRestuarant/>} />

          </Routes>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
