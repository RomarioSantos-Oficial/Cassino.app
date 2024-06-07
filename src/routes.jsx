import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pages404 from "./pages/Pages404";
import PageBase from "./pages/PageBase";
import Bets from "./pages/Bets";
import Virtual from "./pages/Virtuais";
import Cassino from "./pages/Cassino";
import Fantasy from "./pages/Fantasy";
import TermsOfUse from "./pages/TermsofUse";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="*" element={<Pages404 />}></Route>
                    <Route path="/Bets" element={<Bets />}></Route>                    
                    <Route path="/Virtual" element={<Virtual />}></Route>                    
                    <Route path="/Cassino" element={<Cassino />}></Route>                    
                    <Route path="/Fantasy" element={<Fantasy />}></Route>                                      
                    <Route path="/Termos" element={<TermsOfUse />}></Route>                                      
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes