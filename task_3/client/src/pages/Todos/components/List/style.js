import styled from '@emotion/styled';

export const ListContainerStyled = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
});

export const TodoListContainerStyled = styled.div({
    maxHeight: '50rem',
    maxWidth: '50rem',
    width: '100%',
    height: '100%',
    overflow: 'auto',
})

export const TodoButtonsContainerStyled = styled.div({
    display: 'flex',
    gap: '0.5rem',
    padding: '1.5rem 0',
});
