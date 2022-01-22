import styled from 'styled-components';
import lightThemeSvg from '../assets/light-theme-button.svg';
import darkthemeSvg from '../assets/dark-theme-button.svg';

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
    return (
        <Wrapper margin={margin}>
            <ThemeButton url={lightThemeSvg} />
            <ThemeButton url={darkthemeSvg}/>
        </Wrapper>
    );
};

export default ThemeButtons;
