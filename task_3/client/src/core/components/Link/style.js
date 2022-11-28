import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)({
    display: 'flex',
    padding: '1rem 1.5rem',
    borderRadius: '1rem',
    border: '1px solid #000000',
    fontSize: '2rem',
    color: '#000000',
    textDecoration: 'none',
    '&:hover': {
        color: '#4096FF',
        borderColor: '#4096FF',
    }
});