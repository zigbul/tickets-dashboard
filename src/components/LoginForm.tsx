import React from 'react';
import { useDispatch } from "react-redux";
const { getUser } = require("../store/slices/userSlice");

const { Container } = require("../styles");
import Button from '@mui/material/Button';


const LoginForm = () => {
    const dispatch = useDispatch();

    const signIn = () => {
        dispatch(getUser());
    }

    return (
        <Container>
            <Button onClick={signIn}>
                LOGIN WITH GOOGLE
            </Button>
        </Container>
    );
};

export default LoginForm;