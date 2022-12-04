import { useCallback } from 'react';
import PropTypes from 'prop-types';

import { CheckboxStyled } from './style';

const Checkbox = ({ checked, onChange }) => {

    const handleOnChange = useCallback(() => {
        if (onChange) {
            onChange();
        }
    }, [onChange])
    return (
        <CheckboxStyled 
            type='checkbox'
            onChange={handleOnChange}
            checked={checked}
        />
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
}

export { Checkbox };
 