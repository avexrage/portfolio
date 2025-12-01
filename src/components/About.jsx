function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-bg-secondary text-text-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Left Column */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-display text-swiss-red text-4xl font-bold">04</span>
                        <h2 className="font-serif italic text-4xl md:text-5xl">Statement of Intent</h2>
                    </div>

                    <p className="text-lg leading-relaxed mb-6 font-light text-text-primary">
                        My professional philosophy is grounded in <strong className="font-bold">learning from the past while
                            planning for the future</strong>. I actively invest time in seizing opportunities to create value.
                    </p>

                    <p className="text-lg leading-relaxed mb-16 font-light text-text-primary">
                        I aim to bridge the gap between <strong className="font-bold">robust engineering</strong> and <strong className="font-bold">seamless user experience</strong>—a goal I intend to further at Politecnico di Milano.
                    </p>

                    {/* Education Section */}
                    <div>
                        <h3 className="font-display font-bold text-2xl uppercase mb-4 border-b-2 border-text-primary pb-2 inline-block">EDUCATION</h3>
                        <div className="w-full border-b border-text-primary mb-8"></div>

                        <div className="space-y-8">
                            {/* University */}
                            <div className="bg-bg-tertiary/30 p-4 -mx-4 rounded-sm">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-xl text-text-primary">University of Technology Yogyakarta</h4>
                                    <span className="font-mono text-xs text-text-secondary">2020 - 2024</span>
                                </div>
                                <p className="text-text-secondary mb-2">Bachelor Degree of Information System</p>
                                <p className="font-mono text-xs text-text-secondary tracking-wide">Final Grade: 3.56 / 4.00</p>
                            </div>

                            {/* Certification */}
                            <div className="bg-bg-tertiary/30 p-4 -mx-4 rounded-sm">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-xl text-text-primary">Google UX Design Professional</h4>
                                    <span className="font-mono text-xs text-text-secondary">2025 - Current</span>
                                </div>
                                <p className="text-text-secondary mb-2">Coursera Professional Certification</p>
                                <p className="font-mono text-xs text-text-secondary tracking-wide">Focus: IxD, Visual Design, Prototyping</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="pt-8">
                    {/* Digital & Design */}
                    <div className="mb-10">
                        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary mb-4 border-b border-border-color pb-2">Digital & Design</h4>
                        <div className="flex flex-wrap gap-3">
                            {['Figma (Interactive Prototyping)', 'Visual Hierarchy', 'Design Systems', 'Canva', 'Digital Marketing'].map((skill) => (
                                <span key={skill} className="px-4 py-2 rounded-full border border-text-primary text-text-primary text-sm font-medium hover:bg-text-primary hover:text-bg-primary transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Technical Engineering */}
                    <div className="mb-10">
                        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary mb-4 border-b border-border-color pb-2">Technical Engineering</h4>
                        <div className="flex flex-wrap gap-3">
                            {['Web Development (FE/BE)', 'Database Management', 'System Analysis', 'AI Workflow Orchestration'].map((skill) => (
                                <span key={skill} className="px-4 py-2 rounded-full border border-text-primary text-text-primary text-sm font-medium hover:bg-text-primary hover:text-bg-primary transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary mb-4 border-b border-border-color pb-2">Languages</h4>
                        <div className="space-y-0 divide-y divide-border-color">
                            <div className="flex justify-between items-center py-3">
                                <span className="text-text-primary">Indonesian</span>
                                <span className="bg-text-primary text-bg-primary text-xs font-bold px-2 py-1 rounded-sm">Native</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-text-primary">English (Reading/Listening)</span>
                                <span className="bg-text-primary text-bg-primary text-xs font-bold px-2 py-1 rounded-sm">C1</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-text-primary">English (Writing/Speaking)</span>
                                <span className="bg-text-primary text-bg-primary text-xs font-bold px-2 py-1 rounded-sm">B2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
