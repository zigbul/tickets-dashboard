import { forwardRef } from "react";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const FormInput = forwardRef((props, ref) => {
    return (
        <FormControl required sx={{ m: 1, minWidth: 300 }}>
            <TextField
                required
                id="outlined-required"
                label="Ticket Title"
                defaultValue=""
            />
        </FormControl>
    );
});

export default FormInput;
