import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import lightThemeSvg from '../assets/light-theme-button.svg';
import darkthemeSvg from '../assets/dark-theme-button.svg';
import { changeTheme } from '../store/slices/themeSlice';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: ${({ margin }) => margin || "0"};
`

const ThemeButton = styled.button`
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

const ThemeButtons = ({ margin }) => {
    const { theme } = useSelector(state => state.theme);
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
