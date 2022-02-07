import { forwardRef } from "react";

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const FormTextArea = forwardRef((props, ref) => {

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