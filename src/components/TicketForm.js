import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, PageRow } from '../styles';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Form = styled.form`
padding: 0 20px 53px 20px;
`

const FormRow = styled.div`
display: flex;
align-items: center;
padding: 10px 0;
`

const TicketForm = () => {
    const [Priority, setPriority] = useState('');
    const [text, setText] = useState('');

    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    const handleChangePriority = (event) => {
        setPriority(event.target.value);
    };

    return (
        <Form>
            <FormRow>
                <FormControl required sx={{ m: 1, minWidth: 300 }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Ticket Title"
                        defaultValue=""
                    />
                </FormControl>
                <FormControl required sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-required-label">Select Priority</InputLabel>
                    <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={Priority}
                    label="Age *"
                    onChange={handleChangePriority}
                    fullWidth
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Hight"}>High</MenuItem>
                        <MenuItem value={"Normal"}>Normal</MenuItem>
                        <MenuItem value={"Low"}>Low</MenuItem>
                    </Select>
                </FormControl>
            </FormRow>
            <FormRow>
                <FormControl required sx={{ m: 1, minWidth: 616 }}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        value={text}
                        onChange={handleChangeText}
                    />
                </FormControl>
            </FormRow>
            <FormRow>
                <Button margin="8px">Save Details</Button>
            </FormRow>
        </Form>
    );
};

export default TicketForm;