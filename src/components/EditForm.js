import firebase from "../firebase";
import styled from 'styled-components';
import { Controller, useForm } from "react-hook-form";
import FormSelect from './FormSelect';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import { useSelector } from 'react-redux';

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

const EditForm = () => {
    const { user } = useSelector(state => state.user);
    const { currentTicket } = useSelector( state => state.ticket);

    console.log(currentTicket)

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            title: currentTicket.title,
            priority: currentTicket.priority,
            text: currentTicket.text,
        }
    });

    const onSubmit = async data => {
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

export default EditForm;