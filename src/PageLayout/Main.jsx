import { Outlet } from 'react-router-dom';
import Navber from '../page/shared/Navber';
import Footer from '../page/shared/Footer';

const Main = () => {
    return (
        <div>
        <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;