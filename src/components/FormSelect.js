import { forwardRef } from 'react';
import { useSelector } from "react-redux";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const FormSelect = forwardRef((props, ref) => {
    const { currentUser } = useSelector(state => state.user);
    const { currentTicket } = useSelector(state => state.ticket);

    return (
        <FormControl required sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-required-label">Select Priority</InputLabel>
            <Select
                name={props.name}
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={props.value}
                label="Select Priority *"
                onChange={props.onChange}
                ref={ref}
                disabled={currentUser.uid !== currentTicket.uid}
            >
                <MenuItem value={"High"}>High</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"Low"}>Low</MenuItem>
            </Select>
        </FormControl>
    );
});

export default FormSelect;