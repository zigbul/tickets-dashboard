import React, { forwardRef } from "react";

import FormControl from '@mui/material/FormControl';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type Props = {
    value: string,
    onChange: any & TextFieldProps,
}

const FormInput = forwardRef((props: Props, ref: any & TextFieldProps) => {
    
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
