import { useCallback, useState } from 'react';
import { useEffect, useMemo } from 'react';

import { Button } from '../../../../core/components/Button';
import { Text } from '../../../../core/components/Text';
import { TodoItem } from './components/TodoItem';
import { 
    ListContainerStyled,
    TodoButtonsContainerStyled,
    TodoListContainerStyled
} from './style';

const List = () => {
    const user = useMemo(() => localStorage.getItem('user'), []);
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState('');

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

    const handleOnChangeName = useCallback((value) => {
        setName(value);
    }, []);

    const handleOnAddNewItem = useCallback(() => {
        setTodos([...todos, { name: name, isDone: false }])
    }, [name, todos]);

    const handleOnChangeItem = useCallback((index) => {
        const todosItem = todos[index];
        const firstPart = todos.slice(0, index);
        const secondPart = todos.slice(index + 1, todos.length);
        setTodos([
            ...firstPart,
            { name: todosItem.name, isDone: !todosItem.isDone },
            ...secondPart
        ]);
    }, [todos]);

    const handleOnRemoveItem = useCallback((index) => {
        const newTodos = todos.concat();
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }, [todos]);

    const handleOnSaveItems = useCallback(() => {
        fetchData('http://localhost:5000/todos', 'PUT', { user, todos })
            .then((result) => {
                setTodos(result.todos);
            });
    }, [todos, user, fetchData]);

    return (
        <ListContainerStyled>
            <TodoButtonsContainerStyled>
                <Text onChange={handleOnChangeName} />
                <Button onClick={handleOnAddNewItem} disabled={!name.length} text='Добавить' />
                <Button onClick={handleOnSaveItems} disabled={!todos.length} text='Сохранить' />
            </TodoButtonsContainerStyled>
            <TodoListContainerStyled>
                {todos.map((todo, index) => {
                    return (
                        <TodoItem 
                            key={index}
                            name={todo.name}
                            isDone={todo.isDone}
                            onChange={() => handleOnChangeItem(index)}
                            onClick={() => handleOnRemoveItem(index)}
                        />
                    )
                })}
            </TodoListContainerStyled>
            
        </ListContainerStyled>
    );
}

export { List };
