import styled from "@emotion/styled";

export const TextStyled = styled.input({
    display: 'flex',
    padding: '1rem 1.5rem',
    borderRadius: '1rem',
    border: '1px solid #000000',
    fontSize: '2rem',
    color: '#000000',
    textDecoration: 'none',
    '&:hover': {
        '&::placeholder': {
            color: '#4096FF',
        },
        borderColor: '#4096FF',
    },
    '&:focus': {
        border: '1px solid #4096FF',
    },
});