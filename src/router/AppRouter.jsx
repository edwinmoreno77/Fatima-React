import { Navigate, Route, Routes } from "react-router-dom";

// import { HeroesRoutes } from "../heroes";//CakeRoutes
import { LoginPage } from "../auth/pages/LoginPage";
// import { PrivateRoute } from "./PrivateRoute";
// import { PublicRoute } from "./PublicRoute";
import { ChocolatePage } from "../cakes/pages/ChocolatePage";
import { VanillaPage } from "../cakes/pages/VanillaPage";
import { Footer, Header, Navbar, Slider } from "../ui";

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
