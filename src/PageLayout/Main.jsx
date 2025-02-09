import { Outlet } from 'react-router-dom';
import Navber from '../page/shared/Navber';

const Main = () => {
    return (
        <div>
        <Navber></Navber>
            <Outlet></Outlet>
            <footer>this is footer</footer>
        </div>
    );
};

export default Main;