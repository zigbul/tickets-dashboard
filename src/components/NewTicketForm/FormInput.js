import { forwardRef } from "react";

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const FormInput = forwardRef((props, ref) => {
    
    return (
        <FormControl required sx={{ m: 1, minWidth: 300 }}>
            <TextField
                id="outlined-required"
                label="Ticket Title"
                value={props.value}
                ref={ref}
                onChange={props.onChange}
                required
            />
        </FormControl>
    );
});

export default FormInput;
