import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/components/Header'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Random from './pages/Random'
import NewOrder from './pages/NewOrder'

function App() {
  return (
    <>
      <Router>
        <div className='mx-auto'>
          <Header /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/random' element={<Random />} />
            <Route path='/new-order' element={<NewOrder />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
