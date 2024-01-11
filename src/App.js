import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import BasePage from "./pages/BasePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/globals.scss";
import "./styles/custom.scss"; 
function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Layout>
                    <BasePage />
                </Layout>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
