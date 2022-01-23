import { useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import { Controller, useForm } from "react-hook-form";
import FormSelect from './FormSelect';

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
    const [text, setText] = useState('');

    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            priority: "",
            text: ""
        }
    });
    const onSubmit = data => console.log(data);

    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                
                <Controller
                    name="priority"
                    control={control}
                    render={({ field }) => {
                        console.log(field)
                        return <FormSelect {...field} /> }
                    }
                >
                </Controller>
                
            </FormRow>
            <FormRow>
                <FormControl required sx={{ m: 1, minWidth: 616 }}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        // value={text}
                        // onChange={handleChangeText}
                    />
                </FormControl>
            </FormRow>
            <FormRow>
                <InputButton margin="8px" type="submit" value="Save Details" />
            </FormRow>
        </Form>
    );
};

export default TicketForm;