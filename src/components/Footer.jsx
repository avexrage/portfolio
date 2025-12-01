function Footer() {
    return (
        <footer id="contact" className="bg-swiss-red text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
                <div>
                    <a
                        href="mailto:farisjeh425@gmail.com"
                        className="font-display font-bold text-5xl md:text-7xl underline decoration-4 hover:opacity-80 transition-opacity break-all"
                    >
                        faris jeh425@gmail.com
                    </a>
                </div>
            </div>

            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <p className="font-display font-bold text-xl mb-2">Maulana Faris Sidqi</p>
                    <p>Wonosobo, Indonesia</p>
                </div>
                <div className="flex gap-8">
                    {/* Social links commented out as per user's HTML */}
                </div>
                <div className="md:text-right mt-4 md:mt-0">
                    <p>&copy; 2025 Maulana Faris Sidqi</p>
                    <p className="text-sm opacity-70 mt-1">Politecnico di Milano Application</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
