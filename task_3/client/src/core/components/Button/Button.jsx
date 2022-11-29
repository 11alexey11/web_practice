import PropTypes from 'prop-types';

import { ButtonStyled } from './style';

const Button = ({ text, disabled, onClick }) => {
    return (
        <ButtonStyled 
            type='button'
            onClick={onClick}
            disabled={disabled}
            value={text}
        />
    );
};

Button.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export { Button };