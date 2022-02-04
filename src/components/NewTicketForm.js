import styled from 'styled-components';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addNewTicket } from '../store/slices/ticketSlice';
import { DASHBOARD_ROUTE } from '../utils/constants';

import FormSelect from './FormSelect';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';


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
`

const NewTicketForm = () => {
    const dispatch = useDispatch();
    const { push } = useHistory();

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            title: "",
            priority: "",
            text: ""
        }
    });

    const onSubmit = data => {
        dispatch(addNewTicket(data));
        reset();
        push(DASHBOARD_ROUTE);
    };

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
                <InputButton margin="8px" type="submit" value="Save Details" />
            </FormRow>
        </Form>
    );
};

export default NewTicketForm;