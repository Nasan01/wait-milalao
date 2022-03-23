import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
      <>
        <Header />
        <div className="bg-slate-500 min-h-screen flex text-white text-2xl justify-center items-center">  
          <Link to={"/games/rock-paper-scissor"}>Rock-Paper-Scissor</Link>
          <Outlet />
        </div>
      </>

  );
}

export default App;
