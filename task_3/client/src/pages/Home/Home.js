import { Link } from '../../core/components/Link';
import { HomeContainerStyled, HomeHeaderStyled } from './style';

const Home = () => {
    return (
        <HomeContainerStyled>
            <HomeHeaderStyled>Добро пожаловать!!!</HomeHeaderStyled>
            <Link href='login'>Войти</Link>
        </HomeContainerStyled>
        
    )
}

export { Home };
