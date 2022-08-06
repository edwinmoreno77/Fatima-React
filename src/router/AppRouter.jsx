import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { ChocolatePage, VanillaPage } from "../cakes";
import { Footer, Header, Navbar, Slider } from "../ui";

// import { HeroesRoutes } from "../heroes";//CakeRoutes
// import { PrivateRoute } from "./PrivateRoute";
// import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <Header />
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="chocolate" element={<ChocolatePage />} />
                <Route path="vanilla" element={<VanillaPage />} />

                <Route path="/" element={<Navigate to="/chocolate" />} />

            </Routes>
            <Footer />
            {/* <Routes>

                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />


                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

            </Routes> */}
        </>
    )
}
