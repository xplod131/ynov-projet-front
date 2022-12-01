import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <Header />
            <section>
                {children}
            </section>
            <Footer />
        </>
    )

}

export default Layout;