import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Header from './component/Header';
import About from './pages/About';
import Subpages from './pages/Subpages';
import Subpage from './pages/Subpage';


function App() {
  return (
    <div className="App">
      <Header sitename="green"></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:name' element={<Product/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/subpages' element={<Subpages/>}>
            <Route path='/subpages/:id' element={<Subpage/>}/>
          </Route>
          
        </Routes>
    </div>
  );
}

export default App;
