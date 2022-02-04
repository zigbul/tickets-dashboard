import { useDispatch } from "react-redux";
import { getUser } from "../store/slices/userSlice";

import { Container } from "../styles";
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