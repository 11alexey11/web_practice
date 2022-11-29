import ReactDOM from 'react-dom/client';
import { Global, css } from '@emotion/react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { Login } from './pages/Login';

const GlobalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        outline: none;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    html {
        font-size: 10px;
    }

    #root {
        display: flex;
        flex-direction: column;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Global styles={GlobalStyles} />
        <Routes>
            <Route path='/' element={<Login />} />
            {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>
    </BrowserRouter>
    
);
