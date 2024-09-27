import { Snackbar, SnackbarContent } from "@mui/material";
import "./toast.css";
import useToast from "../../hooks/useToast";

const Toast = (props) => {
    const { toastState, closeToast } = useToast();
    const handleClose = () => {
        closeToast();
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={handleClose}
            autoHideDuration={3000}
            open={toastState.open}
            key={"top center"}
        >
            <SnackbarContent
                style={{
                    backgroundColor: toastState.type === "success" ? "rgb(75,181,67)" : "red",
                }}
                message={<span className="toast-text">{toastState.message}</span>}
            />
        </Snackbar>
    );
};

export default Toast;
