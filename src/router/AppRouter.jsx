import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { AllCakesPages, ButterCreamPage, CakePage, GanachePage, HomePage, SearchPage } from "../cakes";
import { Footer, Navbar, Slider } from "../ui";


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            {/* <Slider /> */}
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="buttercream" element={<ButterCreamPage />} />
                <Route path="ganache" element={<GanachePage />} />
                <Route path="allCakes" element={<AllCakesPages />} />
                <Route path="homePage" element={<HomePage />} />
                <Route path="cake/:uid" element={<CakePage />} />
                <Route path="search" element={<SearchPage />} />

                {/* <Route path="/" element={<Navigate to="/homePage" />} /> */}
                <Route path="/" element={<Navigate to="/login" />} />


            </Routes>
            <Footer />
        </>
    )
}
