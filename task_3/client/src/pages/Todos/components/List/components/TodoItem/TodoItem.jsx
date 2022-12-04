import PropTypes from 'prop-types';

import { Checkbox } from '../../../../../../core/components/Checkbox';
import { TodoHeaderStyled, TodoItemStyled } from './style';

const TodoItem = ({ name, isDone, onChange }) => {
    return (
        <TodoItemStyled>
            <TodoHeaderStyled>{name}</TodoHeaderStyled>
            <Checkbox checked={isDone} onChange={onChange} />
        </TodoItemStyled>
    )
};

TodoItem.propTypes = {
    name: PropTypes.string,
    isDone: PropTypes.bool,
    onChange: PropTypes.func
}

export { TodoItem };