import { Header } from './components/Header';
import { List } from './components/List';
import { TodosContainerStyled } from './style';

const Todos = () => {
    return (
        <TodosContainerStyled>
            <Header />
            <List />
        </TodosContainerStyled>
    )
};

export { Todos };
