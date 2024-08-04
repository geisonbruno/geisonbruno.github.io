import {  MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "../src/index.css";
import PortfolioLayout from "./layouts/PortfolioLayout";
import HomePage from "./pages/HomePage";




const App = () => {
    return (
        <MantineProvider forceColorScheme={"dark"}>
            <BrowserRouter>
                <Routes>
                    <Route element={<PortfolioLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/home2" element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
};

export default App;