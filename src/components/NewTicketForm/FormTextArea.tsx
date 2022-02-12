import React, { forwardRef } from "react";

import FormControl from '@mui/material/FormControl';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type Props = {
    value: string,
    onChange: any & TextFieldProps,
}

const FormTextArea = forwardRef((props: Props, ref: any & TextFieldProps) => {

    return (
        <FormControl required sx={{ m: 1, minWidth: 616 }}>
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                value={props.value}
                onChange={props.onChange}
                ref={ref}
            />
        </FormControl>
    );
});

export default FormTextArea;