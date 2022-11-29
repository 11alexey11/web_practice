import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

export const ButtonStyled = styled.input({
    display: 'flex',
    padding: '1rem 1.5rem',
    borderRadius: '1rem',
    border: '1px solid #000000',
    fontSize: '2rem',
    color: '#000000',
    textDecoration: 'none',
    '&:hover': {
        cursor: 'pointer',
        color: '#4096FF',
        borderColor: '#4096FF',
    },
    '&:disabled': {
        cursor: 'not-allowed',
        borderColor: '#D9D9D9',
        color: rgba('#000000', 0.25),
        backgroundColor: rgba('#000000', 0.04),
    }
});