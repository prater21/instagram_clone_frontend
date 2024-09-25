import { BrowserRouter } from "react-router-dom";
import MainContainer from "./MainContainer";
// import { AlertModal } from "../components/Modals";
import ScrollToTop from "../context/ScrollToTop";

const Routes = () => {
    return (
        <>
            <BrowserRouter basename="/">
                <ScrollToTop />
                <MainContainer />
                {/* <AlertModal /> */}
            </BrowserRouter>
        </>
    );
};

export default Routes;
