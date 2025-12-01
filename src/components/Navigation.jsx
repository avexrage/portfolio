import { useState } from 'react';

function Navigation({ theme, toggleTheme }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 mix-blend-difference px-6 py-6 flex justify-between items-center text-white">
                <a href="#hero" className="font-display font-bold text-xl tracking-tighter uppercase cursor-pointer hover:opacity-80 transition-opacity">
                    M. Faris Sidqi<span className="text-swiss-red">.</span>
                </a>
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8 font-sans text-sm uppercase tracking-widest">
                        <a href="#thesis" className="hover:text-swiss-red transition-colors">Academic Research</a>
                        <a href="#projects" className="hover:text-swiss-red transition-colors">Selected Projects</a>
                        <a href="#about" className="hover:text-swiss-red transition-colors">Profile</a>
                        <a href="#contact" className="hover:text-swiss-red transition-colors">Contact</a>
                    </div>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? (
                            <i className="fas fa-sun text-lg"></i>
                        ) : (
                            <i className="fas fa-moon text-lg"></i>
                        )}
                    </button>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white"
                        >
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`${mobileMenuOpen ? '' : 'hidden'} fixed inset-0 z-40 bg-bg-primary flex flex-col justify-center items-center gap-8 text-2xl font-display uppercase text-text-primary`}
            >
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-6 right-6 text-text-primary"
                >
                    <i className="fas fa-times text-3xl"></i>
                </button>
                <a href="#thesis" onClick={() => setMobileMenuOpen(false)}>Academic Research</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>Profile</a>
            </div>
        </>
    );
}

export default Navigation;
