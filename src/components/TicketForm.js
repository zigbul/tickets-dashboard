import firebase from "../firebase";
import styled from 'styled-components';
import { Controller, useForm } from "react-hook-form";
import FormSelect from './FormSelect';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';  
import { Redirect, useHistory } from "react-router-dom";

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

const TicketForm = () => {
    let history = useHistory();
    const { user } = useSelector(state => state.user);

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            title: "",
            priority: "",
            text: ""
        }
    });

    const onSubmit = data => {
        const id = uuidv4();
        firebase
        .firestore().collection('tickets').doc(`${id}`).set({
            id: id,
            avatar: user.avatar,
            title: data.title,
            created: firebase.firestore.FieldValue.serverTimestamp(),
            updated: firebase.firestore.FieldValue.serverTimestamp(),
            userName: user.name,
            priority: data.priority,
            text: data.text,
            uid: user.uid,
            completed: false,
        })
        reset();
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

export default TicketForm;