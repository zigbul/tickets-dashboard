import { useState, forwardRef } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const FormSelect = forwardRef((props, ref) => {
    // const [value, setPriority] = useState('');

    // const handleChangePriority = (event) => {
    //     setPriority(event.target.value);
    // };

    return (
        <FormControl required sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-required-label">Select Priority</InputLabel>
            <Select
                name={props.name}
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={props.value}
                label="Age *"
                onChange={props.onChange}
                ref={ref}
            >
                <MenuItem value={"High"}>High</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"Low"}>Low</MenuItem>
            </Select>
        </FormControl>
    );
});

export default FormSelect;