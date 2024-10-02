import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PAGES } from "../constants/routes";
import Home from "../pages/Home/Home";
import Intro from "../pages/Intro/Intro";
import Join from "../pages/Join/Join";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Profile from "../pages/Profile/Profile";
import Post from "../pages/Post/Post";

export const pages = [
    { path: PAGES.INTRO, component: <Intro /> },
    { path: PAGES.SIGNUP, component: <Join /> },
    { path: PAGES.RESET_PSW, component: <ResetPassword /> },
    { path: PAGES.MAIN, component: <Home /> },
    { path: PAGES.PROFILE, component: <Profile /> },
    { path: PAGES.POST, component: <Post /> },

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
