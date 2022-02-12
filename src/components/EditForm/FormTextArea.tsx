import React from "react";
import { forwardRef } from "react";
import { useSelector } from "react-redux";

import FormControl from '@mui/material/FormControl';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type UserState = {
    user: {
        currentUser: {
            uid: string,
        }
    }
}

type TicketState = {
    ticket: {
        currentTicket: {
            uid: string,
            completed: boolean,
        }
    }
}

type Props = {
    name: string,
    value: string,
    onChange: any & TextFieldProps,
}

const FormTextArea = forwardRef((props: Props, ref: any & TextFieldProps) => {
    const { currentUser } = useSelector((state: UserState) => state.user);
    const { currentTicket } = useSelector((state: TicketState) => state.ticket);

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