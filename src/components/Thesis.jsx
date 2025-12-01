function Thesis() {
    return (
        <section id="thesis" className="py-24 px-6 md:px-12 lg:px-24 bg-bg-secondary">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 border-b border-border-color pb-6">
                    <div className="flex items-baseline gap-4">
                        <span className="font-display text-swiss-red text-4xl font-bold">01</span>
                        <h2 className="font-display font-bold text-4xl md:text-5xl uppercase text-text-primary">
                            Academic Research
                        </h2>
                    </div>
                    <span className="font-mono text-sm text-text-secondary mt-2 md:mt-0 uppercase tracking-widest">
                        Bachelor Thesis Abstract
                    </span>
                </div>

                <div className="academic-paper p-8 md:p-12 rounded-sm shadow-xl relative overflow-hidden group">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-swiss-red opacity-5 rounded-bl-full pointer-events-none"></div>

                    <div className="mb-8">
                        <span className="inline-block py-1 px-3 border border-swiss-red text-swiss-red text-xs font-bold uppercase tracking-widest mb-4">
                            Information Systems
                        </span>
                        <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-2 text-text-primary">
                            Development of the Information System for Day Care and Wisma Registration
                        </h3>
                        <p className="font-mono text-sm text-text-secondary">
                            Wredha Mulya Foundation, Sleman, DIY | 2024
                        </p>
                    </div>

                    <div className="prose prose-lg text-text-secondary font-serif leading-relaxed text-justify max-w-none">
                        <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-text-primary first-letter:mr-3 first-letter:float-left">
                            Yayasan Wredha Mulya is a foundation that serves independent elderly people with Day Care and
                            Grha Wredha Mulya programs. Currently, the absence of a digital information system forces
                            individuals to visit physically for registration and information, creating accessibility
                            barriers for those living far away.
                        </p>
                        <p className="mb-6">
                            To address this, I developed a comprehensive registration information system using the
                            <strong> Waterfall method</strong>. The system facilitates online registration, provides complete
                            program information, and solves current data storage illegibility issues.
                        </p>
                        <div className="bg-bg-primary p-6 border-l-2 border-text-secondary/30 my-8">
                            <p className="italic text-text-primary m-0">
                                <strong>Key Result:</strong> Black-box testing confirmed 100% reliability across 37
                                scenarios, ensuring the system functions robustly under various conditions.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border-color flex flex-wrap gap-4 items-center">
                        <span className="font-mono text-xs text-text-secondary uppercase">Keywords:</span>
                        <span className="text-xs bg-bg-primary border border-border-color px-3 py-1 rounded text-text-secondary">
                            Information Systems
                        </span>
                        <span className="text-xs bg-bg-primary border border-border-color px-3 py-1 rounded text-text-secondary">
                            Waterfall Methodology
                        </span>
                        <span className="text-xs bg-bg-primary border border-border-color px-3 py-1 rounded text-text-secondary">
                            Black-box Testing
                        </span>
                        <span className="text-xs bg-bg-primary border border-border-color px-3 py-1 rounded text-text-secondary">
                            System Architecture
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Thesis;
