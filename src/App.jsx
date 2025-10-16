import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
