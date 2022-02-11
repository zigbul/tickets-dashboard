import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
const lightThemeSvg = require('../assets/light-theme-button.svg');
const darkthemeSvg = require('../assets/dark-theme-button.svg');
const { changeTheme } = require('../store/slices/themeSlice');

const Wrapper = styled.div<{margin: string}>`
display: flex;
align-items: center;
justify-content: center;
margin: ${({ margin }) => margin || "0"};
`

const ThemeButton = styled.button<{url: string}>`
display: flex;
width: 24px;
height: 24px;
border: none;
background-color: transparent;
background-image: url(${({ url }) => url});
background-repeat: no-repeat;
background-position: center;
&:not(:last-child) {
    margin-right: 23px;
}
`

type Props = {
    margin: string,
}

type State = {
    theme: {
        theme: string,
    }
};

const ThemeButtons = ({ margin }: Props) => {
    const { theme } = useSelector((state: State) => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
    
    return (
        <Wrapper margin={margin}>
            <ThemeButton url={lightThemeSvg} onClick={() => dispatch(changeTheme('light'))} />
            <ThemeButton url={darkthemeSvg} onClick={() => dispatch(changeTheme('dark'))} />
        </Wrapper>
    );
};

export default ThemeButtons;
