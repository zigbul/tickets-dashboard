import { useState } from 'react';
import styled from 'styled-components';
import grid from '../assets/column-view.svg';
import gridActive from '../assets/column-view-active.svg';
import column from '../assets/grid-view.svg';
import columnActive from '../assets/grid-view-active.svg';

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
    const [isActive, setIsACtive] = useState({table: true, cards: false}); 

    const viewToggle = (view, state) => {
        setIsACtive(state);
        viewHandler(view);
    }

    return (
        <ViewWrapper>
            <ViewText>View:</ViewText>
            <ViewButton url={isActive.cards ? columnActive : column} onClick={() => viewToggle('cards', {table: false, cards: true})} />
            <ViewButton url={isActive.table ? gridActive : grid} onClick={() => viewToggle('table', {table: true, cards: false})} />
        </ViewWrapper>
    )
}

export default ViewButtons;