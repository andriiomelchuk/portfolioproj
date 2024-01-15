import { Outlet } from 'react-router-dom'
import Nav from "../Components/Nav/Nav";
import Header from "./Header";
import Footer from "./Footer";
import {Container, CssBaseline} from "@mui/material";

const Layout = () => {
    return (
        <>
            <Header />
            <CssBaseline />
            <Container maxWidth="sm">
                <Outlet />
            </Container>

            <Footer />
        </>
    )
}

export default Layout