import styled from 'styled-components';
import grid from '../assets/column-view.svg';
import column from '../assets/grid-view.svg';

const ViewWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
&> * + * {
    margin-left: 10px;
}
`

const ViewText = styled.span`
font-weight: bold;
font-size: 14px;
line-height: 22px;
color: #687A92;
`

const ViewButton = styled.button`
width: 24px;
height: 24px;
border: none;
background-color: transparent;
background-image: url(${({ url }) => url });
background-repeat: no-repeat;
background-position: center;
cursor: pointer;
`

const ViewButtons = ({ viewHandler }) => {
    return (
        <ViewWrapper>
            <ViewText>View:</ViewText>
            <ViewButton url={grid} onClick={() => viewHandler('table')} />
            <ViewButton url={column} onClick={() => viewHandler('cards')} />
        </ViewWrapper>
    )
}

export default ViewButtons;