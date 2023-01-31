import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Root/Context/AuthProvider";
import HeaderMenu from "../MenuItem/HeaderMenu/HeaderMenu";
import "./Header.css";

const Header = () => {
    const {user, logout} = useContext(AuthContext)
    const navigator = useNavigate()
    const handleLogout = () =>{
        logout()
        .then(()=>{
            toast.success(`${user.displayName} Logout Sucessfully`)
            navigator('/signin')
        }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
    }
  return (
    <header>
      <div className="">
        {/* <!-- lg+ --> */}
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:h-24 lg:px-8 lg:py-6">
          <div className="flex-shrink-0">
            <Link to="/" title="" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              />
            </Link>
          </div>

          <ul className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <HeaderMenu></HeaderMenu>
          </ul>

          <ul className="hidden lg:flex lg:items-center lg:space-x-10">
            {
                user?.displayName ?
                <>
                    <li><Link to="/" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">{user?.displayName? user?.displayName : ' '}</Link></li>

                    <li onClick={handleLogout}><Link
                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                        Sign Out{" "}
                    </Link></li>
                </> 
                : 
                <>
                    <li><Link to="/signup"
                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign up
                    </Link></li>

                    <li><Link to="/signin"
                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                        Sign in{" "}
                    </Link></li>
                </>
            }
            
          </ul>
        </nav>

        {/* <!-- xs to lg --> */}
        <nav className="flex flex-col py-4 space-y-2 lg:hidden">
          <HeaderMenu></HeaderMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
