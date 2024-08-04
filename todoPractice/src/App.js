import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigeter from './Navibar/Navigeter';
import { Global } from '@emotion/react';
import { reset } from './styles/Global';
import SeachTodo from './Navibar/SeachTodo';

function App() {
  return (
    <>
      <Global styles={reset}/>
      <Navigeter/>
      <Routes>
        <Route path='/SeachTodo' element={<SeachTodo/>} />
      </Routes>
    </>
  );
}

export default App;
