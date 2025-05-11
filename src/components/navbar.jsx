import React, { useContext } from 'react';
import { Context } from '../components/Context';  

const Navbar = () => {
    const { theme, ThemeToggle } = useContext(Context);
    return (
        <nav className='py-4 px-6 bg-inherit'>
            <div className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>
            <div className="container  flex justify-between items-center">
                <div>
                    <a href="/" className=" text-xl font-normal">U.ART</a>
                </div>
                <div>
                    <button onClick={ThemeToggle}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
            </div>
            </div>
        </nav>
    );
}
export default Navbar;