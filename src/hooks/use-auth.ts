import { useSelector } from "react-redux";

type UserState = {
    user: {
        currentUser: {},
        loading: boolean,
        error: boolean,
    }
}

const useAuth = () => {
    const { currentUser, loading, error } = useSelector((state: UserState) => state.user);

    return {
        isAuth: !!currentUser,
        loading,
        error
    }
}

export default useAuth;