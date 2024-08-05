import React from 'react';
/** @jsxImportSource @emotion/react */
import *as s from '../styles/SeachTodoList';

function SeachTodoList() {
    return (
        <div css={s.seachResult}>
            <div css={s.todoList}>
                <div css={s.todoListCon}>
                    <div css={s.todohigh}>
                        <h1>
                            TodoList
                        </h1>
                    </div>
                    <div css={s.todoMenu}>
                        <div css={s.menubar}>
                            일자
                        </div>
                        <div css={s.menubar }>
                            내용
                        </div>
                        <div css={s.menubar }>
                            완료
                        </div>
                        <div css={s.menubar }>
                            미완료
                        </div>
                    </div>
                    <div css={s.todoListContent}>
                        {
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeachTodoList;