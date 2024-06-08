import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pages404 from "./pages/Pages404";
import PageBase from "./pages/PageBase";
import Bets from "./pages/Bets";
import Virtual from "./pages/Virtuais";
import Cassino from "./pages/Cassino";
import Fantasy from "./pages/Fantasy";
import TermsOfUse from "./pages/UsefulLinks/TermsofUse";
import HelpCenter from "./pages/UsefulLinks/HelpCenter";
import BettingRules from "./pages/UsefulLinks/BettingRules";
import GamingPolicies from "./pages/UsefulLinks/GamingPolicies";
import Security from "./pages/UsefulLinks/Security";
import PaymentMethods from "./pages/UsefulLinks/PaymentMethods";
import PrivacyPolicy from "./pages/UsefulLinks/PrivacyPolicy";
import LoginForm from "./pages//InputForms/LoginForm";
import RegistrationForm from "./pages/InputForms/RegistrationForm";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/registar" element={<RegistrationForm />}></Route>
                <Route path="/entrar" element={<LoginForm />}></Route>

                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="*" element={<Pages404 />}></Route>
                    <Route path="/Bets" element={<Bets />}></Route>
                    <Route path="/Virtual" element={<Virtual />}></Route>
                    <Route path="/Cassino" element={<Cassino />}></Route>
                    <Route path="/Fantasy" element={<Fantasy />}></Route>
                    <Route path="/Termos" element={<TermsOfUse />}></Route>
                    <Route path="/Ajudas" element={<HelpCenter />}></Route>
                    <Route path="/Regras" element={<BettingRules />}></Route>
                    <Route path="/Políticasdejogos" element={<GamingPolicies />}></Route>
                    <Route path="/Segurança" element={<Security />}></Route>
                    <Route path="/Meiosdepagamento" element={<PaymentMethods />}></Route>
                    <Route path="/PolíticasdePrivacidade" element={<PrivacyPolicy />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes