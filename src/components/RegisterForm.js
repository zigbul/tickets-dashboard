import { Link } from "react-router-dom"
import { Container } from "../styles";
import { LOGIN_ROUTE } from "../utils/constants";

const RegisterForm = () => {
    return (
        <Container>
            <h1>Register</h1>

            <p>
                Already have an account? <Link to={LOGIN_ROUTE}></Link>
            </p>
        </Container>
    )
}

export default RegisterForm;