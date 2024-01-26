import { Outlet } from 'react-router-dom';
import Body from './components/Body.jsx';
import Header from './components/Header.jsx';

import './index.css';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className='w-full flex flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
