import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export default function BasePage() { 
    const Home = lazy(() => import("./landing/Home")); 

    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Home />} /> 
            </Routes>
        </Suspense>
    );
}