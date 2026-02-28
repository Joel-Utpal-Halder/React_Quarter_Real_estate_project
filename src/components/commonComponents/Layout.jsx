import Header from "../Header";
import Menu from "../Menu";
import ExploreProperties from "../ExploreProperties";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <Menu />
            <main>
                <Outlet /> {/* Page-specific content goes here */}
            </main>
            <ExploreProperties />
            <Footer />
        </>
    );
}

export default Layout;