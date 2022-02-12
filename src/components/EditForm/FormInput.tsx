import React, { JSXElementConstructor, ReactElement } from "react";
import { forwardRef } from "react";
import { useSelector } from "react-redux";

import FormControl from '@mui/material/FormControl';
import TextField, { TextFieldProps } from '@mui/material/TextField';

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
            completed: boolean,
        }
    }
}

type Props = {
    value: string,
    onChange: any & TextFieldProps,
}

const FormInput = forwardRef((props: Props, ref: any & TextFieldProps): ReactElement<any, string | JSXElementConstructor<any>> => {
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
