import toast from "react-hot-toast";

const styles: {} = {
    position: "fixed",
    top: 0,
    left: '50%',
    padding: "5px 10px",
    color: "white",
    fontWeight: "bold",
}

const succesStyles = {
    background: 'lightgreen',
}

const errorStyles = {
    background: 'tomato',
}

export const toastSucces = (message: string) => toast(message, {style: {...styles, ...succesStyles}});
export const toastError = (message: string) => toast(message, {style: {...styles, ...errorStyles}});