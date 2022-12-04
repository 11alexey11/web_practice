import { useCallback, useState } from 'react';
import { useEffect, useMemo } from 'react';

import { ListContainerStyled } from './style';

const List = () => {
    const user = useMemo(() => localStorage.getItem('user'), []);
    const [todos, setTodos] = useState([]);

    const fetchData = useCallback(async (url, method, body) => {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        });

        const result = await response.json();

        return result;
    }, []);

    useEffect(() => {
        fetchData('http://localhost:5000/todos', 'POST', { user })
            .then((result) => {
                setTodos(result.todos);
            });
    }, [user, fetchData, setTodos]);

    console.log(todos);

    return (
        <ListContainerStyled>
            {todos.map((todo) => {
                return <div>{todo.name}</div>
            })}
        </ListContainerStyled>
    );
}

export { List };
