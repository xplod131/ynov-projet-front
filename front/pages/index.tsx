import React from "react";
import IndexPage from "../components/IndexPage";
import RegisterPage from "../components/RegisterPage";

const Home: React.FC = () => {

    return (
        <IndexPage>
            <RegisterPage />
        </IndexPage>
    )
}

export default Home;