import React, { useContext } from 'react';
import { AuthContext } from '../../Root/Context/AuthProvider';
import './Home.css'

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <section className='h-screen flex justify-center items-center'>
            <h1 className='text-5xl'>Hello {
                user?.displayName ? `${user.displayName}` : "User"
            } !!!</h1>
        </section>
    );
};

export default Home;