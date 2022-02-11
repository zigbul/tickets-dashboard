import { forwardRef } from "react";
import { useSelector } from "react-redux";

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

type UserState = {
    user: {
        currentUser: {
            uid: string | number,
        }
    }
}

type TicketState = {
    ticket: {
        currentTicket: {
            uid: string | number,
        }
    }
}

const FormInput = forwardRef((props, ref) => {
    const { currentUser } = useSelector((state: UserState) => state.user);
    const { currentTicket } = useSelector((state: TicketState) => state.ticket);
    
    return (
        <FormControl required sx={{ m: 1, minWidth: 300 }}>
            <TextField
                id="outlined-required"
                label="Ticket Title"
                value={props.value}
                ref={ref}
                onChange={props.onChange}
                required
                disabled={currentUser.uid !== currentTicket.uid || currentTicket.completed}
            />
        </FormControl>
    );
});

export default FormInput;
