import firebase from "firebase";
import { Container } from "../styles";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const LoginForm = ({ context }) => {
    const { auth } = context;
    const dispatch = useDispatch();

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        const currentUser = {
            name: user.displayName,
            avatar: user.photoURL,
            uid: user.uid,
        }
        dispatch(setUser(currentUser));
    }

    return (
        <Container>
            <Button onClick={login}>
                Вход через Google
            </Button>
        </Container>
    );
};

export default LoginForm;