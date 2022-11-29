import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { TextStyled } from './style';

const Text = ({ placeholder, onChange }) => {
    const [value, setValue] = useState('');

    const handleOnChange = useCallback((event) => {
        setValue(event.target.value);

        if (onChange) {
            onChange(event.target.value);
        }
    }, [setValue, onChange])

    return (
        <TextStyled 
            type='text'
            value={value}
            placeholder={placeholder}
            onChange={handleOnChange}
        />
    )
};

Text.propTypes = {
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    onChange: PropTypes.func,
};

export { Text };