import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTicket } from '../store/slices/ticketSlice';

import styled from 'styled-components';
import trash from '../assets/trash.svg';
import done from '../assets/done.svg';
import clear from '../assets/clear.svg';


const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
user-select: none;
`

const TrashButton = styled.button`
width: 24px;
height: 24px;
border: none;
background-color: transparent;
background-image: url(${({url}) => url});
background-position: center;
cursor: pointer;
transition: all .3s linear;

&:hover {
    transform: scale(1.5);
}
`

const DeleteButton = ({ id }) => {
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