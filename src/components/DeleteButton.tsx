import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const { deleteTicket } = require('../store/slices/ticketSlice.js');

import styled from 'styled-components';
const trash = require('../assets/trash.svg');
const done = require('../assets/done.svg');
const clear = require('../assets/clear.svg');


const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
user-select: none;
`

const TrashButton = styled.button<{url: string}>`
width: 24px;
height: 24px;
border: none;
background-color: transparent;
background-image: url(${props => props.url});
background-position: center;
cursor: pointer;
transition: all .3s linear;

&:hover {
    transform: scale(1.5);
}
`

type Props = {
    id: string,
}

const DeleteButton = ({ id }:Props) => {
    const dispatch = useDispatch();
    const [isActive, setActive] = useState(false);
 
    return isActive ? 
    (
        <Wrapper>
            <TrashButton
                onClick={() => dispatch(deleteTicket(id))} 
                type="button" 
                url={done} 
            />
            <TrashButton 
                onClick={() => setActive(false)}
                type="button" 
                url={clear} 
            />
        </Wrapper>
    )
    :
    (
        <Wrapper>
            <TrashButton
                onClick={() => setActive(true)}
                type="button" 
                url={trash} 
            />
        </Wrapper>
    )
};

export default DeleteButton;