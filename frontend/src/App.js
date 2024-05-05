import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/components/Header'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Random from './pages/Random'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/random' element={<Random />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
