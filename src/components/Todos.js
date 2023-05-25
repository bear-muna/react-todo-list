import React from 'react';
import { useState } from 'react';

export default function Todos () {
    const [todos, setTodos] = useState(['Groceries', 'Hit the Gym', 'Cook Dinner']);

    return (
        <>
        {todos.map((todo) => <li>{todo}</li>)}
        </>
    )
}