import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigeter from './component/Navigeter';
import { Global } from '@emotion/react';
import { reset } from './styles/Global';
import MainPage from './page/MainPage';
import SearchTodoList from './component/SearchTodoList';
import SearchTodo from './component/SearchTodo';

function App() {
  return (
    <>
      <Global styles={reset}/>
      <Navigeter/>
      <Routes>
        <Route path='/MainPage' element={<MainPage/>} />
        <Route path='/SearchTodo' element={<SearchTodo/>} />
        <Route path='/SearchTodoList' element={<SearchTodoList/>} />
      </Routes>
    </>
  );
}

export default App;
