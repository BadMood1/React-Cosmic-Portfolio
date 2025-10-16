import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
    return (
        <>
            <BrowserRouter basename="/React-Cosmic-Portfolio">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
