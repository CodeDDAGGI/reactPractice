import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigeter from './component/Navigeter';
import { Global } from '@emotion/react';
import { reset } from './styles/Global';
import SeachTodo from './component/SeachTodo';
import SeachTodoList from './component/SeachTodoList';
import MainPage from './page/MainPage';

function App() {
  return (
    <>
      <Global styles={reset}/>
      <Navigeter/>
      <Routes>
        <Route path='/MainPage' element={<MainPage/>} />
        <Route path='/SeachTodo' element={<SeachTodo/>} />
        <Route path='/SeachTodoList' element={<SeachTodoList/>} />
      </Routes>
    </>
  );
}

export default App;
