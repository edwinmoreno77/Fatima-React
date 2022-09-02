import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import { LoginPage } from "../auth/pages/LoginPage";
import { AllCakesPages, ButterCreamPage, CakePage, GanachePage, HomePage, SearchPage } from "../cakes";
import { useAuthStore } from "../hooks";
import { Footer, Navbar } from "../ui";


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();


    useEffect(() => {
        checkAuthToken();

    }, [])



    return (
        <>
            <Navbar />
            <Routes>
                {
                    (status === 'not-authenticated' || status === 'checking')
                        ? <>
                            <Route path="login" element={<LoginPage />} />
                            <Route path="/*" element={<Navigate to="/login" />} />
                        </>
                        : <>
                            <Route path="buttercream" element={<ButterCreamPage />} />
                            <Route path="ganache" element={<GanachePage />} />
                            <Route path="allCakes" element={<AllCakesPages />} />
                            <Route path="homePage" element={<HomePage />} />
                            <Route path="cake/:uid" element={<CakePage />} />
                            <Route path="search" element={<SearchPage />} />
                            <Route path="/*" element={<Navigate to="homePage#Home" />} />

                        </>


                }


            </Routes>
            <Footer />
        </>
    )
}
