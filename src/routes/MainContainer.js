import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PAGES } from "../constants/routes";
import Login from "../pages/Login/Login";
import Intro from "../pages/Intro/Intro";
import Join from "../pages/Join/Join";

export const pages = [
    { path: PAGES.INTRO, component: <Intro /> },
    { path: PAGES.SIGNUP, component: <Join /> },
    { path: PAGES.JOIN_EMAIL, component: <Login /> },
    { path: PAGES.JOIN_USERNAME, component: <Login /> },
    // { path: PAGES.INTRO, component: <IntroPage /> },

];

const MainContainer = () => {
    return (
        <Routes>
            {pages.map(({ component, path, exact, child, index }) => {
                return (
                    <Route exact={exact} path={path} element={component} key={`${path}_${index}`}>
                        {child?.map((ch, idx) => (
                            <Route path={ch.path} element={ch.component} key={`${ch.path}_${idx}`} />
                        ))}
                    </Route>
                );
            })}
            {/* <Route path={"*"} element={<Error404 />} /> */}
        </Routes>
    );
};

export default MainContainer;
