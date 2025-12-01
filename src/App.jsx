import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Check local storage or system preference
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute('data-theme', storedTheme);
        } else if (!prefersDark) {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="antialiased selection:bg-swiss-red selection:text-white">
            <Navigation theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <Thesis />
            <Projects />
            <About />
            <Footer />
        </div>
    );
}

export default App;
