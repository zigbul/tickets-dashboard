import { useState } from 'react';
import styled from 'styled-components';
import firebase from '../firebase';
import trash from '../assets/trash.svg';
import done from '../assets/done.svg';
import clear from '../assets/clear.svg';
import { useHistory } from 'react-router-dom';

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
    const [isActive, setActive] = useState(false);
    const history = useHistory();

    const deleteTicket = (id) => {
        firebase.firestore().collection('tickets').doc(id).delete()
        .then(() => history.push('/dashboard'));
    }
 
    return isActive ? 
    (
        <Wrapper>
            <TrashButton
                onClick={() => deleteTicket(id)} 
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