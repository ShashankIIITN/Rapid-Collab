import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Playground from './components/Playground/Playground';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Room from './components/Playground/setup/Room';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/playground' element={<Playground />}></Route>
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/get-started' element={<SignUp />}></Route>
        <Route path='/set-room' element={<Room />}></Route>
      </Routes>
    </>
  )
}

export default App
