function HavengurtProject() {
    return (
        <div className="border-t border-border-color">
            <div className="group py-16">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-10">
                    <div className="flex items-start gap-6">
                        <span className="font-mono text-swiss-red pt-2">02</span>
                        <div>
                            <h3 className="font-display text-5xl md:text-7xl uppercase mb-2 text-text-primary">Havengurt</h3>
                            <div className="flex gap-2">
                                <span className="bg-swiss-red text-white text-[10px] font-bold uppercase px-2 py-0.5 tracking-wider">
                                    Entrepreneurial Venture
                                </span>
                                <span className="bg-accent-subtle text-text-secondary text-[10px] font-bold uppercase px-2 py-0.5 tracking-wider">
                                    Product Management
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <p className="font-serif italic text-xl text-text-primary">Founder & Product Manager</p>
                        <p className="font-mono text-xs text-text-secondary mt-1">Feb 2025 - Current</p>
                    </div>
                </div>

                <div className="flex flex-col gap-12">
                    {/* Hero Image */}
                    <div className="img-zoom-container w-full h-[500px] bg-bg-tertiary relative group overflow-hidden border border-border-color">
                        <img
                            src="/hero.png"
                            alt="Havengurt Landing Page"
                            className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Narrative & Process */}
                        <div className="lg:col-span-2 prose max-w-none">
                            <h4 className="font-display text-2xl uppercase tracking-wide mb-4 text-text-primary">
                                Direct-to-Consumer Platform
                            </h4>
                            <p className="text-text-secondary mb-8 leading-relaxed">
                                A bespoke web platform establishing a direct sales channel for authentic Wonosobo
                                products. This project demonstrates my ability to merge <strong>entrepreneurial
                                    strategy</strong> with <strong>technological implementation</strong>.
                            </p>

                            {/* Director-Agent Model Narrative */}
                            <div className="mb-8 border-l-4 border-swiss-red bg-bg-secondary p-6 md:p-8">
                                <h5 className="font-display text-xl uppercase tracking-wider text-text-primary mb-4">
                                    Strategic Workflow: The "Director-Agent" Model
                                </h5>
                                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                                    <strong className="text-text-primary">The Hook:</strong> This project is not just a
                                    display of web design skills; it is a demonstration of modern workflow
                                    orchestration. Instead of manually coding HTML/CSS from scratch, I utilized a
                                    "Director-Agent" model to achieve rapid-prototyping at 10x speed.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-bg-tertiary p-4 border border-border-color">
                                        <div className="flex items-center gap-2 mb-2">
                                            <i className="fas fa-user-tie text-swiss-red"></i>
                                            <strong className="text-sm font-bold text-text-primary uppercase">My Contribution</strong>
                                            <span className="text-[10px] bg-bg-primary px-1.5 border border-border-color text-text-secondary">
                                                Technical Director
                                            </span>
                                        </div>
                                        <p className="text-xs text-text-secondary">
                                            Handled the creative direction, brand strategy, UX logic, and high-fidelity
                                            UI design in Figma. Provided the "Human-in-the-Loop" intuition and strategic oversight.
                                        </p>
                                    </div>
                                    <div className="bg-bg-tertiary p-4 border border-border-color">
                                        <div className="flex items-center gap-2 mb-2">
                                            <i className="fas fa-robot text-accent-subtle"></i>
                                            <strong className="text-sm font-bold text-text-primary uppercase">The AI's Contribution</strong>
                                            <span className="text-[10px] bg-bg-primary px-1.5 border border-border-color text-text-secondary">
                                                Junior Developer
                                            </span>
                                        </div>
                                        <p className="text-xs text-text-secondary">
                                            Gemini 3 Pro acted as the execution engine, translating my visual pixels
                                            into semantic code. It handled syntax and boilerplate, allowing for instant iteration.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs font-mono text-swiss-red uppercase tracking-widest border-t border-border-color pt-4">
                                    Value: Demonstrates adaptability, literacy in emerging tech, and high-velocity output.
                                </p>
                            </div>

                            {/* Execution Pipeline */}
                            <div className="mb-8 border border-border-color bg-bg-secondary p-6 md:p-8 rounded-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="flex h-3 w-3 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-swiss-red opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-swiss-red"></span>
                                    </span>
                                    <h5 className="font-display text-lg uppercase tracking-wider text-text-primary">
                                        Execution Pipeline
                                    </h5>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6 text-sm">
                                    <div className="space-y-2">
                                        <strong className="text-swiss-red font-mono text-xs uppercase block">
                                            01. Visual Design (Figma)
                                        </strong>
                                        <p className="text-text-secondary">
                                            Established "Authentic Minimalism" hierarchy. Designed comprehensive interface focusing on premium/organic typography and color theory.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <strong className="text-swiss-red font-mono text-xs uppercase block">
                                            02. Translation (Gemini 3 Pro)
                                        </strong>
                                        <p className="text-text-secondary">
                                            Orchestrated multimodal AI to interpret spatial relationships and "Clean Health" aesthetics, automating the code translation layer.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <strong className="text-swiss-red font-mono text-xs uppercase block">
                                            03. Deployment (Antigravity)
                                        </strong>
                                        <p className="text-text-secondary">
                                            Leveraged Antigravity to stabilize code generation, ensuring semantic, responsive, and deployable production code.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 border border-border-color">
                                    <img
                                        src="/havenfigma.png"
                                        alt="Figma Visual Design Draft"
                                        className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="bg-bg-tertiary p-2 border-t border-border-color">
                                        <p className="font-mono text-[10px] text-center text-text-secondary uppercase tracking-widest">
                                            Figure 1: Initial Figma Visual Design
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Design Methodology */}
                            <div className="bg-bg-tertiary p-8 border-l-2 border-swiss-red/50 hover:border-swiss-red transition-colors">
                                <h5 className="font-mono text-xs uppercase tracking-widest mb-6 text-swiss-red">Design Methodology</h5>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <strong className="text-text-primary block mb-2 font-display uppercase tracking-wide">
                                            01. Visual Hierarchy
                                        </strong>
                                        <p className="text-sm text-text-secondary">
                                            Prioritized value proposition ("Real Fruit") over brand name to reduce cognitive load and increase immediate conversion.
                                        </p>
                                    </div>
                                    <div>
                                        <strong className="text-text-primary block mb-2 font-display uppercase tracking-wide">
                                            02. Trust Signals
                                        </strong>
                                        <p className="text-sm text-text-secondary">
                                            Implemented "Verified by Science" data visualization to transform the "homemade" perception into a verified quality asset.
                                        </p>
                                    </div>
                                    <div>
                                        <strong className="text-text-primary block mb-2 font-display uppercase tracking-wide">
                                            03. Mental Models
                                        </strong>
                                        <p className="text-sm text-text-secondary">
                                            Organized catalog by form factor (Drink vs Scoop) rather than flavor, aligning with user decision-making patterns.
                                        </p>
                                    </div>
                                    <div>
                                        <strong className="text-text-primary block mb-2 font-display uppercase tracking-wide">
                                            04. Microcopy
                                        </strong>
                                        <p className="text-sm text-text-secondary">
                                            Used "Add to Pre-order" instead of generic "Buy" to transparently manage lead-time expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a
                                    href="https://havengurt.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 text-text-primary border border-border-color px-6 py-3 hover:bg-swiss-red hover:border-swiss-red hover:text-white transition-all text-sm uppercase tracking-widest font-bold"
                                >
                                    Visit Live Platform <i className="fas fa-arrow-right group-hover:-rotate-45 transition-transform duration-300"></i>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Artifacts */}
                        <div className="lg:col-span-1 flex flex-col gap-8">
                            <div className="p-6 bg-bg-tertiary border border-border-color sticky top-24">
                                <h5 className="font-mono text-xs text-swiss-red mb-4 uppercase tracking-widest">
                                    High-Fidelity Artifacts
                                </h5>
                                <h4 className="font-display text-xl uppercase mb-4 text-text-primary">Packaging System</h4>
                                <p className="text-xs text-text-secondary leading-relaxed mb-6">
                                    A unified labeling system designed to maintain brand consistency across physical
                                    touchpoints. Accommodates dynamic flavor variations (Dragon Fruit, Mango, Original).
                                </p>

                                {/* Compact Label Stack */}
                                <div className="space-y-3">
                                    <div className="group relative w-full aspect-[2.5/1] overflow-hidden border border-border-color bg-bg-primary">
                                        <img
                                            src="/naga.png"
                                            alt="Dragon Fruit Yogurt Label"
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                    <div className="group relative w-full aspect-[2.5/1] overflow-hidden border border-border-color bg-bg-primary">
                                        <img
                                            src="/mango.png"
                                            alt="Mango Yogurt Label"
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                    <div className="group relative w-full aspect-[2.5/1] overflow-hidden border border-border-color bg-bg-primary">
                                        <img
                                            src="/ori.png"
                                            alt="Original Yogurt Label"
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">
                                        [Print-Ready Assets]
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HavengurtProject;
