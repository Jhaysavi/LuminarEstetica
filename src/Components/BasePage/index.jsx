import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function BasePage() {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
}

export default BasePage;