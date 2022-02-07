import { forwardRef } from "react";
import { useSelector } from "react-redux";

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const FormTextArea = forwardRef((props, ref) => {
    const { currentUser } = useSelector(state => state.user);
    const { currentTicket } = useSelector(state => state.ticket);

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
                disabled={currentUser.uid !== currentTicket.uid || currentTicket.completed}
            />
        </FormControl>
    );
});

export default FormTextArea;