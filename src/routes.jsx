import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pages404 from "./pages/Pages404";
import PageBase from "./pages/PageBase";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="*" element={<Pages404 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes