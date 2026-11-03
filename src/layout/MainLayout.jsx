import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;