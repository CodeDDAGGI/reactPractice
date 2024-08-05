import React from 'react';
import SeachTodo from '../component/SeachTodo';
import SeachTodoList from '../component/SeachTodoList';

function MainPage() {
    return (
        <>
            <SeachTodo/>
            <SeachTodoList/>  
        </>
    );
}

export default MainPage;