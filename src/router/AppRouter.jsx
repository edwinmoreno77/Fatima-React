import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { ChocolatePage, VanillaPage, AllCakesPages, BestSellerPage } from "../cakes";
import { CakePage } from "../cakes/pages/CakePage";
import { Footer, Header, Navbar, Slider } from "../ui";

// import { HeroesRoutes } from "../heroes";//CakeRoutes
// import { PrivateRoute } from "./PrivateRoute";
// import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Slider />
            {/* <Header /> */}
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="chocolate" element={<ChocolatePage />} />
                <Route path="vanilla" element={<VanillaPage />} />
                <Route path="allCakes" element={<AllCakesPages />} />
                <Route path="masVendido" element={<BestSellerPage />} />
                <Route path="cake/:id" element={<CakePage />} />




                <Route path="/" element={<Navigate to="/masVendido" />} />

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
