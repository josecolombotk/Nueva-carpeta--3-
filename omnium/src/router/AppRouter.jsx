import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Author from "../pages/Author/Author";
import Story from "../pages/Story/Story";
import Category from "../pages/Category/Category";
import Search from "../pages/Search/Search";
import NotFound from "../pages/NotFound/NotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/autor/:slug" element={<Author />} />

                    <Route path="/cuento/:slug" element={<Story />} />

                    <Route path="/categoria/:slug" element={<Category />} />

                    <Route path="/buscar" element={<Search />} />

                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;