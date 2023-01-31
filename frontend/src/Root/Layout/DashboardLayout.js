import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Components/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <section>
            <Header></Header>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    
                    <Outlet></Outlet>

                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label> 
                    <ul class="menu p-4 w-80 bg-base-100 text-base-content">

                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/frontend'>Frontend</Link></li>
                    <li><Link to='/dashboard/admin'>Admin</Link></li>
                    </ul>
                
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;