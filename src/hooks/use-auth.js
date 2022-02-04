import { useSelector } from "react-redux";

const useAuth = () => {
    const { currentUser, loading, error } = useSelector(state => state.user);

    return {
        isAuth: !!currentUser,
        loading,
        error
    }
}

export default useAuth;