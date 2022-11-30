import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../core/components/Button';
import { Text } from '../../core/components/Text';
import { LoginContainerStyled, LoginHeaderStyled } from './style';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const handleOnChange = useCallback((value) => {
        if (value.length !== 0) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
        setUser(value);
    }, []);

    const handleOnClick = useCallback(() => {
        localStorage.setItem('user', user);
        navigate('/todos');
    }, [navigate, user]);

    return (
        <LoginContainerStyled>
            <LoginHeaderStyled>Добро пожаловать!!! Пожалуйста, введите ваше имя:</LoginHeaderStyled>
            <Text placeholder='Имя' onChange={handleOnChange} />
            <Button disabled={isLogin} text='Войти' onClick={handleOnClick} />
        </LoginContainerStyled>
    )
};

export { Login };