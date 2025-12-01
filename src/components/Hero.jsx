function Hero() {
    return (
        <header className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
            <div className="max-w-7xl w-full">
                <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                    <div className="h-px w-12 bg-swiss-red"></div>
                    <p className="font-serif italic text-2xl md:text-3xl text-text-secondary">
                        Politecnico di Milano Application
                    </p>
                </div>

                <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl uppercase swiss-title mb-8 text-text-primary">
                    Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-swiss-red to-red-800">Product</span><br />
                    Manager & <br />
                    UI/UX Designer
                </h1>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-border-color pt-8 mt-12">
                    <div className="max-w-xl mb-8 md:mb-0">
                        <p className="text-lg text-text-secondary leading-relaxed">
                            I bridge the gap between <strong className="text-text-primary">Information Systems
                                engineering</strong> and <strong className="text-text-primary">User Experience design</strong>.
                            My portfolio demonstrates a deliberate approach to solving problems through technology, grounded
                            in research and executed with precision.
                        </p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <p className="font-mono text-sm text-text-secondary mb-1">CANDIDATE FROM</p>
                        <p className="font-mono text-sm text-text-secondary">WONOSOBO, INDONESIA</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;
