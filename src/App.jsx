import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/user/header'
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <Outlet />
      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default App
