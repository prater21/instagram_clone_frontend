import { BrowserRouter } from "react-router-dom";
import MainContainer from "./MainContainer";
// import { AlertModal } from "../components/Modals";
import ScrollToTop from "../context/ScrollToTop";
import Toast from "../components/Toast/Toast";

const Routes = () => {
    return (
        <>
            <BrowserRouter basename="/">
                <ScrollToTop />
                <MainContainer />
                {/* <AlertModal /> */}
                <Toast />
            </BrowserRouter>
        </>
    );
};

export default Routes;
