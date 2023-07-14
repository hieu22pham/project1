import logo from './logo.svg';
import './App.css';
// import {Button} from 'antd'
import LearnGrid from './components/LearnGrid';
import LayoutDefault from './components/layout';
import {BrowserRouter, NavLink, Link, Routes, Route} from 'react-router-dom'
import Layout404 from './components/layout/layout404/Layout404';
import Bookroom from './components/pages/Bookroom';
import CreateRoom from './CreateRoom';
import ListRoom from './ListRoom';

function App() {
  return (
    <>
      
      {/* <LearnGrid /> */}
        <Routes>
          <Route path="/" element={<LayoutDefault />} >
            <Route path="/" element={<LearnGrid />}/>
            <Route path="/book-room" element={<Bookroom />}></Route>
            <Route path="/create-room" element={<CreateRoom />}></Route>
            <Route path="/list-room" element={<ListRoom />}></Route>
            <Route path="*" element={<Layout404 />} />
          </Route>
          
          
        </Routes>
    </>
  );
}

export default App;
