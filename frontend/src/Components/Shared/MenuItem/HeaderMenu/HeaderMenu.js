import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Root/Context/AuthProvider';
import './HeaderMenu.css'

const HeaderMenu = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
            <li><Link to="/" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Home</Link></li>
            {
                user?.displayName? 
                <>
                    <li><Link to="/dashboard" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Dashboard</Link></li>

                    {/* <li><Link to="/" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">{user?.displayName? user?.displayName : ' '}</Link></li> */}
                </>
                :
                <>
                </>
            }
            

            
        </>
    );
};

export default HeaderMenu;