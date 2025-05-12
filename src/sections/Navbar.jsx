import React, { useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-scroll';

const NavItems = () => {
    return (
        <ul className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6'>
            {navLinks.map(({ id, href, name }) => (
                <li key={id}>
                    <Link
                        to={href.replace('#', '')} // remove '#' from id
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust if you have a fixed navbar
                        className='text-neutral-400 hover:text-white transition-colors cursor-pointer'
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 px-4'>
                    <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        Krishma
                    </a>
                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menu'>
                        <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                    </button>
                    {/* Desktop Navigation */}
                    <nav className='hidden sm:flex'>
                        <NavItems />
                    </nav>
                </div>
                </div>
                {/* Mobile Navigation */}
                <div className={`nav-sidebar ${isOpen?
                    'max-h-screen':'max-h-0'}`}>
                        <nav className='p-5'>
                            <NavItems/>
                        </nav>
                    </div>
        </header>
    );
};

export default Navbar;
