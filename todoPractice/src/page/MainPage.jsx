import React, { useState } from 'react';
import SearchTodo from '../component/SearchTodo';
import SearchTodoList from '../component/SearchTodoList';
import api from '../api/axiosApi';

function MainPage() {
    const [ todoList , setTodoList ] = useState([]);

    const getTodoList = async() => {
        try {
            const response = await api.get("todolist")
            console.log(response.data);
            setTodoList(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {/* 단건조회 */} 
            <SearchTodo todoList={todoList}  getTodoList={getTodoList}/>

            {/* 다건조회 */}
            <SearchTodoList todoList={todoList} getTodoList={getTodoList} />  
        </>
    );
}

export default MainPage;