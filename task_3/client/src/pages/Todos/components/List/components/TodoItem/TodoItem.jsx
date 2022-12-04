import PropTypes from 'prop-types';

import { Button } from '../../../../../../core/components/Button';
import { Checkbox } from '../../../../../../core/components/Checkbox';
import { TodoButtonsStyled, TodoHeaderStyled, TodoItemStyled } from './style';

const TodoItem = ({ name, isDone, onChange, onClick }) => {
    return (
        <TodoItemStyled>
            <TodoHeaderStyled>{name}</TodoHeaderStyled>
            <TodoButtonsStyled>
                <Checkbox checked={isDone} onChange={onChange} />
                <Button onClick={onClick} text='Удалить' />
            </TodoButtonsStyled>
            
        </TodoItemStyled>
    )
};

TodoItem.propTypes = {
    name: PropTypes.string,
    isDone: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export { TodoItem };