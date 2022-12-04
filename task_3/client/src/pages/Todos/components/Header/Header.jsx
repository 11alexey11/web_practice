import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../core/components/Button';
import { HeaderContainerStyled, HeaderStyled } from './style';

const Header = () => {
    const user = useMemo(() => localStorage.getItem('user'), []);
    const navigate = useNavigate();

    const handleOnClick = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <HeaderContainerStyled>
            <HeaderStyled>{`Привет, ${user}`}</HeaderStyled>
            <Button text='Выйти' onClick={handleOnClick}></Button>
        </HeaderContainerStyled>
    )
};

export { Header };
