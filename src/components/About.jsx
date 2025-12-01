function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-bg-secondary text-text-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-display text-swiss-red text-4xl font-bold">04</span>
                        <h2 className="font-serif italic text-4xl md:text-5xl">Statement of Intent</h2>
                    </div>

                    <p className="text-lg leading-relaxed mb-8 font-light text-text-primary">
                        My professional philosophy is grounded in <strong className="font-bold">learning from the past while
                            planning for the future</strong>. I actively invest time in seizing opportunities to create
                        meaningful impact through technology.
                    </p>

                    <p className="text-base text-text-secondary mb-10 leading-relaxed">
                        One of my proudest outcomes is conceiving and birthing <strong className="text-text-primary">Havengurt</strong>,
                        a direct-to-consumer platform that transformed my family's yogurt business into a scalable operation,
                        securing a distribution deal with a local retail chain.
                    </p>

                    <div className="border-t border-border-color pt-10">
                        <h3 className="font-display uppercase text-xl tracking-wider mb-6 text-text-primary">Core Competencies</h3>
                        <div className="grid grid-cols-2 gap-y-4">
                            <div className="space-y-1">
                                <p className="text-swiss-red text-sm font-bold uppercase tracking-wide">Strategy</p>
                                <p className="text-text-secondary text-sm">Product Roadmapping</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-swiss-red text-sm font-bold uppercase tracking-wide">Execution</p>
                                <p className="text-text-secondary text-sm">Agile Development</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-swiss-red text-sm font-bold uppercase tracking-wide">Design</p>
                                <p className="text-text-secondary text-sm">High-Fidelity Prototyping</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-swiss-red text-sm font-bold uppercase tracking-wide">Research</p>
                                <p className="text-text-secondary text-sm">User Testing & Validation</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-display text-swiss-red text-4xl font-bold">05</span>
                        <h2 className="font-serif italic text-4xl md:text-5xl">Technical Stack</h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-display uppercase text-sm tracking-wider mb-3 text-text-secondary">Design Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">Figma</span>
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">Adobe XD</span>
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">Balsamiq</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-display uppercase text-sm tracking-wider mb-3 text-text-secondary">Development</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">HTML/CSS</span>
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">JavaScript</span>
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">React</span>
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">Tailwind CSS</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-display uppercase text-sm tracking-wider mb-3 text-text-secondary">Methodologies</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">Waterfall</span>
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">Agile/Scrum</span>
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">Design Thinking</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-display uppercase text-sm tracking-wider mb-3 text-text-secondary">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">Bahasa Indonesia (Native)</span>
                                <span className="px-4 py-2 bg-bg-primary border border-border-color text-text-primary text-sm">English (Professional)</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 p-6 bg-bg-tertiary border-l-4 border-swiss-red">
                        <p className="text-sm text-text-secondary italic">
                            "I believe the best digital products emerge when technical feasibility, user empathy, and
                            business viability converge. My goal is to join a program that values this intersection."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
