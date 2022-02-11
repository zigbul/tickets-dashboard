import styled, { css } from 'styled-components';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTicket, setCurrentTicket, updateTicket } from '../../store/slices/ticketSlice';
import { useHistory } from 'react-router-dom';
import { TICKETS_ROUTE } from '../../utils/constants';

import FormSelect from './FormSelect';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import React from 'react';

const Form = styled.form`
padding: 0 20px 53px 20px;
`

const FormRow = styled.div`
display: flex;
align-items: center;
padding: 10px 0;
`

const InputButton = styled.input`
display: flex;
justify-content: center;
align-items: center;
padding: 8px 20px;
margin: ${({ margin }) => margin || 0};
background: ${({ background }) => background || "#2F80ED"};
border: none;
border-radius: 8px;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #FFFFFF;
${({ disabled }) => disabled && css`
    background: black;
`};
`

const EditForm = () => {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const { currentTicket, loading } = useSelector( state => state.ticket);
    const { currentUser } = useSelector(state => state.user);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: currentTicket?.title,
            priority: currentTicket?.priority,
            text: currentTicket?.text,
        }
    });

    const onSubmit = data => {
        dispatch(updateTicket({...currentTicket, ...data}));
        dispatch(setCurrentTicket({...currentTicket, ...data}));
    };

    const onToggleCompleted = () => {
        dispatch(updateTicket({...currentTicket, completed: true}));
        dispatch(setCurrentTicket({...currentTicket, completed: true}));
    } 

    if (loading) return (
        <div style={{ display: "flex", height: "60vh", justifyContent: "center", alignItems: "center"}}>
            <h1>Loading...</h1>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <Controller
                    name="title"
                    control={control}
                    rules={{maxLength: 50}}
                    render={({ field }) => {
                        return <FormInput {...field} /> }
                    }
                />
                <Controller
                    name="priority"
                    control={control}
                    render={({ field }) => {
                        return <FormSelect {...field} /> }
                    }
                />
            </FormRow>
            <FormRow>
                <Controller 
                    name="text"
                    control={control}
                    render={({ field }) => {
                        return <FormTextArea {...field} /> }
                    }
                />
            </FormRow>
            <FormRow>
                {!currentTicket.completed && <InputButton 
                    margin="8px" 
                    type="submit" 
                    value="Save Details" 
                    disabled={currentTicket.uid !== currentUser.uid}
                />}
                {!currentTicket.completed && <InputButton 
                    onClick={onToggleCompleted}
                    margin="8px 8px 8px 30px" 
                    type="button" value="Completed" 
                    background="#F2C94C" 
                    disabled={currentTicket.uid !== currentUser.uid}
                />}
                {!currentTicket.completed && <InputButton 
                    onClick={() => {
                        dispatch(deleteTicket(currentTicket.id));
                        push(TICKETS_ROUTE);
                    }}
                    margin="8px 8px 8px 30px" 
                    type="button" 
                    value="Delete" 
                    background="#EB5757" 
                    disabled={currentTicket.uid !== currentUser.uid}
                />}
            </FormRow>
        </Form>
    );
};

export default EditForm;